import React from 'react';
import { ArrowRight, FileText, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { HERO_IMAGE } from '../data/products';

interface HeroProps {
  onOpenCatalogue: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCatalogue }) => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-[#EBF7FC] via-[#F4FAFD] to-white pt-10 sm:pt-14 pb-16 lg:pb-24 overflow-hidden"
    >
      {/* Subtle static wave background shapes representing water supply & hydraulics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
        <svg
          className="absolute -top-12 -right-24 w-[780px] h-[780px] text-[#08A9D6]/10"
          viewBox="0 0 600 600"
          fill="currentColor"
        >
          <path d="M300,450 C382.8,450 450,382.8 450,300 C450,217.2 382.8,150 300,150 C217.2,150 150,217.2 150,300 C150,382.8 217.2,450 300,450 Z" />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full h-28 text-white"
          preserveAspectRatio="none"
          viewBox="0 0 1440 120"
          fill="currentColor"
        >
          <path d="M0,32L80,48C160,64,320,96,480,96C640,96,800,64,960,53.3C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand, Headings, Call-to-Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Small text */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F4FA] border border-[#BDE8F5] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#08A9D6]" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#071B4A]">
                KEVIN PVC PIPE INDUSTRIES
              </span>
            </div>

            {/* Large Heading */}
            <h1
              id="hero-main-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#071B4A] tracking-tight leading-[1.12] mb-6"
            >
              Reliable Water Flow.
              <span className="block text-[#08A9D6]">Built for Every Project.</span>
            </h1>

            {/* Description */}
            <p
              id="hero-description"
              className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-2xl mb-8"
            >
              Premium PVC pipe solutions engineered for dependable water supply, irrigation and infrastructure applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                id="hero-explore-products-btn"
                href="#products"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white text-base font-bold shadow-md hover:shadow-lg transition-colors text-center"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-download-catalogue-btn"
                type="button"
                onClick={onOpenCatalogue}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-gray-50 text-[#071B4A] border border-gray-200 text-base font-bold shadow-sm transition-colors text-center"
              >
                <FileText className="w-4 h-4 text-[#08A9D6]" />
                <span>Download Catalogue</span>
              </button>
            </div>

            {/* Credibility highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-sky-100 w-full max-w-xl text-left">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#071B4A]">50+ Yrs</div>
                <div className="text-xs font-medium text-gray-500 mt-0.5">Design Lifespan</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#08A9D6]">100%</div>
                <div className="text-xs font-medium text-gray-500 mt-0.5">Virgin Grade Resin</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#071B4A]">4+ ISI</div>
                <div className="text-xs font-medium text-gray-500 mt-0.5">Certifications</div>
              </div>
            </div>

          </div>

          {/* Right Column: Large realistic 3D presentation of white/light-gray PVC pipes with fittings */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Subtle back decorative glow/ring */}
              <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-tr from-[#08A9D6]/20 via-[#071B4A]/10 to-transparent blur-xl pointer-events-none" />
              
              {/* Product Visual Container */}
              <div
                id="hero-product-3d-card"
                className="relative bg-white rounded-[24px] p-3 sm:p-4 shadow-xl border border-sky-100 overflow-hidden"
              >
                <div className="relative aspect-[4/3] rounded-[18px] overflow-hidden bg-[#F0F8FC]">
                  <img
                    id="hero-pipes-image"
                    src={HERO_IMAGE}
                    alt="Realistic 3D presentation of white and light-gray PVC pipes with precision fittings"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Subtle water-inspired badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-sky-100 shadow-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#08A9D6]" />
                    <span className="text-xs font-bold text-[#071B4A]">
                      Engineered Precision Fittings
                    </span>
                  </div>
                </div>

                {/* Technical highlights beneath hero visual */}
                <div className="mt-3.5 px-3 py-2 bg-[#F3F6F8] rounded-[14px] flex items-center justify-between text-xs text-gray-700">
                  <div className="flex items-center gap-1.5 font-semibold text-[#071B4A]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#08A9D6]" />
                    <span>Hydraulic Pressure Tested</span>
                  </div>
                  <span className="font-semibold text-gray-400">|</span>
                  <div className="flex items-center gap-1.5 font-semibold text-[#071B4A]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#08A9D6]" />
                    <span>Lead-Free uPVC</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
