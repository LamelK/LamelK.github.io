import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import AnimatedBackground from './components/AnimatedBackground';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a192f] text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation activeSection={activeSection} />
      
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;