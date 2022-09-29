import React from "react";
import "./Additem.css";

class AddItem extends React.Component {
  render() {
    return (
      <form>
        <input type={"text"} placeholder={"Add Task"} />
        <input type={"submit"} />
      </form>
    );
  }
}

export default AddItem;
