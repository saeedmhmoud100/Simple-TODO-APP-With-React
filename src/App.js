import "./App.css";
import { Component } from "react";
import TodoItems from "./Components/todoitems/Todoitems";
import AddItem from "./Components/additem/Additem";
class App extends Component {
  state = {
    items: [
      { id: 0, task: "work" },
      { id: 1, task: "palay" },
      { id: 2, task: "watch TV" },
      { id: 3, task: "sleep" }
    ]
  };
  render() {
    return (
      <div className="container">
        <h2>TODO APP</h2>
        <AddItem />
        <TodoItems items={this.state.items} />
      </div>
    );
  }
}

export default App;
