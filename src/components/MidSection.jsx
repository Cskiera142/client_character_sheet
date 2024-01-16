import "../styles/App.css";
import CharacterStats from "./CharacterStats";
import CharacterPicture from "./CharacterPicture";
import Equipment from "./Equipment";
import Abilities from "./Abilities";
import "../styles/MidSection.css";

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
