import "./App.css";
import { Component } from "react";
import TodoItems from "./Components/todoitems/Todoitems";
import AddItem from "./Components/additem/Additem";
class App extends Component {
  state = {
    items: []
  };

  AddItem = item => {
    let items = this.state.items;
    this.setState({
      items: [...items, { id: ++items.length, task: item.task }]
    });
  };
  render() {
    return (
      <div className="container">
        <h2>TODO APP</h2>
        <AddItem addItem={this.AddItem} />
        <TodoItems items={this.state.items} />
      </div>
    );
  }
}

export default App;
