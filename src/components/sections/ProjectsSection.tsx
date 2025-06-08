import React from 'react';
import { ExternalLink, Github, Cloud, Brain, Zap, Shield, Heart, AlertCircle } from 'lucide-react';

const ProjectsSection: React.FC = () => {
const projects = [
    {
      title: "Automated Data Pipeline with Interactive Dashboard",
      description: "End-to-end automated data pipeline integrating data ingestion, processing, and visualization. Features an interactive dashboard with weekly data refresh, enabling timely data-driven decision-making.",
      tools: ["AWS", "Python", "SQL", "Metabase"],
      codeUrl: "https://github.com/LamelK/Automated-Data-Pipeline-Interactive-Dashboard",
      liveUrl: "https://insightportals.fyi/",
      icon: Cloud,
      color: "text-[#64FFDA]",
      borderColor: "border-[#64FFDA]/30",
      hoverBorder: "hover:border-[#64FFDA]/50",
      shadowColor: "hover:shadow-[#64FFDA]/10",
      // Changed image path (assuming you moved it to public/images/)
      image: "/images/architecture-diagram.png",
      isWorkplaceSimulation: true
    },
    {
      title: "Anime Recommendation System",
      description: "Unsupervised machine learning-based app combining content-based, collaborative, and hybrid filtering techniques to deliver personalized anime recommendations. Enhances user experience through diverse recommendation strategies.",
      tools: ["Streamlit", "Scikit-learn", "NLTK", "Surprise"],
      codeUrl: "https://github.com/LamelK/Team4_anime_app",
      liveUrl: "https://team4anime.streamlit.app/",
      icon: Brain,
      color: "text-[#FF6EC7]",
      borderColor: "border-[#FF6EC7]/30",
      hoverBorder: "hover:border-[#FF6EC7]/50",
      shadowColor: "hover:shadow-[#FF6EC7]/10",
      // Changed image path (assuming you moved it to public/images/)
      image: "/images/anime-picture.jpg"
    },
    {
      title: "Fuel Consumption Prediction & Analysis",
      description: "Analysis of factors influencing vehicle fuel efficiency (MPH) combined with a predictive model to estimate fuel economy based on key vehicle attributes.",
      tools: ["Pandas", "NumPy", "Plotly", "Scikit-learn"],
      codeUrl: "https://github.com/LamelK/Fuel_Economy_Insights",
      liveUrl: null,
      icon: Zap,
      color: "text-yellow-400",
      borderColor: "border-yellow-400/30",
      hoverBorder: "hover:border-yellow-400/50",
      shadowColor: "hover:shadow-yellow-400/10",
      image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Life Insurance Premium Analysis",
      description: "Exploratory Data Analysis of dependents' data to uncover patterns affecting life insurance premium rates.",
      tools: ["Pandas", "NumPy", "Seaborn"],
      codeUrl: "https://github.com/LamelK/Life-Insurance-Exploratory-Data-Analysis",
      liveUrl: null,
      icon: Shield,
      color: "text-blue-400",
      borderColor: "border-blue-400/30",
      hoverBorder: "hover:border-blue-400/50",
      shadowColor: "hover:shadow-blue-400/10",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Obesity Analysis and Prediction",
      description: "Predictive modeling using lifestyle and demographic data to classify obesity levels and support data-driven health risk assessments.",
      tools: ["Pandas", "NumPy", "Scikit-learn"],
      codeUrl: "https://github.com/LamelK/Obesity_Prediction",
      liveUrl: null,
      icon: Heart,
      color: "text-red-400",
      borderColor: "border-red-400/30",
      hoverBorder: "hover:border-red-400/50",
      shadowColor: "hover:shadow-red-400/10",
      image: "/images/obesity-pic.jpg"
    }
  ];

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.liveUrl) {
      window.open(project.codeUrl, '_blank');
    } else {
      window.open(project.codeUrl, '_blank');
    }
  };

  const handleCodeClick = (e: React.MouseEvent, codeUrl: string) => {
    e.stopPropagation();
    window.open(codeUrl, '_blank');
  };

  const handleLiveClick = (e: React.MouseEvent, liveUrl: string) => {
    e.stopPropagation();
    window.open(liveUrl, '_blank');
  };

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 px-2">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <p className="font-montserrat text-lg text-white/80">Check out my featured projects.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                onClick={() => handleProjectClick(project)}
                className={`group bg-black/40 backdrop-blur-sm border ${project.borderColor} ${project.hoverBorder} rounded-xl overflow-hidden transition-all duration-500 hover:bg-black/50 hover:shadow-2xl ${project.shadowColor} hover:-translate-y-6 hover:scale-105 animate-fade-in-up cursor-pointer w-full`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <IconComponent className={`w-6 h-6 md:w-8 md:h-8 ${project.color} group-hover:scale-125 transition-transform duration-300`} />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6">
                  {/* Project Title */}
                  <h3 className="font-poppins text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-[#64FFDA] transition-colors duration-300 text-center md:text-left">
                    {project.title}
                  </h3>


                  {/* Project Description */}
                  <p className="font-montserrat text-white/80 text-sm leading-relaxed mb-4 text-center md:text-left">
                    {project.description}
                  </p>

                  {/* Workplace Simulation Notice */}
                  {project.isWorkplaceSimulation && (
                    <div className="mb-4 p-2 bg-gradient-to-r from-[#64FFDA]/10 to-[#FF6EC7]/20 border border-[#64FFDA]/30 rounded-lg">
                      <div className="flex items-start space-x-1.5">
                        <AlertCircle className="w-5 h-5 text-[#64FFDA] flex-shrink-0 mt-0.5" />
                        <p className="font-montserrat text-xs text-[#64FFDA] font-medium leading-relaxed">
                          This is a workplace simulation app. Access available on request — contact me for demo credentials..
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Tools as Badges */}
                  <div className="mb-6">
                    <span className="font-montserrat text-xs text-white/60 uppercase tracking-wider mb-2 block text-center md:text-left">Tools:</span>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {project.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-montserrat text-white/80 hover:bg-[#64FFDA]/20 hover:border-[#64FFDA]/50 hover:text-[#64FFDA] transition-all duration-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3 justify-center md:justify-start">
                    <button
                      onClick={(e) => handleCodeClick(e, project.codeUrl)}
                      className="flex items-center space-x-2 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm font-montserrat text-white hover:border-[#64FFDA] hover:text-[#64FFDA] transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </button>
                    {project.liveUrl && (
                      <button
                        onClick={(e) => handleLiveClick(e, project.liveUrl)}
                        className="flex items-center space-x-2 px-3 py-2 bg-[#64FFDA]/20 border border-[#64FFDA] rounded-lg text-sm font-montserrat text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#0a192f] transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;