import React from 'react';
import { Building2, Sprout, Droplets, Landmark, ArrowUpRight } from 'lucide-react';

interface IndustriesSectionProps {
  onSelectIndustry: (name: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onSelectIndustry }) => {
  const industries = [
    {
      id: 'industry-construction',
      name: 'Construction',
      icon: Building2,
      subtitle: 'Plumbing & Drainage',
      description: 'Engineered for multi-story residential plumbing, commercial water lines, soil and rainwater conduits with maximum fire and crush safety.',
      tags: ['Commercial Towers', 'Housing Projects', 'Sanitary Lines']
    },
    {
      id: 'industry-agriculture',
      name: 'Agriculture',
      icon: Sprout,
      subtitle: 'Irrigation & Farming',
      description: 'Reliable borewell column systems, drip distribution piping, and quick-locking sprinkler lines designed for uninterrupted field irrigation.',
      tags: ['Submersible Wells', 'Sprinkler Farms', 'Drip Networks']
    },
    {
      id: 'industry-water-supply',
      name: 'Water Supply',
      icon: Droplets,
      subtitle: 'Potable Drinking Water',
      description: 'High-purity, non-toxic, lead-free uPVC and HDPE pressure piping networks built for municipal and rural clean drinking water schemes.',
      tags: ['Town Water Works', 'Gravity Mains', 'Overhead Tanks']
    },
    {
      id: 'industry-infrastructure',
      name: 'Infrastructure',
      icon: Landmark,
      subtitle: 'Civic & Industrial Utilities',
      description: 'Heavy-gauge piping engineered for highway culverts, underground optical fiber cabling conduits, stormwater and chemical industrial effluent.',
      tags: ['Highways & Bridges', 'Industrial Parks', 'Drainage Culverts']
    },
  ];

  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#F3F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#08A9D6] border border-sky-100 text-xs font-bold uppercase tracking-wider mb-4">
            Sectors & Applications
          </div>
          <h2
            id="industries-main-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B4A] tracking-tight"
          >
            Solutions for Every Application
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Tailored piping solutions engineered to withstand demanding soil pressures, hydraulic loads, and rigorous operating conditions.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                id={ind.id}
                onClick={() => onSelectIndustry(ind.name)}
                className="group cursor-pointer bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_8px_24px_rgba(7,27,74,0.04)] hover:shadow-[0_16px_36px_rgba(7,27,74,0.08)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#E1F4FA] text-[#08A9D6] group-hover:bg-[#071B4A] group-hover:text-[#08A9D6] flex items-center justify-center transition-colors">
                      <Icon className="w-7 h-7 stroke-[1.8]" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-[#08A9D6] transition-colors" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#08A9D6]">
                    {ind.subtitle}
                  </span>
                  
                  <h3 className="text-xl font-bold text-[#071B4A] mt-1 mb-3">
                    {ind.name}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed font-normal mb-6">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
                  {ind.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#F3F6F8] text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
