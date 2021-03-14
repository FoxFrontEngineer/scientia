import './App.css';
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainScreen from "./components/modules/MainScreen/MainScreen";
import Login from "./components/modules/Login/Login";
import PrivateRoute from "./components/services/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={MainScreen} />
            <PrivateRoute exact path="/main" component={MainScreen} />
              <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
