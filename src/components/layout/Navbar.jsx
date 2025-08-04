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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 md:px-6">
        
        {/* Logo - Premium Design */}
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl rotate-6 opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl -rotate-6 opacity-60"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg md:text-xl">H</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">HealthHub</span>
            <span className="text-xs text-white/60 -mt-1 hidden md:block">AI-Powered Fitness</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {['Features', 'Solutions', 'Pricing', 'API Docs'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-white/80 hover:text-white transition-all duration-200 text-sm font-medium relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-white/80 hover:text-white transition-all duration-200 
                       rounded-lg hover:bg-white/10 relative group"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>

          {/* Beautiful Auth Buttons */}
          <AuthButtons onLogin={handleLogin} onGetStarted={handleGetStarted} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors relative group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-morphism border-t border-white/10">
          <div className="px-6 py-6 space-y-6">
            <div className="space-y-4">
              {['Features', 'Solutions', 'Pricing', 'API Docs'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="block text-white/80 hover:text-white transition-colors py-2 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="pt-4 border-t border-white/10">
              <AuthButtons onLogin={handleLogin} onGetStarted={handleGetStarted} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
