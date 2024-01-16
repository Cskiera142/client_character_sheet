import "../styles/App.css";
import CharacterStats from "./CharacterStats";
import CharacterPicture from "./CharacterPicture";
import "../styles/MidSection.css";

function MidSection() {
  return (
    <div id="mid-container">
      <CharacterStats />
      <CharacterPicture />
    </div>
  );
}

export default MidSection;
