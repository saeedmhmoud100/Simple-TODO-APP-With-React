import { Component, Fragment } from "react";
import axios from "axios";

class Item extends Component {
  state = {
    users: []
  };
  componentDidMount = _ => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(n => {
      this.setState({ users: Array.from(n.data) });
    });
  };
  render() {
    return (
      <Fragment>
        {this.state.users.map((user, i) => {
          return (
            <div className={"item"} key={i}>
              <div>
                {i}
              </div>
              <div>
                {user.name}
              </div>
              <div>
                {user.age}
              </div>
              <div>
                {user.job}
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

// export const testExport = _ =>{
//     console.log('yes')
// }

export default Item;
