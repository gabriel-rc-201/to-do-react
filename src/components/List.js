import React from "react";
import Card from "./Card";

function DoneImg(props) {
  if (props.done) {
    return <img src="./assets/check_ok.png" alt="done" width={25} />;
  } else {
    return <img src="./assets/check.png" alt="undone" width={25} />;
  }
}
function List(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li>
          <Card className={item.done ? "done item" : "item"} key={item.id}>
            {" "}
            {item.text}{" "}
            <div>
              <button
                onClick={() => {
                  props.onDone(item);
                }}
              >
                {" "}
                <DoneImg done={item.done}></DoneImg>{" "}
              </button>
              <button
                onClick={() => {
                  props.onItemDeleted(item);
                }}
              >
                <img src="./assets/delete.png" alt="delete" width={25} />
              </button>{" "}
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default List;
