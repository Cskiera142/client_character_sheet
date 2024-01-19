import portrait from "../../images/5one-1-2-3-4.jpg";
import "./CharacterPicture.css";

function CharacterPicture() {
  return (
    <div>
      <img id="character_image" src={portrait} />
    </div>
  );
}

export default CharacterPicture;
