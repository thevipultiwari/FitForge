import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import AuthButtons from '../common/AuthButtons';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const handleLogin = () => {
    alert('Login clicked - Add your login logic here!');
  };

  const handleGetStarted = () => {
    alert('Get Started clicked - Add your signup logic here!');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 md:px-6">
        
        {/* Logo - Premium Design with Transparent Effect */}
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/70 to-purple-600/70 rounded-xl rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-pink-500/50 rounded-xl -rotate-6"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-blue-500/80 to-purple-600/80 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm">
              <span className="text-white font-bold text-lg md:text-xl">H</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-bold text-white/90 tracking-tight backdrop-blur-sm">HealthHub</span>
            <span className="text-xs text-white/50 -mt-1 hidden md:block">AI-Powered Fitness</span>
          </div>
        </div>

        {/* Desktop Navigation - Transparent Text */}
        <div className="hidden md:flex items-center space-x-8">
          {['Features', 'Solutions', 'Pricing', 'API Docs'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-white/60 hover:text-white/90 transition-all duration-300 text-sm font-medium relative group backdrop-blur-sm"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400/70 to-purple-400/70 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Right Side Actions - Transparent */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-white/60 hover:text-white/90 transition-all duration-300 
                       rounded-lg hover:bg-white/5 relative group backdrop-blur-sm"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>

          {/* Beautiful Auth Buttons */}
          <AuthButtons onLogin={handleLogin} onGetStarted={handleGetStarted} />
        </div>

        {/* Mobile Menu Button - Transparent */}
        <button
          className="md:hidden text-white/70 hover:text-white/90 p-2 rounded-lg hover:bg-white/5 transition-all duration-300 relative group backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </button>
      </div>

      {/* Mobile Menu - No Borders */}
      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-md bg-black/10">
          <div className="px-6 py-6 space-y-6">
            <div className="space-y-4">
              {['Features', 'Solutions', 'Pricing', 'API Docs'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="block text-white/70 hover:text-white/90 transition-all duration-300 py-2 text-lg backdrop-blur-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="pt-4">
              <AuthButtons onLogin={handleLogin} onGetStarted={handleGetStarted} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
