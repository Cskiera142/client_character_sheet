import PlayerInfo from "../playerInfo/PlayerInfo";
import NumberGenerator from "../numberGenerator/NumberGenerator";
import VirtueMeterLine from "../virtueMeter/VirtueMeter";
import "./TopSection.css";

function TopSection() {
  return (
    <div id="top-section">
      <PlayerInfo />
      <NumberGenerator />
      <VirtueMeterLine />
    </div>
  );
}

export default TopSection;
