import React from "react";
import './App.css';
import Map from "./components/Map/Map";
import Submission from "./components/Submission/Submission";
import 'animate.css';  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="neon-rainbow animate__animated animate__bounce">Wifi Monitor</h2>
      </header>
      <div className="App-content">
        <div className="submissionComponents">
          <Submission />
        </div>
        <div className="Map-container animate__animated animate__fadeIn">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
