import React from "react";
import "./Todoitems.css";

const TodoItems = props => {
  const { items, DeleteItem } = props;
  return (
    <div className="items">
      {items.length !== 0
        ? items.map(item => {
            return (
              <div className={`item`} id={`item-${item.id}`} key={item.id}>
                <div>
                  {item.id}
                </div>
                <div>
                  {item.task}
                </div>
                <div>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={_ => DeleteItem(item.id)}
                  >
                    &#935;
                  </span>
                </div>
              </div>
            );
          })
        : <h2>Not Items Yet</h2>}
    </div>
  );
};
export default TodoItems;
