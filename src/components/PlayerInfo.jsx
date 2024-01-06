import React, { useState } from "react";
import "../styles/index.css";

function PlayerInfo() {
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [playerClass, setPlayerClass] = useState("");
  const [level, setLevel] = useState(1);

  return (
    <div id="name-container">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="class">Class:</label>
      <select
        id="class"
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
      <label htmlFor="level">Level:</label>
      <input
        type="number"
        id="level"
        placeholder="1"
        value={level}
        onChange={(e) => setLevel(Math.max(1, Math.min(e.target.value, 6)))}
      />
    </div>
  );
}

export default PlayerInfo;
