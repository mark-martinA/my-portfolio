// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; // 💡 Imported the new Contact component

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <Router>
      <div className="portfolio-container">
        
        {/* Navigation Bar Link Header */}
        <nav className="portfolio-nav">
          <Link to="/" className="nav-logo">MMA</Link>
          <div className="nav-links">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/projects" className="nav-item">Projects</Link>
            <Link to="/contact" className="nav-item">Contact</Link> {/* 💡 Added Contact tab here */}
          </div>
        </nav>

        {/* Dynamic Route Switching Logic */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> {/* 💡 Maps the layout view to /contact URL */}
        </Routes>

        <footer className="portfolio-footer">
          <p>&copy; {currentYear} Mark Martin Akoto Appiah. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
