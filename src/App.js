import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import RouterPaths from './router/RouterPaths';
import StylesContext from './context/StylesContext';
import "./App.css";

const primaryColor = '#6200ee';
const primaryTextColor = '#fff';

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
    <Router>
      <StylesContext.Provider value={{primaryColor, primaryTextColor}}>
        <div className="App">
          <Header isLoggedIn={isLoggedIn}></Header>
          <Switch>
            {routes}
          </Switch>
        </div>
      </StylesContext.Provider>
    </Router>
  );
}

export default App;
