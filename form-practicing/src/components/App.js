import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import DeleteFromInventory from "./DeleteFromInventory";
import CarInventar from "./FormInventar";
import Home from "./Home";
import Navbar from "./Navbar";
import UpdateInventory from "./UpdateInventory";





const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
            <CarInventar />
            </Route>
            <Route path="/update">
            <UpdateInventory />
            </Route>
            <Route path="/delete">
            <DeleteFromInventory />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default App;
