import React, { useState } from "react";

function App() {
  /*
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  function handleName(event) {
    setName(event.target.value);
  }
  function handleSurname(event) {
    setSurname(event.target.value);
  }
  */

  const [fullName, setFullName] = useState( {
    fName:"",
    lName:""
  })

  function handleChanges(event) {
    const {name, value} = event.target;

    setFullName((prevValue)=>({
      ...prevValue,
      [name]: value
    }))
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input onChange={handleChanges} name="fName" placeholder="First Name" value={fullName.fName}/>
        <input onChange={handleChanges} name="lName" placeholder="Last Name" value={fullName.lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
