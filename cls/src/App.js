import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Home, About, HoursPage } from "./pages";
import { Header, Footer } from "./components";

function App() {
  const myHeader = <Header />;
  const myFooter = <Footer />;
  return ( 
    <div className="App">
      <Router>
        <Routes>
          <Route path="/defaultsite"  element={<Navigate to='/' />}/>
          <Route
            path="/"
            element={
              <div>
                {myHeader}
                <Home />
                {myFooter}
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                {myHeader}
                <About />
                {myFooter}
              </div>
            }
          />
          <Route
            path="/hours"
            element={
              <div>
                {myHeader}
                <HoursPage />
                {myFooter}
              </div>
            }
          />
          {/* Default route to home */}
          <Route
            path="*"
            element={
              <div>
                {myHeader}
                <Home />
                {myFooter}
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
