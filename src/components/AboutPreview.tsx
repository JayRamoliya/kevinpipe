import React from 'react';
import { ArrowRight, Factory, Check, ShieldAlert } from 'lucide-react';
import { FACTORY_IMAGE } from '../data/products';

interface AboutPreviewProps {
  onKnowMore: () => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onKnowMore }) => {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      
      {/* Simple curved cyan wave graphic behind the section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <svg
          className="absolute -bottom-24 right-0 w-2/3 h-96 text-[#08A9D6]/10"
          viewBox="0 0 800 400"
          fill="currentColor"
        >
          <path d="M0,256 C200,320 400,180 600,240 C700,270 750,290 800,260 L800,400 L0,400 Z" />
        </svg>
        <svg
          className="absolute top-0 left-0 w-1/2 h-64 text-[#E1F4FA]"
          viewBox="0 0 500 300"
          fill="currentColor"
        >
          <path d="M0,0 L500,0 C420,120 300,180 150,150 C50,130 10,80 0,0 Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large professional PVC pipe manufacturing facility image */}
          <div className="lg:col-span-6">
            <div className="relative">
              
              {/* Image Frame with 24px radius */}
              <div
                id="about-facility-image-card"
                className="relative rounded-[24px] overflow-hidden shadow-xl border border-gray-100 bg-gray-100"
              >
                <div className="aspect-[16/11]">
                  <img
                    id="manufacturing-facility-img"
                    src={FACTORY_IMAGE}
                    alt="Kevin PVC Pipe Industries high-tech manufacturing plant facility"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Manufacturing highlight badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl p-4 shadow-lg border border-sky-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#071B4A] text-[#08A9D6] flex items-center justify-center">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Manufacturing Hub</div>
                  <div className="text-sm font-bold text-[#071B4A]">Amreli, Gujarat Plant</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Small label */}
            <span
              id="about-kevin-label"
              className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#08A9D6] mb-3"
            >
              ABOUT KEVIN
            </span>

            {/* Heading */}
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B4A] tracking-tight leading-[1.18] mb-6"
            >
              Quality Manufacturing. Reliable Water Solutions.
            </h2>

            {/* Text */}
            <p
              id="about-text"
              className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed mb-8"
            >
              Kevin PVC Pipe Industries is committed to delivering dependable PVC pipe solutions with a strong focus on quality, performance and customer satisfaction.
            </p>

            {/* Core manufacturing capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E1F4FA] text-[#08A9D6] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-gray-800">Advanced twin-screw extrusion technology</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E1F4FA] text-[#08A9D6] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-gray-800">100% in-line hydrostatic pressure testing</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E1F4FA] text-[#08A9D6] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-gray-800">Raw materials with certified lead-free additives</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E1F4FA] text-[#08A9D6] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-gray-800">High-precision socketing & threading line</span>
              </div>
            </div>

            {/* Button */}
            <button
              id="about-know-more-btn"
              type="button"
              onClick={onKnowMore}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#071B4A] hover:bg-[#0d2766] text-white text-sm font-bold shadow-sm transition-colors group"
            >
              <span>Know More</span>
              <ArrowRight className="w-4 h-4 text-[#08A9D6] transition-transform group-hover:translate-x-1" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
