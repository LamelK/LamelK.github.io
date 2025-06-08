import React from 'react';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/90 backdrop-blur-sm border-b border-teal-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-montserrat font-medium transition-all duration-300 hover:text-[#64FFDA] ${
                activeSection === item.id
                  ? 'text-[#64FFDA] border-b-2 border-[#64FFDA]'
                  : 'text-white/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;