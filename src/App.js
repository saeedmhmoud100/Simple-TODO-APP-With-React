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

  handeDelete = id => {
    let Items = this.state.items.filter(item => item.id !== id);
    // to Reset The id Of items
    Items.forEach((item, id) => {
      item.id = ++id;
    });
    this.setState({ items: Items });
    console.log(id);
  };
  render() {
    return (
      <div className="container">
        <h2>TODO APP</h2>
        <AddItem addItem={this.AddItem} />
        <TodoItems items={this.state.items} DeleteItem={this.handeDelete} />
      </div>
    );
  }
}

export default App;
