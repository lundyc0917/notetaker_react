import React, { Component } from "react";

// 

var hourNow = new Date().toLocaleTimeString();
hourNow = hourNow.substring(0,2);
console.log(hourNow);


const timesEl = ["8 am", "9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm"];

class timeBlocks extends Component {
  state = {
    note: '',
    id: ''
  }

	componentDidMount() {
		for (var i = 0; i < 9; i++) {
			var displayItem = localStorage.getItem(i);
			if (displayItem && this.props.id === i) {
				this.setState({
					note: displayItem,
					id: i
				});
			}
		}
	}

	submitNote = (event) => {
		event.preventDefault();
		var itemID = this.state.id;
		var itemNote = this.state.note;
		localStorage.setItem(itemID, itemNote);
    console.log(itemNote);
	}

  noteChange = (event) => {
    let value = event.target.value;
    let itemID = event.target.id;

    this.setState({
      note: value,
      id: itemID
    });
  }

   timeColor = (event) => {
     event.preventDefault();
    var hourNow = new Date().toLocaleTimeString();
    hourNow = hourNow.substring(0,2);
    var itemID = this.state.id;

    if (itemID === hourNow){
      return 'present';
    }else if(hourNow > itemID){
      return 'past';
    }else{
      return 'future';
    }
  }


  render() {
    return (
        <div className="notes" key={this.props.id}>
        <div className="input-group row time-block">
            <span className="input-group-text hour">{timesEl[this.props.id]}</span>
            <textarea
                // className={this.timeColor}
                className="description"
                value={this.state.note}
                id={this.props.id}
                aria-label=""
                onChange={this.noteChange}
            />
            <button className="saveBtn" onClick={this.submitNote}>Save
            </button>
        </div>
    </div>
    )
  }
}

export default timeBlocks;