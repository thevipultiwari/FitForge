import React from 'react';
import { LogIn, Sparkles } from 'lucide-react';

const AuthButtons = ({ onLogin, onGetStarted }) => {
  return (
    <div className="flex items-center space-x-3 md:space-x-4">
      {/* Login Button - Glass Morphism */}
      <button 
        onClick={onLogin}
        className="group relative px-4 py-2 md:px-6 md:py-3 text-white/90 hover:text-white 
                   glass-morphism hover:bg-white/20 
                   rounded-lg transition-all duration-300 ease-out
                   text-sm md:text-base font-medium
                   hover:scale-105 hover:shadow-lg hover:shadow-white/10
                   border border-white/30 hover:border-white/50"
      >
        <div className="flex items-center space-x-2">
          <LogIn size={16} className="transition-transform group-hover:scale-110" />
          <span>Login</span>
        </div>
        
        {/* Subtle hover glow */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </button>

      {/* Get Started Button - Premium Gradient */}
      <button 
        onClick={onGetStarted}
        className="group relative overflow-hidden px-6 py-2 md:px-8 md:py-3 
                   bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                   hover:from-blue-600 hover:via-purple-600 hover:to-pink-600
                   text-white text-sm md:text-base font-semibold rounded-lg
                   transition-all duration-300 ease-out
                   transform hover:scale-105 hover:-translate-y-0.5
                   shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
      >
        <div className="relative z-10 flex items-center space-x-2">
          <Sparkles size={16} className="transition-transform group-hover:rotate-12" />
          <span>Get Started</span>
        </div>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                        -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </button>
    </div>
  );
};

export default AuthButtons;
