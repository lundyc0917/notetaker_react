import './App.css';
import React from "react";


function Time(){
  let currentDate = new Date().toLocaleString();
  
  return(
      <p>{currentDate} </p>
  )
}

function App() {
  return (
    <div className="App">
      <header className="jumbotron">
        <h1 className="display-3">Work Day Scheduler</h1>
        <p className="lead">A simple calendar app for scheduling your work day</p>
        <div id="currentDay" className="lead"><Time /></div>
      </header>
    </div>
  );
}

export default App;
