import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [input, setInput] = useState({
    textinput: "",
    numinput: ""
  });
  const handleInput = (event) => {
    // use console.log
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);

    setInput({ ...input, [name]: value });
  };

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor="text-input">Text Input:- </label>
      <input
        id="text-input"
        type={"text"}
        value={input.textinput}
        onChange={handleInput}
        name="textinput"
      />

      <br />
      <br />

      <label htmlFor="num-input">Number input:- </label>
      <input
        id="num-input"
        type={"number"}
        value={input.numinput}
        onChange={handleInput}
        name="numinput"
      />
      <br />
    </div>
  );
};

export default App;
