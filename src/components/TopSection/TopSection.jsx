import PlayerInfo from "./PlayerInfo";
import NumberGenerator from "../FlairComponents/NumberGenerator";
import VirtueMeterLine from "./VirtueMeter";
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
