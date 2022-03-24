import React from "react";
import Card from "./Card";

function DoneImg(props) {
  if (props.done) {
    return <img src="./assets/check_ok.png" alt="done" width={25} />;
  } else {
    return <img src="./assets/check.png" alt="undone" width={25} />;
  }
}

function ListItem(props) {
  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"}>
        {" "}
        {props.item.text}{" "}
        <div>
          <button
            onClick={() => {
              props.onDone(props.item);
            }}
          >
            {" "}
            <DoneImg done={props.item.done}></DoneImg>{" "}
          </button>
          <button
            onClick={() => {
              props.onItemDeleted(props.item);
            }}
          >
            <img src="./assets/delete.png" alt="delete" width={25} />
          </button>{" "}
        </div>
      </Card>
    </li>
  );
}

export default ListItem;
