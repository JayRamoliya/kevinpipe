import React from 'react';
import { Shield, Droplet, Clock, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: 'why-corrosion-resistant',
      title: 'Corrosion Resistant',
      description: '100% immune to electrolytic attack, chemical soil compounds, and aggressive acidic liquids. Will never rust or scale over time.',
      icon: Shield,
    },
    {
      id: 'why-leak-proof',
      title: 'Leak-Proof Quality',
      description: 'Engineered with precision dimensional tolerance, high-integrity threading, and elastomeric seals to guarantee zero water loss.',
      icon: Droplet,
    },
    {
      id: 'why-long-life',
      title: 'Long Life Performance',
      description: 'Formulated with premium UV stabilizers and virgin polymers for 50+ years of maintenance-free service in all weather conditions.',
      icon: Clock,
    },
    {
      id: 'why-certified-quality',
      title: 'Certified Quality',
      description: 'Rigorous in-house batch testing complying with Bureau of Indian Standards (BIS) and international ISO quality benchmarks.',
      icon: Award,
    },
  ];

  return (
    <section id="why-choose" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F6F8] text-[#08A9D6] text-xs font-bold uppercase tracking-wider mb-4">
            Why Choose Kevin
          </div>
          <h2
            id="why-choose-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B4A] tracking-tight"
          >
            Built for Performance. Trusted for Quality.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Engineered through continuous innovation and strict manufacturing standards to deliver seamless, uninterrupted water transmission.
          </p>
        </div>

        {/* 4 Clean Cards with 24px rounded corners and soft shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_10px_30px_rgba(7,27,74,0.05)] hover:shadow-[0_16px_36px_rgba(7,27,74,0.09)] transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#E1F4FA] text-[#08A9D6] flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#071B4A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-[#08A9D6]">
                  <span>Engineered Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
