import React, {useState} from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello");

  function handleClick() {
    setHeadingText("Welcome");
  }

  const [currentColor, setColor] = useState({backgroundColor:"white"});

  function changeColor() {
    setColor({backgroundColor:"black"});
  }

  function changeColorToWhite() {
    setColor({backgroundColor:"white"});
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={currentColor} onClick={handleClick} onMouseOver={changeColor} onMouseOut={changeColorToWhite}>Submit</button>
    </div>
  );
}

export default App;
