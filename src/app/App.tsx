import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import routes from "../routes";
import { theme } from "../theme";
import { useMemo, useState } from "react";
import Direction from "./layout/Direction";
import DirectionContext from "../Contexts/DirectionContext";

function App() {
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr");
  const myTheme = useMemo(() => theme(dir), [dir]);

  return (
    <DirectionContext.Provider
      value={{
        dir,
        setDir,
      }}
    >
      <ThemeProvider theme={myTheme}>
        <div dir={dir}>
          <Direction dir={dir}>
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
          </Direction>
        </div>
      </ThemeProvider>
    </DirectionContext.Provider>
  );
}

export default App;
