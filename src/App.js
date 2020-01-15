import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // state variables to store the data coming from:
  const [value, setValue] = useState(); // data coming feom api stored here.
  const [die, setDie] = useState("6"); // data generated from rolling the dice.

  // function (react hook) run after the page loads to fetch the data from api
  useEffect(() => {
    axios.get("http://localhost:4000/api").then(response => {
      setValue(response.data);
    });
  }, []);
  // function to handle the dice rolling.
  const submitHandler = e => {
    e.preventDefault();
    setDie(Math.floor(Math.random() * value.faces + 1));
  };

  return (
    <React.Fragment>
      <h1> Die client</h1>
      <img src={imgUrl} width="25%" height="25%"></img>
      <p className="pargraph">press the button to roll the die.</p>
      <p>You may be lucky today.</p>

      <form onSubmit={submitHandler}>
        <label>Result:</label> <br></br>
        <input type="text" value={die}></input> <br></br>
        <input type="submit" value="Roll" />
      </form>
    </React.Fragment>
  );
}

export default App;

const imgUrl =
  "https://upload.wikimedia.org/wikipedia/fi/thumb/6/61/Metropolia_Ammattikorkeakoulu_logo.svg/1280px-Metropolia_Ammattikorkeakoulu_logo.svg.png";
