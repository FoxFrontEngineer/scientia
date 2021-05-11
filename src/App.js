import './App.css';
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import MainScreen from "./components/modules/MainScreen/MainScreen";
import Login from "./components/modules/Login/Login";
import Registration from "./components/modules/Registration/Registration";
import PrivateRoute from "./components/services/PrivateRoute/PrivateRoute";

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
        <AuthProvider>
          <Switch>
              <PrivateRoute path="/" component={MainScreen} />
              <Route path="/login" component={Login} />
              <Route path="/registration" component={Registration} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
