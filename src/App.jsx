import TopSection from "./components/TopSection/TopSection";
import MidSection from "./components/MidSection/MidSection";
import BottomSection from "./components/BottomSection/BottomSection";
import "./styles/index.css";
import Circles from "./components/FlairComponents/Circles";
import "./styles/index.css";

function App() {
  return (
    <div id="app">
      <TopSection />
      <MidSection />
      <BottomSection />
      <Circles />
    </div>
  );
}

export default App;
