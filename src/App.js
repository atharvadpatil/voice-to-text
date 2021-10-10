import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="box">
        <h2>Current Note</h2>
        <button>Start/Stop</button>
        <button>Save Note</button>
      </div>
      <div className="box">
        <h2>Saved Notes</h2>
      </div>
    </div>
  );
}

export default App;
