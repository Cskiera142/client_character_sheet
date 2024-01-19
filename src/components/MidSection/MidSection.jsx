import CharacterStats from "./CharacterStats";
import CharacterPicture from "./CharacterPicture";
import Equipment from "./Equipment";
import Abilities from "./Abilities";
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
