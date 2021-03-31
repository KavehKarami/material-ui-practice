import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "../routes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            component={route.component}
            exact={route.exact}
            path={route.path}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
