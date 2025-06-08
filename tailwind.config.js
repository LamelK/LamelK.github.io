/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          dark: '#0a192f',
          purple: '#1a1a2e',
          teal: '#64FFDA',
          pink: '#FF6EC7',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};