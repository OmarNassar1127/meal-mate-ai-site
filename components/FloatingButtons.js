'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, Download } from 'lucide-react';

export default function FloatingButtons() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-40 flex flex-col space-y-4 transition-all duration-500 ${
      showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
    }`}>
      {/* Download button */}
      <a
        href="#download"
        className="group relative w-14 h-14 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        <Download className="w-6 h-6 text-white" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Download App
        </span>
      </a>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="group relative w-14 h-14 bg-gray-800 backdrop-blur-md rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-gray-700"
      >
        <ArrowUp className="w-6 h-6 text-white" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Back to Top
        </span>
      </button>
    </div>
  );
}