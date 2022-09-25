import { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className={"item"}>
        <div>
          {this.props.name}
        </div>
        <div>
          {this.props.age}
        </div>
        <div>
          {this.props.job}
        </div>
      </div>
    );
  }
}

// export const testExport = _ =>{
//     console.log('yes')
// }

export default Item;
