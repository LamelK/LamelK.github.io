import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Download, Mail, Brain, BarChart3, Activity, Cloud, Database } from 'lucide-react';

const HomeSection: React.FC = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const techIcons = [
    { Icon: Brain, delay: '0s' },
    { Icon: BarChart3, delay: '0.5s' },
    { Icon: Activity, delay: '1s' },
    { Icon: Cloud, delay: '1.5s' },
    { Icon: Database, delay: '2s' },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/Lamel Kekana CV (2).pdf';
    link.download = 'Lamel Kekana CV (2).pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto w-full">
        {/* Main Heading */}
        <h1 className="font-poppins text-4xl md:text-5xl lg:text-7xl font-bold text-[#64FFDA] mb-8 md:mb-12 animate-fade-in px-2">
          Hello I'm Lamel Kekana
        </h1>

        {/* Tech Screen */}
        <div className="relative mx-auto mb-6 md:mb-8 max-w-sm md:max-w-md">
          {/* Animated Blob Background */}
          <div className="absolute inset-0 -m-6 md:-m-8">
            <div className="w-full h-full bg-gradient-to-r from-[#64FFDA]/10 via-[#FF6EC7]/10 to-[#64FFDA]/10 rounded-full blur-xl animate-pulse"></div>
          </div>

          <div className="relative bg-black/60 backdrop-blur-sm border border-[#64FFDA]/30 rounded-lg p-4 md:p-6 shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-600">
              <div className="flex space-x-2">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-green-400 font-mono">DATA TERMINAL</span>
            </div>

            {/* Animated Icons */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4">
              {techIcons.map(({ Icon, delay }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-2 md:p-3 bg-gray-800/50 rounded-lg border border-[#64FFDA]/20 hover:border-[#64FFDA]/50 transition-all duration-300 animate-float"
                  style={{ animationDelay: delay }}
                >
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#64FFDA]" />
                </div>
              ))}
            </div>

            {/* CPU Usage Indicator */}
            <div className="flex items-center justify-between text-xs">
              <span className="text-green-400 font-mono">CPU:</span>
              <div className="flex space-x-1">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-3 md:w-2 md:h-4 bg-[#64FFDA] rounded-sm animate-pulse"
                    style={{ 
                      animationDelay: `${i * 0.2}s`,
                      opacity: Math.random() * 0.5 + 0.5 
                    }}
                  ></div>
                ))}
              </div>
              <span className="text-green-400 font-mono">87%</span>
            </div>
          </div>
        </div>

        {/* Typing Text with Flashing Cursor */}
        <div className="mb-6 md:mb-8 px-2">
          <p className="font-montserrat text-xl md:text-2xl lg:text-3xl text-white">
            I am a <span className="text-[#64FFDA] font-semibold">Data Scientist</span>
            <span className={`text-[#64FFDA] font-bold text-2xl md:text-3xl ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
          </p>
        </div>

        {/* Description */}
        <p className="font-montserrat text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed px-2">
          Explore my portfolio for a comprehensive collection of my professional work.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6 md:mb-8">
          <a
            href="https://github.com/LamelK"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6 text-white hover:text-[#64FFDA]" />
          </a>
          <a
            href="https://www.linkedin.com/in/lamel-kekana/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-white hover:text-[#64FFDA]" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row justify-center gap-3 md:gap-4 max-w-sm md:max-w-md mx-auto px-2">
          <button 
            onClick={downloadCV}
            className="flex-1 flex items-center justify-center space-x-2 px-3 md:px-4 py-3 bg-[#64FFDA]/20 border border-[#64FFDA] text-[#64FFDA] rounded-lg font-montserrat font-medium hover:bg-[#64FFDA] hover:text-[#0a192f] transition-all duration-300 hover:shadow-lg hover:shadow-[#64FFDA]/25 hover:scale-105 min-w-0 text-sm md:text-base"
          >
            <Download className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="truncate">Download CV</span>
          </button>
          <button 
            onClick={scrollToContact}
            className="flex-1 flex items-center justify-center space-x-2 px-3 md:px-4 py-3 bg-[#FF6EC7]/20 border border-[#FF6EC7] text-[#FF6EC7] rounded-lg font-montserrat font-medium hover:bg-[#FF6EC7] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6EC7]/25 hover:scale-105 min-w-0 text-sm md:text-base"
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="truncate">Get in Touch</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;