import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Details } from "./pages/details";
import { JobBoard } from "./pages/job-board";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/details/:name">
          <Details />
        </Route>
        <Route exact path="/">
          <JobBoard />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
