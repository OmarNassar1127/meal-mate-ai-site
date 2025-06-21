'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Menu, X, Globe, Download } from 'lucide-react';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: t('nav.features') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '#testimonials', label: t('nav.testimonials') },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-200"></div>
              <span className="relative text-2xl font-bold text-white">
                MealMate AI
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-gray-300 hover:text-white transition-colors font-medium group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
            >
              <Globe className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span className="font-medium">{language.toUpperCase()}</span>
            </button>

            <a
              href="#download"
              className="relative group overflow-hidden bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-2.5 rounded-full font-medium flex items-center space-x-2"
            >
              <span className="relative z-10 flex items-center">
                <Download className="w-4 h-4 mr-2" />
                {t('nav.download')}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-teal-400 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu with glassmorphism */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4">
            <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-gray-800">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 py-3 text-gray-300 hover:text-white transition-colors w-full"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{language.toUpperCase()}</span>
              </button>

              <div className="pt-4 mt-4 border-t border-gray-800">
                <a
                  href="#download"
                  className="block text-center bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-3 rounded-full font-medium"
                >
                  {t('nav.download')}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}