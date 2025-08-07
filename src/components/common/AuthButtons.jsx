import React from 'react';
import { LogIn, Sparkles } from 'lucide-react';

const AuthButtons = ({ onLogin, onGetStarted }) => {
  return (
    <div className="flex items-center space-x-3">
      {/* Login Button - No Border */}
      <button 
        onClick={onLogin}
        className="px-4 py-2 text-white/70 hover:text-white/90 font-medium transition-all duration-300 
                   hover:bg-white/5 rounded-full backdrop-blur-sm"
      >
          Login
      </button>
      
      {/* Get Started Button - No Border */}
      <button 
        onClick={onGetStarted}
        className="px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-600/30 
                   text-white/80 hover:text-white/95 font-semibold rounded-full transition-all duration-300 
                   backdrop-blur-sm hover:scale-105"
      >
        Get Started
      </button>
    </div>
  );
};



export default AuthButtons;
