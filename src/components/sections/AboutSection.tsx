import React from 'react';
import { Scissors, Search, BarChart3, Brain, Cloud, GitBranch, Code, BookOpen, Database, FileSpreadsheet, Container } from 'lucide-react';
import PythonIcon from '../PythonIcon';
import JupyterIcon from '../JupyterIcon';
import GitHubIcon from '../GitHubIcon';

const AboutSection: React.FC = () => {
  const skills = [
    { icon: Scissors, label: 'Data Manipulation' },
    { icon: Search, label: 'Data Analysis' },
    { icon: BarChart3, label: 'Data Visualization' },
    { icon: Brain, label: 'Machine Learning' },
    { icon: Cloud, label: 'Cloud Computing' },
    { icon: GitBranch, label: 'Version Control' },
  ];

  const tools = [
    { icon: PythonIcon, label: 'Python' },
    { icon: JupyterIcon, label: 'Jupyter Notebooks' },
    { icon: Database, label: 'MySQL' },
    { icon: FileSpreadsheet, label: 'Excel' },
    { icon: Cloud, label: 'AWS' },
    { icon: BarChart3, label: 'Power BI' },
    { icon: Container, label: 'Docker' },
    { icon: GitHubIcon, label: 'GitHub' },
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center w-full">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-8">About Me</h2>
        </div>

        {/* About Paragraph */}
        <div className="mb-16 px-2">
          <p className="font-montserrat text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            My name is Lamel Kekana, and I embarked on my data science journey with ExploreAI Academy, 
            a turning point that completely changed the direction of my life. Since then, I haven't looked back. 
            This path truly aligns with my purpose and drives my passion every single day. I'm deeply fascinated 
            by the power of data and love diving into the intricate processes that transform raw numbers into 
            meaningful insights.
            <br /><br />
            This passion for data also extends my interest in cloud computing, where I enjoy deploying and running data workflows in the cloud, 
            leveraging its scalability and flexibility to bring ideas to life. Outside of the data world, 
            you'll often find me in my creative space, producing music. It's where I unwind, express myself, 
            and let my imagination flow.
          </p>
        </div>

        {/* Skills and Tools Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-2">
          {/* Skills Card */}
          <div className="bg-black/40 backdrop-blur-sm border border-[#64FFDA]/30 rounded-xl p-6 md:p-8 hover:border-[#64FFDA]/50 hover:bg-black/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#64FFDA]/10 hover:-translate-y-2 w-full">
            <h3 className="font-poppins text-xl md:text-2xl font-semibold text-[#64FFDA] mb-6 text-center">Skills</h3>
            <div className="space-y-4">
              {skills.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center justify-center md:justify-start space-x-3 text-white/80 hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5 text-[#64FFDA] flex-shrink-0" />
                  <span className="font-montserrat text-center md:text-left">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms Card */}
          <div className="bg-black/40 backdrop-blur-sm border border-[#FF6EC7]/30 rounded-xl p-6 md:p-8 hover:border-[#FF6EC7]/50 hover:bg-black/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF6EC7]/10 hover:-translate-y-2 w-full">
            <h3 className="font-poppins text-xl md:text-2xl font-semibold text-[#FF6EC7] mb-6 text-center">Tools & Platforms</h3>
            <div className="space-y-4">
              {tools.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center justify-center md:justify-start space-x-3 text-white/80 hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5 text-[#FF6EC7] flex-shrink-0" />
                  <span className="font-montserrat text-center md:text-left">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;