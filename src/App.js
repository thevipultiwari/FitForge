import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/Hero';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
          <Navbar />
          <Hero />
          {/* Other sections will go here */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
