import React, { useState } from "react";
import "../styles/App.css";
const App = (event) => {
  // const [input, setInput] = useState({
  //   textInput: "",
  //   numInput: ""
  // });
  // const handleInput = (event) => {
  //   // use console.log
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   console.log(name, value);

  //   setInput({ ...input, [name]: value });
  // };

  // // do not change id of input elements
  // return (
  //   <div id="main">
  //     <label htmlFor="text-input">Text Input:- </label>
  //     <input
  //       id="text-input"
  //       type={"text"}
  //       value={input.textinput}
  //       onChange={handleInput}
  //       name="text-input is"
  //     />

  //     <br />
  //     <br />

  //     <label htmlFor="num-input">Number input:- </label>
  //     <input
  //       id="num-input"
  //       type={"number"}
  //       value={input.numinput}
  //       onChange={handleInput}
  //       name="num-input is"
  //     />
  //     <br />
  //   </div>
  // );
  // const handleInput = (event) => {
  //   console.log("Input in #" + event.target.id + " is " + event.target.value);
  // };

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor="text-input">Text Input:- </label>
      <input
        id="text-input"
        type="text"
        onChange={(e) => {
          console.log(
            "Input in #" + event.target.id + " is " + event.target.value
          );
        }}
      />

      <br />
      <br />

      <label htmlFor="num-input">Number input</label>
      <input
        id="num-input"
        type="number"
        onChange={(e) => {
          console.log(
            "Input in #" + event.target.id + " is " + event.target.value
          );
        }}
      />
      <br />
    </div>
  );
};

export default App;
