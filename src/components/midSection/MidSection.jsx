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
      <Equipment />
      <Abilities />
    </div>
  );
}

export default MidSection;
