import './App.css';



function App() {
  return (
    <div className="App">
      <header className="jumbotron">
        <h1 className="display-3">Work Day Scheduler</h1>
        <p className="lead">A simple calendar app for scheduling your work day</p>
        <p id="currentDay" className="lead"></p>
      </header>

      <div className="container">
        <div className="row time-block" id="8am">
          <div className="hour">8:00 AM</div>
          <textarea id="hour8" rows="2" className="description"></textarea>
          <button className="saveBtn">Save</button>
        </div>
        <div className="row time-block" id="9am">
          <div className="hour">9:00 AM</div>
          <textarea id="hour9" rows="2" className="description"></textarea>
          <button className="saveBtn">Save</button>
        </div>
        <div className="row time-block" id="10am">
          <div className="hour">10:00 AM</div>
          <textarea id="hour10"rows="2" className="description"></textarea>
          <button className="saveBtn">Save</button>
        </div>
        <div className="row time-block" id="11am">
          <div className="hour">11:00 AM</div>
          <textarea id="hour11" rows="2" className="description"></textarea>
          <button className="saveBtn">Save</button>
        </div>
        <div className="row time-block" id="12pm">
          <div className="hour">12:00 PM</div>
          <textarea id="hour12" rows="2" className="description"></textarea>
          <button className="saveBtn">Save</button>
        </div>
        <div className="row time-block" id="1pm">
          <div className="hour">1:00 PM</div>
          <textarea id="hour13" rows="2" className="description"></textarea>
          <button className="saveBtn">Save</button>
        </div>
        <div className="row time-block" id="2pm">
          <div className="hour">2:00 PM</div>
          <textarea id="hour14" rows="2" className="description"></textarea>
          <button className="saveBtn">Save</button>
        </div>
        <div className="row time-block" id="3pm">
          <div className="hour">3:00 PM</div>
          <textarea id="hour15" rows="2" className="description"></textarea>
          <button className="saveBtn">Save</button>
        </div>
        <div className="row time-block" id="4pm">
          <div className="hour">4:00 PM</div>
          <textarea id="hour16" rows="2" className="description"></textarea>
          <button className="saveBtn">Save</button>
        </div>
        <div className="row time-block" id="5pm">
          <div className="hour">5:00 PM</div>
          <textarea id="hour17" rows="2" className="description"></textarea>
          <button className="saveBtn">Save</button>
        </div>
      </div>
    </div>
  );
}

export default App;
