import React, { useState } from 'react';
import { Github, Linkedin, Send, Mail, User, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xvganyqb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 px-2">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Thanks for stopping by — let's connect!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-black/40 backdrop-blur-sm border border-[#64FFDA]/30 rounded-xl p-6 md:p-8 hover:border-[#64FFDA]/50 transition-all duration-300 w-full">
            <h3 className="font-poppins text-xl md:text-2xl font-semibold text-[#64FFDA] mb-6 flex items-center justify-center md:justify-start">
              <Mail className="w-5 h-5 md:w-6 md:h-6 mr-3" />
              Send a Message
            </h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <p className="text-green-400 font-montserrat text-center">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-400 font-montserrat text-center">Sorry, there was an error sending your message. Please try again.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-montserrat text-white/80 mb-2 text-center md:text-left">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#64FFDA]/60" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[#64FFDA] focus:outline-none focus:ring-2 focus:ring-[#64FFDA]/20 transition-all duration-300 disabled:opacity-50 text-center md:text-left"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-montserrat text-white/80 mb-2 text-center md:text-left">
                  Your Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#64FFDA]/60" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[#64FFDA] focus:outline-none focus:ring-2 focus:ring-[#64FFDA]/20 transition-all duration-300 disabled:opacity-50 text-center md:text-left"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-montserrat text-white/80 mb-2 text-center md:text-left">
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-[#64FFDA]/60" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-[#64FFDA] focus:outline-none focus:ring-2 focus:ring-[#64FFDA]/20 transition-all duration-300 resize-none disabled:opacity-50 text-center md:text-left"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group flex items-center justify-center space-x-3 px-6 py-4 bg-[#64FFDA]/20 border-2 border-[#64FFDA] text-[#64FFDA] rounded-lg font-montserrat font-medium hover:bg-[#64FFDA] hover:text-[#0a192f] transition-all duration-300 hover:shadow-lg hover:shadow-[#64FFDA]/25 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-spin' : 'group-hover:animate-pulse'}`} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6 md:space-y-8">
            {/* Social Icons */}
            <div className="bg-black/40 backdrop-blur-sm border border-[#FF6EC7]/30 rounded-xl p-6 md:p-8 hover:border-[#FF6EC7]/50 transition-all duration-300 w-full">
              <h3 className="font-poppins text-xl md:text-2xl font-semibold text-[#FF6EC7] mb-6 text-center">Connect With Me</h3>
              
              <div className="space-y-4">
                <a
                  href="https://github.com/LamelK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all duration-300 hover:scale-105 group w-full"
                >
                  <Github className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-[#64FFDA] transition-colors duration-300 flex-shrink-0" />
                  <div className="text-center md:text-left">
                    <p className="font-montserrat font-medium text-white group-hover:text-[#64FFDA] transition-colors duration-300">GitHub</p>
                    <p className="text-sm text-white/60">@LamelK</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/lamel-kekana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all duration-300 hover:scale-105 group w-full"
                >
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-[#64FFDA] transition-colors duration-300 flex-shrink-0" />
                  <div className="text-center md:text-left">
                    <p className="font-montserrat font-medium text-white group-hover:text-[#64FFDA] transition-colors duration-300">LinkedIn</p>
                    <p className="text-sm text-white/60">@lamel-kekana</p>
                  </div>
                </a>

                <a
                  href="mailto:lamel466@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all duration-300 hover:scale-105 group w-full"
                >
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-[#64FFDA] transition-colors duration-300 flex-shrink-0" />
                  <div className="text-center md:text-left">
                    <p className="font-montserrat font-medium text-white group-hover:text-[#64FFDA] transition-colors duration-300">Email</p>
                    <p className="text-sm text-white/60">lamel466@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 w-full">
              <h3 className="font-poppins text-lg md:text-xl font-semibold text-white mb-4 text-center">Let's Collaborate</h3>
              <p className="font-montserrat text-white/80 leading-relaxed text-center md:text-left">
                I'm always excited to work on new data science projects, discuss innovative ideas, 
                or explore opportunities in cloud computing and machine learning. Whether you have 
                a project in mind or just want to connect, I'd love to hear from you!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/20 text-center">
          <p className="font-montserrat text-white/60 text-sm px-2">
            © 2025 Lamel Kekana. Crafted with passion for data science and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;