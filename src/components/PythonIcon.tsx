import React from 'react';

interface PythonIconProps {
  className?: string;
}

const PythonIcon: React.FC<PythonIconProps> = ({ className = "w-5 h-5" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 115 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="python-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="python-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <path
        fill="url(#python-gradient-1)"
        d="M66.919 12.001C62.335 12.022 57.958 12.413 54.106 13.095C42.760 15.099 40.700 19.295 40.700 27.032v10.219h26.813v3.406H40.700H30.637c-7.792 0-14.616 4.684-16.750 13.594-2.462 10.213-2.571 16.586 0 27.25 1.906 7.938 6.458 13.594 14.250 13.594h9.219V82.845c0-8.850 7.657-16.656 16.750-16.656h26.781c7.455 0 13.406-6.138 13.406-13.625V27.032c0-7.266-6.130-12.725-13.406-13.937C76.282 12.328 71.502 11.980 66.919 12.001zm-14.5 8.219c2.770 0 5.031 2.299 5.031 5.125 0 2.816-2.262 5.094-5.031 5.094-2.779 0-5.031-2.277-5.031-5.094 0-2.826 2.252-5.125 5.031-5.125z"
      />
      <path
        fill="url(#python-gradient-2)"
        d="M97.638 40.657v11.906c0 9.231-7.826 17-16.750 17H54.106c-7.336 0-13.406 6.278-13.406 13.625v25.531c0 7.266 6.319 11.540 13.406 13.625 8.487 2.496 16.626 2.947 26.781 0 6.750-1.954 13.406-5.888 13.406-13.625V98.501H67.512v-3.406h26.781h13.406c7.792 0 10.696-5.435 13.406-13.594 2.799-8.399 2.680-16.476 0-27.25-1.926-7.757-5.604-13.594-13.406-13.594H97.638zm-15.063 64.656c2.779 0 5.031 2.277 5.031 5.094 0 2.826-2.252 5.125-5.031 5.125-2.770 0-5.031-2.299-5.031-5.125 0-2.816 2.261-5.094 5.031-5.094z"
      />
    </svg>
  );
};

export default PythonIcon;