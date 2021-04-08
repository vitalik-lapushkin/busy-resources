import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import RouterPaths from './components/RouterPaths';
import "./App.css";

function App() {
  const isLoggedIn = false;
  const routes = Object
    .values(RouterPaths)
    .map((path) => {
      const Component = path.component;
      return (
        <Route key={path.name} path={path.path}>
          <Component />
        </Route>
      );
    });
  return (
    <div className="App">
      <Router>
        <Header isLoggedIn={isLoggedIn}></Header>
        <Switch>
          {routes}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
