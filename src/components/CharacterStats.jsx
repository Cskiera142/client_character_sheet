import { useState } from "react";
import "../styles/CharacterPicture.css";

function CharacterStats() {
  const [statPoint, setStatPoint] = useState();

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "Column",
          marginBottom: "10px",
        }}
      >
        <div
          className="wrapper"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
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
        <div
          className="wrapper"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
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
        <div
          className="wrapper"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
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
        <div
          className="wrapper"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
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
        <div
          className="wrapper"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
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
        <div
          className="wrapper"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
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
    </div>
  );
}

export default CharacterStats;
