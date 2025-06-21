'use client';

import { useLanguage } from '../lib/LanguageContext';
import { Heart, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    product: [
      { label: t('footer.links.features'), href: '#features' },
      { label: t('footer.links.pricing'), href: '#pricing' },
      { label: t('footer.links.testimonials'), href: '#testimonials' },
    ],
    company: [
      { label: t('footer.links.about'), href: '#' },
      { label: t('footer.links.blog'), href: '#' },
      { label: t('footer.links.careers'), href: '#' },
    ],
    support: [
      { label: t('footer.links.help'), href: '#' },
      { label: t('footer.links.contact'), href: '#' },
      { label: t('footer.links.privacy'), href: '#' },
      { label: t('footer.links.terms'), href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                MealMate AI
              </h3>
              <p className="text-gray-400">{t('footer.tagline')}</p>
            </div>
            
            {/* Download buttons */}
            <div className="space-y-3 mb-6">
              <a href="#" className="block transform hover:scale-105 transition-transform">
                <img src="/app-store-white.svg" alt="Download on App Store" className="h-12" />
              </a>
              <a href="#" className="block transform hover:scale-105 transition-transform">
                <img src="/google-play-white.svg" alt="Get it on Google Play" className="h-12" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">{t('footer.links.product')}</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-teal-400 group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">{t('footer.links.company')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-teal-400 group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">{t('footer.links.support')}</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-teal-400 group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <p className="text-sm">{t('footer.copyright')}</p>
              <span>•</span>
              <p className="text-sm flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current animate-pulse" /> in Amsterdam
              </p>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-teal-500 hover:to-emerald-500 hover:text-white transform hover:scale-110 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}