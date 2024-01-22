import CharacterStats from "../characterStats/CharacterStats";
import CharacterPicture from "../characterPicture/CharacterPicture";
import Equipment from "../equipment/Equipment";
import Abilities from "../abilites/Abilities";
import "./MidSection.css";

function MidSection() {
  return (
    <div id="mid-container">
      <CharacterStats />
      <CharacterPicture />
      <div id="center-circles">
        <div id="outercircle"></div>
        <div id="innercircle"></div>
      </div>
      <Equipment />
      <Abilities />
    </div>
  );
}

export default MidSection;
