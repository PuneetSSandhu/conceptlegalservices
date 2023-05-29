import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About } from './pages';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          {/* Default route to home */}
          <Route path="*" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
