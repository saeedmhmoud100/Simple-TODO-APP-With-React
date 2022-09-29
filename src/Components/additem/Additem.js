import React from "react";
import "./Additem.css";

class AddItem extends React.Component {
  state = {
    task: ""
  };

  handleChange = e => {
    this.setState({
      task: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.task) {
      this.props.addItem(this.state);
      e.target.reset();
      this.setState({
        task: ""
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type={"text"}
          placeholder={"Add Task"}
          onChange={this.handleChange}
        />
        <input type={"submit"} />
      </form>
    );
  }
}

export default AddItem;
