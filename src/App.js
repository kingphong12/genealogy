import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { theme } from "./themes";

const Login = React.lazy(() => import("./component/pages/Login"));
const LoginTest = React.lazy(() => import("./component/pages/LoginTest"));
const Register = React.lazy(() => import("./component/pages/Register"));
const NotFound = React.lazy(() => import("./component/pages/NotFound"));
const TheLayout = React.lazy(() => import("./layout/TheLayout"));
const Home = React.lazy(() => import("./component/pages/Home"));

const loading = (
  <div>
    <div>loading...</div>
  </div>
);

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={loading}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/logintest" component={LoginTest} />
            <Route path="/register" exact component={Register} />
            <Route path="/layout" component={TheLayout} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
