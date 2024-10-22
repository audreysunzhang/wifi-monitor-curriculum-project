import { useState, useEffect } from "react";
import WifiRating from "./WifiRating";
import Location from "./Location"; 
import Calendar from "./Calendar"; 

export default function Submission() {
  const [wifiRating, setWifiRating] = useState("");
  const [signalStrength, setSignalStrength] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(null); // Track selected date
  const [users, setUsers] = useState([]); // Store all users fetched from backend

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:2024/get-users");
      const data = await response.json();
      setUsers(data.results); 
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmit = async () => {
    if (!selectedLocation || !signalStrength || !wifiRating || !selectedDate) {
        alert("Please fill out all fields.");
        return;
    }

    const newSubmission = {
        location: selectedLocation,
        signal_strength: signalStrength,
        rating: wifiRating,
        date: selectedDate.toISOString() 
    };

    console.log("Submitting data:", newSubmission);

    try {
        const response = await fetch("http://localhost:2024/add-user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newSubmission),
        });

        const data = await response.json();
        if (data.success) {
            alert("Submission successful!");
            fetchUsers();
        }
    } catch (error) {
        console.error("Error submitting data:", error);
    }
};

  return (
    <div className="leftwrapper">
      <div className="location-dropdown">
        <p>Select your location:</p>
        <Location value={selectedLocation} onChange={setSelectedLocation} />
      </div>
      <div className="date-selection">
        <p>Select the date:</p>
        <Calendar value={selectedDate} onChange={setSelectedDate} />
      </div>
      <div className="wifibox">
        <p>What is the WiFi rating?</p>
        <WifiRating value={wifiRating} onChange={setWifiRating} />
      </div>
      <div className="strengthbox">
        <p>Signal strength (1-100):</p>
        <input
          type="number"
          value={signalStrength}
          onChange={(e) => setSignalStrength(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}