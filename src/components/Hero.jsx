import React, { useEffect, useRef } from "react";
import { Play, ArrowRight, Target, Zap, Trophy } from "lucide-react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Video autoplay failed:", err);
      });
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden pt-16 md:pt-20 lg:pt-24">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/fitness-hero.mp4" type="video/mp4" />
        <source src="/videos/fitness-hero.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Enhanced Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Multiple Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

      {/* Hero Content - Optimized for Different Screen Sizes */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-4xl lg:max-w-6xl mx-auto">
          
          {/* Main Heading - MOVED UP SIGNIFICANTLY */}
          <div className="ultra-transparent-text rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-1 mt-0 md:mt-2 lg:mt-0.5 mb-3 lg:mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 lg:mb-6 leading-tight">
              <span className="hyperhuman-gradient">
                TRANSFORM
              </span>
              <br />
              <span className="glass-text px-2 py-1 md:px-3 md:py-1 lg:px-4 lg:py-2 rounded-xl lg:rounded-2xl inline-block">
                YOUR BODY
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl hero-description-reduced-gap max-w-5xl lg:max-w-1xl mx-auto leading-relaxed glass-text p-3 md:p-4 lg:p-12 rounded-xl lg:rounded-2xl">
              AI-powered fitness coaching that adapts to your goals.
              <span className="hyperhuman-gradient font-semibold">
                {" "}
                Track, Train, Transform
              </span>{" "}
              with personalized workouts and real-time progress monitoring.
            </p>
          </div>

          {/* Action Buttons - GAP REDUCED BY HALF */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-4 lg:mb-6">
            <button className="group relative px-6 py-3 lg:px-8 lg:py-4 ultra-transparent-text rounded-full font-semibold text-base lg:text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2 lg:gap-3">
                <Zap size={20} className="text-blue-400" />
                <span className="hyperhuman-gradient">Start Your Journey</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform text-blue-400"
                />
              </span>
            </button>

            <button className="group px-6 py-3 lg:px-8 lg:py-4 glass-text rounded-full font-semibold text-base lg:text-lg hover:bg-white/5 transition-all duration-300 w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2 lg:gap-3">
                <Play size={18} className="text-purple-400" />
                <span className="hyperhuman-gradient">Watch Demo</span>
              </span>
            </button>
          </div>

          {/* Stats/Features - Compact for Laptops */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-3xl lg:max-w-4xl mx-auto">
            {[
              { icon: Target, title: "50K+ Goals", subtitle: "Achieved" },
              { icon: Zap, title: "AI-Powered", subtitle: "Coaching" },
              { icon: Trophy, title: "24/7", subtitle: "Support" },
            ].map((item, index) => (
              <div
                key={index}
                className="ultra-transparent-text rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center hover:scale-105 transition-all duration-300 hover:bg-white/5"
              >
                <item.icon size={24} className="text-blue-400 mx-auto mb-2 lg:mb-3" />
                <div className="text-lg lg:text-2xl font-bold hyperhuman-gradient">
                  {item.title}
                </div>
                <div className="glass-text px-2 py-1 rounded-full inline-block mt-1 lg:mt-2 text-sm lg:text-base">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      {/* <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-white/30 rounded-full flex justify-center ultra-transparent-text">
            <div className="w-1 h-2 lg:h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
