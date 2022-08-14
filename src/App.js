import { useState } from "react";
import Color from "./components/Color";
import Guess from "./components/Guess";

function App() {
  const [color, setColor] = useState("");

  function randomNumber() {
    return Math.floor(Math.random() * 256);
  }

  function colorGenerator() {
    const r = randomNumber();
    const g = randomNumber();
    const b = randomNumber();

    return setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <div className="app">
      <h1>Color Coded</h1>
      <Color colorGenerator={colorGenerator} color={color} />
      <h3>Guess the RGB color code:</h3>
      <Guess />
    </div>
  );
}

export default App;
