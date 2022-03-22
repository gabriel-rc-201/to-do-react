import React, { useState } from "react";

import List from "./List";
import "./Todo.css";

function Todo() {
  const [items, setItems] = useState([]);

  function onAddItem(item) {
    setItems([...items, item]);
  }

  return (
    <div className="container">
      <h1>Todo</h1>
      <TodoForm onAddItem={onAddItem}></TodoForm>
      <List items={items}></List>
    </div>
  );
}

function TodoForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function addItem(event) {
    event.preventDefault();
    if (text) {
      // setItems([...items, text]);
      props.onAddItem(text);
      setText("");
    }
  }
  return (
    <form action="">
      <input onChange={handleChange} type="text" value={text}></input>
      <button onClick={addItem}>Add</button>
    </form>
  );
}

export default Todo;
