import React, { useState } from "react";
import Item from "./Item";

function App() {

  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleText(event) {
    setText(event.target.value);
  }

  function addItem() {
    setItems((prevItems) => [...prevItems, text]);
    setText("");
  }

  function deleteItem(id) {
    setItems((prevItems)=>{
      return prevItems.filter(
        (item, index) => {
          return index !== id
        })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleText} type="text" value={text}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <Item 
              key={index} 
              id={index}
              item={item} 
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
