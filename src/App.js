//import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import Home from "./Home";
//import About from "./About";
import India from "./Components/India";
import World from "./Components/World";
import Header from "./Components/Header";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container-fluid">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <India />
            </Route>
            <Route path="/india">
              <India />
            </Route>
            <Route path="/world">
              <World />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

// class App extends Component{
//   constructor(){
//     super();
//   }

//   render(){
//     return(
//       <div className="container-fluid">
//        {/* Components - (Header , India , World, States) */}
//        <Router>
//          <div>
//          <ul>
//            <li>
//              <Link to="/">Home</Link>
//            </li>
//            <li>
//              <Link to="/about">About</Link>
//            </li>
//<li>
//              <Link to="/item/1">first item</Link>
// item componenet - import {useParams} from "react-router-dom" - fns -> let {id, name} = useParams();
//            </li>
//          </ul>
//          </div>

//          <Switch>
//            <Route exact path="/"><Home/></Route>
//            <Route path="/about"><About/></Route>
//<Route path="/item/:id"><Item/></Route>
//          </Switch>
//        </Router>
//       </div>
//     )
//   }
// }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
