import "./App.css";
import Item from "./item";
import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
class App extends Component {
  state = {
    Data: [
      { name: "Ahmed", age: 28, job: "work" },
      { name: "Ali", age: 30, job: "Developer" },
      { name: "Mohamed", age: 20, job: "Designer" },
      { name: "Osama", age: 40, job: "Freelancer" }
    ]
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <div>
            {/* <Route path="/Component/About" component={About} />
          <Route path="/Component/Home" component={Home} /> */}
            {/* <Link to={"./Home"}>
            <Home />
          </Link>
          <Link to={"./About"}>
            <About />
          </Link> */}
          </div>
          <Routes>
            <Route path="/Component/Home" element={<Home />} />
            <Route path="/Component/About/" element={<About />} />
          </Routes>
          <div className={"container"}>
            {this.state.Data.map((n, i) =>
              <Item key={i} name={n.name} age={n.age} job={n.job} />
            )}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Nav />
//           <Routes>
//             <Route path="/Component/Home" element={<Home />} />
//             <Route path="/Component/About/" element={<About />} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

export default App;
