'use client';

import { useLanguage } from '../lib/LanguageContext';
import { getAssetPath } from '../lib/utils';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { useState } from 'react';

export default function Pricing() {
  const { t } = useLanguage();
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: t('pricing.free.title'),
      price: t('pricing.free.price'),
      period: t('pricing.free.period'),
      features: t('pricing.free.features'),
      cta: t('pricing.free.cta'),
      icon: Zap,
      gradient: 'from-gray-600 to-gray-700',
      popular: false
    },
    {
      name: t('pricing.plus.title'),
      price: t('pricing.plus.price'),
      period: t('pricing.plus.period'),
      features: t('pricing.plus.features'),
      cta: t('pricing.plus.cta'),
      icon: Crown,
      gradient: 'from-teal-500 to-emerald-500',
      popular: true,
      badge: t('pricing.plus.badge')
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-200 to-emerald-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto perspective-1000">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative transform transition-all duration-500 ${
                hoveredPlan === index ? 'scale-105 -rotate-1' : ''
              } ${plan.popular ? 'md:-mt-8' : ''}`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 blur-md"></div>
                    <span className="relative bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {plan.badge}
                    </span>
                  </div>
                </div>
              )}

              <div className={`relative h-full rounded-3xl overflow-hidden ${
                plan.popular 
                  ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
                  : 'bg-white border-2 border-gray-200'
              } shadow-2xl`}>
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url(${getAssetPath('/grid.svg')})`,
                    backgroundSize: '100px 100px'
                  }}></div>
                </div>

                {/* Glow effect for popular plan */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/20"></div>
                )}

                <div className="relative p-8">
                  {/* Plan icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform ${
                    hoveredPlan === index ? 'rotate-12 scale-110' : ''
                  } transition-all duration-300`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className={`text-2xl font-bold mb-2 ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}>{plan.name}</h3>
                  
                  <div className="flex items-baseline mb-8">
                    <span className={`text-5xl font-bold ${
                      plan.popular ? 'text-white' : 'text-gray-900'
                    }`}>{plan.price}</span>
                    <span className={`ml-2 ${
                      plan.popular ? 'text-gray-300' : 'text-gray-600'
                    }`}>/{plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className={`rounded-full p-1 mr-3 mt-0.5 ${
                          plan.popular 
                            ? 'bg-teal-500/20' 
                            : 'bg-gray-100'
                        }`}>
                          <Check className={`w-4 h-4 ${
                            plan.popular ? 'text-teal-400' : 'text-gray-600'
                          }`} />
                        </div>
                        <span className={plan.popular ? 'text-gray-300' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    {plan.cta}
                  </button>
                </div>

                {/* Decorative elements */}
                {plan.popular && (
                  <>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400 to-emerald-400 blur-3xl opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-400 to-emerald-400 blur-3xl opacity-20"></div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-100 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-teal-600" />
              <span className="text-gray-700">Free app updates</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-teal-600" />
              <span className="text-gray-700">Cancel anytime</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-teal-600" />
              <span className="text-gray-700">Secure payment</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}