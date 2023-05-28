import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { ThemeContext } from "./contexts/ThemeContext";
import { Main, ContactPage, ProjectPage, AboutPage } from "./pages";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  // console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  // console.log("%chttps://github.com/hhhrrrttt222111/developer-portfolio", `color:${theme.tertiary}; font-size:20px`);
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/projects" exact component={ProjectPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
