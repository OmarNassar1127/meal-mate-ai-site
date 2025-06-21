'use client';

import { useLanguage } from '../lib/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { 
  Brain, 
  BarChart3, 
  ShoppingCart, 
  Leaf, 
  Calendar, 
  BookOpen,
  Sparkles
} from 'lucide-react';

export default function Features() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Brain,
      title: t('features.items.ai.title'),
      description: t('features.items.ai.description'),
      gradient: 'from-purple-600 to-pink-600',
      lightGradient: 'from-purple-100 to-pink-100',
      delay: 0
    },
    {
      icon: BarChart3,
      title: t('features.items.nutrition.title'),
      description: t('features.items.nutrition.description'),
      gradient: 'from-blue-600 to-cyan-600',
      lightGradient: 'from-blue-100 to-cyan-100',
      delay: 100
    },
    {
      icon: ShoppingCart,
      title: t('features.items.shopping.title'),
      description: t('features.items.shopping.description'),
      gradient: 'from-green-600 to-emerald-600',
      lightGradient: 'from-green-100 to-emerald-100',
      delay: 200
    },
    {
      icon: Leaf,
      title: t('features.items.diet.title'),
      description: t('features.items.diet.description'),
      gradient: 'from-orange-600 to-red-600',
      lightGradient: 'from-orange-100 to-red-100',
      delay: 300
    },
    {
      icon: Calendar,
      title: t('features.items.schedule.title'),
      description: t('features.items.schedule.description'),
      gradient: 'from-indigo-600 to-purple-600',
      lightGradient: 'from-indigo-100 to-purple-100',
      delay: 400
    },
    {
      icon: BookOpen,
      title: t('features.items.recipes.title'),
      description: t('features.items.recipes.description'),
      gradient: 'from-pink-600 to-rose-600',
      lightGradient: 'from-pink-100 to-rose-100',
      delay: 500
    }
  ];

  return (
    <section ref={sectionRef} id="features" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-teal-100 rounded-full mb-4">
            <Sparkles className="w-6 h-6 text-teal-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="relative text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                  {feature.title}
                </h3>
                
                <p className="relative text-gray-600 leading-relaxed group-hover:text-gray-700">
                  {feature.description}
                </p>
                
                {/* Hover indicator */}
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section with modern design */}
        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl font-bold text-white mb-2 animate-count">98%</div>
                  <div className="text-teal-100 font-medium">User Satisfaction</div>
                </div>
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl font-bold text-white mb-2 animate-count">5M+</div>
                  <div className="text-teal-100 font-medium">Meals Planned</div>
                </div>
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl font-bold text-white mb-2">24/7</div>
                  <div className="text-teal-100 font-medium">AI Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes count {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-count {
          animation: count 1s ease-out;
        }
      `}</style>
    </section>
  );
}