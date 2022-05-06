import "./App.css";
import Project from "./components/Project";
import About from "./components/About";
import {Link,Switch,Route} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
     <div className="App">
    <Link to="/">Home</Link><br/>
    <Link to="/About">About</Link><br/>
    <Link to="/Project">Audio</Link><br/>
    <Switch>
      <Route  exact path="/">
        <Home/>
      </Route>
      <Route path="/About">
       <About/>
      </Route>
      <Route path="/Project"><Project/></Route>
    </Switch>
    {/* <div class="col-6 col-md-6 col-sm-4 col-xl-4"> 
      <Project />
    </div> */}

     </div>
  );
}

export default App;
