'use client';

import { useLanguage } from '../lib/LanguageContext';
import { getAssetPath } from '../lib/utils';
import { Star, Download, Play, Sparkles, Zap, ChefHat } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500 rounded-full blur-[128px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500 rounded-full blur-[128px] opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400 rounded-full blur-[200px] opacity-20"></div>
      </div>

      {/* Floating food icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-icon absolute top-[10%] left-[10%] text-4xl">🥗</div>
        <div className="floating-icon absolute top-[20%] right-[15%] text-4xl animation-delay-1000">🥑</div>
        <div className="floating-icon absolute bottom-[30%] left-[5%] text-4xl animation-delay-2000">🍎</div>
        <div className="floating-icon absolute bottom-[20%] right-[10%] text-4xl animation-delay-3000">🥦</div>
        <div className="floating-icon absolute top-[50%] right-[5%] text-4xl animation-delay-4000">🍊</div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left z-10">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="animate-pulse">{t('hero.rating')}</span>
              <span className="mx-3">•</span>
              <span>{t('hero.downloads')}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="inline-block animate-fade-in-up">
                {t('hero.title').split(' ').slice(0, 2).join(' ')}
              </span>
              <br />
              <span className="inline-block animate-fade-in-up animation-delay-200 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                {t('hero.title').split(' ').slice(2).join(' ')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up animation-delay-600">
              <a
                href="#download"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-200 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full hover:shadow-[0_0_40px_rgba(20,184,166,0.5)] hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Download className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">{t('hero.cta')}</span>
              </a>
              
              <a
                href="#demo"
                className="group inline-flex items-center justify-center px-8 py-4 font-medium text-white backdrop-blur-md bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                <Play className="w-5 h-5 mr-2" />
                {t('hero.ctaSecondary')}
              </a>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6 animate-fade-in-up animation-delay-800">
              <a href="#" className="transform hover:scale-110 transition-transform">
                <img src={getAssetPath('/app-store.svg')} alt="Download on App Store" className="h-14" />
              </a>
              <a href="#" className="transform hover:scale-110 transition-transform">
                <img src={getAssetPath('/google-play.svg')} alt="Get it on Google Play" className="h-14" />
              </a>
            </div>
          </div>
          
          <div className="relative lg:pl-12">
            <div 
              className="relative z-10 transform perspective-1000"
              style={{
                transform: `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`
              }}
            >
              {/* 3D Card Stack */}
              <div className="relative w-full max-w-md mx-auto">
                {/* Back card */}
                <div className="absolute inset-4 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-3xl transform rotate-6 scale-95 opacity-60 blur-sm"></div>
                
                {/* Middle card */}
                <div className="absolute inset-2 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-3xl transform rotate-3 scale-95 opacity-80"></div>
                
                {/* Front card - Main content */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-4 shadow-lg animate-bounce">
                    <ChefHat className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">Today's Plan</h3>
                      <Zap className="w-6 h-6 text-yellow-400" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm transform hover:scale-105 transition-transform">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">🥗</span>
                          <div>
                            <p className="text-white font-medium">Breakfast</p>
                            <p className="text-gray-300 text-sm">Avocado Toast & Smoothie</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm transform hover:scale-105 transition-transform">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">🍜</span>
                          <div>
                            <p className="text-white font-medium">Lunch</p>
                            <p className="text-gray-300 text-sm">Mediterranean Bowl</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm transform hover:scale-105 transition-transform">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">🍝</span>
                          <div>
                            <p className="text-white font-medium">Dinner</p>
                            <p className="text-gray-300 text-sm">Grilled Salmon & Veggies</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 mt-6">
                      <div className="bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-xl p-3 text-center backdrop-blur-sm">
                        <p className="text-2xl font-bold text-white">1850</p>
                        <p className="text-xs text-gray-300">Calories</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-3 text-center backdrop-blur-sm">
                        <p className="text-2xl font-bold text-white">65g</p>
                        <p className="text-xs text-gray-300">Protein</p>
                      </div>
                      <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-3 text-center backdrop-blur-sm">
                        <p className="text-2xl font-bold text-white">180g</p>
                        <p className="text-xs text-gray-300">Carbs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(10px) rotate(-5deg); }
        }
        
        .floating-icon {
          animation: float 6s ease-in-out infinite;
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
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .perspective-1000 {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}