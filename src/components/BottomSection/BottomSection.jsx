import React from "react";
import Stats from "./Stats";
import NumberGenerator from "../FlairComponents/NumberGenerator";
import Graphic from "./Graphic";
import PowerCore from "./PowerCore";
import "../../styles/BottomSection.css";

function BottomSection() {
  return (
    <div id="bottom-wrapper">
      <Stats />
      <NumberGenerator />
      <Graphic />
      <PowerCore />
    </div>
  );
}

export default BottomSection;
