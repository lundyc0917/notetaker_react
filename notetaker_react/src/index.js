import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tasks from './tasks';
import timeList from './timeList.json';


ReactDOM.render(
  <React.StrictMode>
    <App />
    {timeList.map((t) => <Tasks key={t.id} id={t.id} note={t.note} />)}
  </React.StrictMode>,
  document.getElementById('root'),
  document.getElementById('timeList')
);