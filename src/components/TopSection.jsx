import PlayerInfo from "./PlayerInfo";
import NumberGenerator from "./NumberGenerator";
import VirtueMeterLine from "./VirtueMeter";
import "../styles/TopSection.css";

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
