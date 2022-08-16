import { useState } from "react";
import Color from "./components/Color";

function App() {
  const [color, setColor] = useState("");
  const [guess, setGuess] = useState({});

  function randomNumber() {
    return Math.floor(Math.random() * 256);
  }

  function colorGenerator() {
    const r = randomNumber();
    const g = randomNumber();
    const b = randomNumber();

    return setColor(`rgb(${r}, ${g}, ${b})`);
  }

  function handleChange(e) {
    const name = e.target.name;

    // allow only numbers
    const value = e.target.value.replace(/\D/g, "");

    setGuess((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="app">
      <h1>Color Coded</h1>
      <p>Click the circle below to generate a color!</p>
      <Color colorGenerator={colorGenerator} color={color} />
      <h3>Guess the RGB color code:</h3>
      <div className="guess">
        <form className="form" onSubmit={handleSubmit}>
          rgb(
          <input
            placeholder="red"
            type="text"
            maxLength={3}
            name="red"
            value={guess.red || ""}
            onChange={handleChange}
          />
          ,
          <input
            placeholder="green"
            type="text"
            maxLength={3}
            name="green"
            value={guess.green || ""}
            onChange={handleChange}
          />
          ,
          <input
            placeholder="blue"
            type="text"
            maxLength={3}
            name="blue"
            value={guess.blue || ""}
            onChange={handleChange}
          />
          )
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>

      <footer>Made by Kelsi Olstad✨</footer>
    </div>
  );
}

export default App;
