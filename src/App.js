import { Redirect, Route } from "react-router-dom";
import "./assets/styles/app.scss";
import Nav from "./components/Nav";
import Hobbies from "./components/Hobbies";
import Aboutme from "./components/Aboutme";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Redirect to="/aboutme" />
      </Route>
      <Route exact path="/aboutme">
        <Aboutme />
      </Route>
      <Route exact path="/hobbies">
        <Hobbies />
      </Route>
    </div>
  );
}

export default App;
