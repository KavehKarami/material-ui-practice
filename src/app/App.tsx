import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "../routes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            component={route.component}
            exact={route.exact}
            path={route.path}
            key={index}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
