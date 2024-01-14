import { useState } from "react";
import "../styles/CharacterPicture.css";

function CharacterStats() {
  const [statPoint, setStatPoint] = useState();

  return (
    <div id="stat-container">
      <div className="stat-line">
        <label htmlFor="name">STR</label>
        <input
          style={{ marginLeft: "10px" }}
          type="text"
          id="name"
          className="name-field"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setStatPoint(e.target.value)}
        />
      </div>
      <div className="stat-line">
        <label htmlFor="name">DEX</label>
        <input
          style={{ marginLeft: "10px" }}
          type="text"
          id="name"
          className="name-field"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setStatPoint(e.target.value)}
        />
      </div>
      <div className="stat-line">
        <label htmlFor="name">CON</label>
        <input
          style={{ marginLeft: "10px" }}
          type="text"
          id="name"
          className="name-field"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setStatPoint(e.target.value)}
        />
      </div>
      <div className="stat-line">
        <label htmlFor="name">INT</label>
        <input
          style={{ marginLeft: "10px" }}
          type="text"
          id="name"
          className="name-field"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setStatPoint(e.target.value)}
        />
      </div>
      <div className="stat-line">
        <label htmlFor="name">WIS</label>
        <input
          style={{ marginLeft: "10px" }}
          type="text"
          id="name"
          className="name-field"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setStatPoint(e.target.value)}
        />
      </div>
      <div className="stat-line">
        <label htmlFor="name">CHA</label>
        <input
          style={{ marginLeft: "10px" }}
          type="text"
          id="name"
          className="name-field"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setStatPoint(e.target.value)}
        />
      </div>
    </div>
  );
}

export default CharacterStats;
