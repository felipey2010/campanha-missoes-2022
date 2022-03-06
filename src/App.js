import { useState } from "react";
import "./styles/App.css";
import jmn from "./images/img_2.png";
import ibg from "./images/ibg logo.png";
import EventListener from "./components/EventListener";
import viva from "./images/img_3.png";

function App() {
  const [showMeter, setShowMeter] = useState(false);
  return (
    <div className="App">
      <header>
        <img src={jmn} alt="logo 1" />
        <img src={ibg} alt="logo 2" />
      </header>
      <div className="middle-div">
        <EventListener showMeter={showMeter} />
        <button className="btn" onClick={() => setShowMeter(!showMeter)}>
          {showMeter ? "Esconder Alvômetro" : "Mostrar Alvômetro"}
        </button>
      </div>

      <div className="bottom-div">
        <img src={viva} alt="viva" />
      </div>
    </div>
  );
}

export default App;
