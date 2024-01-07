import React, { useState } from "react";
import "../styles/index.css";

function PlayerInfo() {
  const [name, setName] = useState("");
  const [playerClass, setPlayerClass] = useState("");
  const [level, setLevel] = useState(1);

  return (
    <div id="name-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          style={{ marginLeft: "10px" }}
          type="text"
          id="name"
          className="name-field"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="class">Class:</label>
        <select
          style={{ marginLeft: "10px" }}
          id="class"
          className="name-field"
          value={playerClass}
          onChange={(e) => setPlayerClass(e.target.value)}
        >
          <option value="">Select your class</option>
          <option value="Cyborg">Human Cyborg</option>
          <option value="Hexian">Hexian Engineer</option>
          <option value="Erzan">Erzan Mystic</option>
          <option value="Gavonite">Gavonite Co-pilot</option>
          <option value="Gobrant">Gobrant Smuggler</option>
          <option value="Orkann">Orkann Mech Trooper</option>
          {/* Add more class options as needed */}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="level">Level:</label>
        <input
          style={{ marginLeft: "10px" }}
          type="number"
          id="level"
          className="name-field"
          placeholder="1"
          value={level}
          onChange={(e) => setLevel(Math.max(1, Math.min(e.target.value, 6)))}
        />
      </div>
    </div>
  );
}

export default PlayerInfo;
