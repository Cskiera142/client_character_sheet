import React from "react";
import Stats from "../stats/Stats";
import NumberGenerator from "../numberGenerator/NumberGenerator";
import Graphic from "../graphic/Graphic";
import PowerCore from "../powerCore/PowerCore";
import "./BottomSection.css";

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
