import React from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface FinalCTAProps {
  onGetQuote: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onGetQuote }) => {
  return (
    <section id="final-cta" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Premium Cyan / Deep Navy Card */}
        <div className="relative rounded-[24px] bg-gradient-to-r from-[#071B4A] via-[#0b245e] to-[#08A9D6] p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl">
          
          {/* Subtle static water flow curves */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-15">
            <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
              <path d="M0,150 Q100,50 200,150 T400,150 L400,300 L0,300 Z" fill="#FFFFFF" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#E1F4FA] text-xs font-bold uppercase tracking-wider mb-6">
              Partner with Us
            </div>

            <h2
              id="final-cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
            >
              Let’s Build Better Water Solutions Together.
            </h2>

            <p
              id="final-cta-text"
              className="text-base sm:text-lg text-sky-100 font-normal leading-relaxed mb-10 max-w-2xl"
            >
              Connect with Kevin PVC Pipe Industries for your next water-supply or irrigation project.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="final-cta-get-quote-btn"
                type="button"
                onClick={onGetQuote}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#08A9D6] hover:bg-white hover:text-[#071B4A] text-white text-base font-bold shadow-lg transition-all text-center group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                id="final-cta-call-btn"
                href="tel:02791-291353"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-base font-bold border border-white/20 transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-[#08A9D6]" />
                <span>Call 02791-291353</span>
              </a>
            </div>

            {/* Quick dispatch note */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-sky-200">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#08A9D6]" />
                Direct Factory Pricing
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#08A9D6]" />
                Bulk Logistics Delivery
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#08A9D6]" />
                Verified Test Certificates
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
