'use client';

import { useLanguage } from '../lib/LanguageContext';
import { getAssetPath } from '../lib/utils';
import { Star, Quote, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const { t } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = t('testimonials.items');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url(${getAssetPath('/grid.svg')})`,
          backgroundSize: '100px 100px'
        }}></div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Main testimonial carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === activeTestimonial 
                    ? 'opacity-100 transform scale-100' 
                    : 'opacity-0 transform scale-95 absolute inset-0'
                }`}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-xl rounded-3xl p-12 border border-gray-700 shadow-2xl">
                  <Quote className="w-16 h-16 text-teal-500 opacity-50 mb-6" />
                  
                  <p className="text-2xl text-gray-300 mb-8 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                    
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? 'w-8 bg-teal-500' 
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats grid with glassmorphism */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 transform hover:scale-105 transition-all duration-300 hover:border-teal-500/50">
              <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                4.8/5
              </div>
              <div className="text-gray-400">App Store Rating</div>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-600'} fill-current`} />
                ))}
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 transform hover:scale-105 transition-all duration-300 hover:border-teal-500/50">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-gray-400">Active Users</div>
              <div className="flex items-center mt-2 text-pink-400">
                <Heart className="w-4 h-4 mr-1 fill-current" />
                <span className="text-sm">Growing Daily</span>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 transform hover:scale-105 transition-all duration-300 hover:border-teal-500/50">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                1M+
              </div>
              <div className="text-gray-400">Meals Planned</div>
              <div className="mt-2">
                <div className="text-2xl">🍽️</div>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 transform hover:scale-105 transition-all duration-300 hover:border-teal-500/50">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-gray-400">Satisfaction Rate</div>
              <div className="mt-2">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}