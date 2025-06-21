'use client';

import { useLanguage } from '../lib/LanguageContext';
import { getAssetPath } from '../lib/utils';
import { Download, ArrowRight, Check, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CTA() {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };

    const section = document.getElementById('cta-section');
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      id="download" 
      className="relative py-24 overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url(${getAssetPath('/grid.svg')})`,
          backgroundSize: '100px 100px'
        }}></div>
        <div 
          className="absolute w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-30 transition-all duration-1000"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-30 transition-all duration-1000"
          style={{
            right: `${mousePosition.x * 0.05}px`,
            bottom: `${mousePosition.y * 0.05}px`,
          }}
        ></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Sparkle decoration */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="w-12 h-12 text-teal-400 animate-pulse" />
              <div className="absolute inset-0 bg-teal-400 blur-xl opacity-50"></div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('cta.title')}
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            {t('cta.subtitle')}
          </p>
          
          {/* Main CTA with animated border */}
          <div className="relative inline-block group mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200 animate-pulse"></div>
            <a
              href="#"
              className="relative inline-flex items-center bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-200 group"
            >
              <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              {t('cta.button')}
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
            </a>
          </div>
          
          {/* Download buttons with hover effects */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="transform hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <img 
                src={getAssetPath('/app-store-white.svg')} 
                alt="Download on App Store" 
                className="h-16"
              />
            </a>
            <a href="#" className="transform hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <img 
                src={getAssetPath('/google-play-white.svg')} 
                alt="Get it on Google Play" 
                className="h-16"
              />
            </a>
          </div>
          
          {/* Trust indicators with glassmorphism */}
          <div className="flex justify-center items-center space-x-8">
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 flex items-center space-x-2">
              <Check className="w-5 h-5 text-teal-400" />
              <span className="text-white">No credit card required</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 flex items-center space-x-2">
              <Check className="w-5 h-5 text-teal-400" />
              <span className="text-white">7-day free trial</span>
            </div>
          </div>

          {/* Floating food emojis */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="floating-emoji absolute top-[10%] left-[5%] text-4xl opacity-20">🥗</div>
            <div className="floating-emoji absolute top-[20%] right-[10%] text-4xl opacity-20 animation-delay-1000">🥑</div>
            <div className="floating-emoji absolute bottom-[30%] left-[10%] text-4xl opacity-20 animation-delay-2000">🍎</div>
            <div className="floating-emoji absolute bottom-[20%] right-[5%] text-4xl opacity-20 animation-delay-3000">🥦</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(10deg); }
          66% { transform: translateY(10px) rotate(-10deg); }
        }
        
        .floating-emoji {
          animation: float 8s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
}