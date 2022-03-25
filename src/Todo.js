import React, { useEffect, useState } from "react";

import Item from "./components/Item";
import List from "./components/List";
import Modal from "./components/Modal";
import TodoForm from "./components/TodoForm";
import "./Todo.css";

const SAVED_ITEMS = "savedItems";

function Todo() {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  }, [items]);

  function onAddItem(text) {
    let it = new Item(text);
    setItems([...items, it]);
    onHideModal();
  }

  function onItemDeleted(item) {
    let filteredItens = items.filter((it) => it.id !== item.id);
    setItems(filteredItens);
  }

  function onDone(item) {
    let updatedItems = items.map((it) => {
      if (it.id === item.id) it.done = !it.done;
      return it;
    });

    setItems(updatedItems);
  }

  function onHideModal(e) {
    setShowModal(false);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Todo</h1>
        <button
          className="addButton"
          onClick={() => {
            setShowModal(true);
          }}
        >
          +
        </button>
      </header>
      {/* <TodoForm onAddItem={onAddItem}></TodoForm> */}
      <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
      <Modal show={showModal} onHideModal={onHideModal}>
        <TodoForm onAddItem={onAddItem}></TodoForm>
      </Modal>
    </div>
  );
}

export default Todo;
