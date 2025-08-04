import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/layout/Navbar';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
        <Navbar />
        
        {/* Demo content to showcase the navbar */}
        <div className="pt-32 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-pulse">
              HealthHub
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 mb-8 font-light">
              🚀 Professional Navbar is Live!
            </p>
            <div className="glass-morphism p-8 rounded-2xl max-w-md mx-auto mb-8">
              <div className="space-y-3">
                <p className="text-white/90 text-lg">✅ Beautiful Navbar</p>
                <p className="text-white/90 text-lg">✅ Login & Get Started Buttons</p>
                <p className="text-white/90 text-lg">✅ Glass Morphism Effects</p>
                <p className="text-white/90 text-lg">✅ Mobile Responsive</p>
              </div>
            </div>
            <p className="text-white/60 text-lg">
              Ready for Video Background & Hero Section! 🎬
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
