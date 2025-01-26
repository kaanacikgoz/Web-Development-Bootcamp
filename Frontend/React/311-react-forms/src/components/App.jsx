import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  
  function handleName(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setSubmittedName(name);
  }

  return (
    <div className="container">
      <h1>Hello {submittedName}</h1>
      <input onChange={handleName} type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
