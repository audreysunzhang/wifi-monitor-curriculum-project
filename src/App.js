// src/App.js
import React from "react";
import './App.css';
import Map from "./components/Map/Map";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className = "neon-rainbow">Wifi Monitor</h2>
      </header>
      <div className="App-content">
        <div className="submissionComponents">
            <div>
              {/* audrey put ur stuff here */}
             <p>test</p>
            </div>
        </div>
        <div className="Map-container">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
