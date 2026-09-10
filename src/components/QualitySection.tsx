import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, FileCheck2 } from 'lucide-react';

interface QualitySectionProps {
  onTalkToTeam: () => void;
}

export const QualitySection: React.FC<QualitySectionProps> = ({ onTalkToTeam }) => {
  const certifications = [
    {
      code: 'ISO 9001:2015',
      title: 'Quality Management System',
      description: 'Certified operational framework governing raw material inspection, compounding precision, and batch traceability.',
      type: 'International Benchmark',
    },
    {
      code: 'IS 4984',
      title: 'HDPE Water Supply Standards',
      description: 'Bureau of Indian Standards compliance for High Density Polyethylene piping utilized in pressurized potable networks.',
      type: 'National Standard',
    },
    {
      code: 'IS 4985',
      title: 'uPVC Potable Water Standard',
      description: 'Stringent standard for Unplasticized Polyvinyl Chloride pipes for agricultural irrigation and municipal distribution.',
      type: 'National Standard',
    },
    {
      code: 'IS 12818',
      title: 'uPVC Casing & Screen Pipes',
      description: 'Prescribed requirements for deep borewell casing, column, and slotted ribbed screen pipe installations.',
      type: 'National Standard',
    },
  ];

  return (
    <section id="quality" className="py-20 lg:py-28 bg-[#071B4A] text-white relative overflow-hidden">
      
      {/* Subtle background geometric rings for industrial depth */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <circle cx="900" cy="100" r="400" stroke="#08A9D6" strokeWidth="2" />
          <circle cx="900" cy="100" r="300" stroke="#08A9D6" strokeWidth="1.5" />
          <circle cx="100" cy="900" r="350" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#08A9D6] border border-white/10 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-[#08A9D6]" />
            <span>Strict Testing Protocol</span>
          </div>
          
          <h2
            id="quality-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Quality You Can Trust
          </h2>
          
          <p
            id="quality-short-text"
            className="mt-4 text-base sm:text-lg text-sky-100/80 font-normal leading-relaxed"
          >
            Our manufacturing and quality processes are focused on delivering consistent, reliable and long-lasting pipe solutions.
          </p>
        </div>

        {/* Verified Certification & Standard Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.code}
              id={`cert-badge-${cert.code.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="bg-white/5 border border-white/10 rounded-[24px] p-7 backdrop-blur-xs hover:bg-white/[0.08] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#08A9D6]/20 border border-[#08A9D6]/40 flex items-center justify-center text-[#08A9D6]">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#08A9D6] bg-[#08A9D6]/10 px-2.5 py-1 rounded-full">
                    {cert.type}
                  </span>
                </div>

                <div className="text-2xl font-extrabold text-white tracking-tight mb-2">
                  {cert.code}
                </div>

                <h3 className="text-sm font-bold text-sky-200 mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs text-sky-100/70 font-normal leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-sky-300">
                <CheckCircle2 className="w-4 h-4 text-[#08A9D6]" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality assurance lab checks banner */}
        <div className="bg-white/5 border border-white/10 rounded-[20px] p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-[#08A9D6] flex items-center justify-center text-white shrink-0">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                100% Factory Batch Testing & MTC Reports
              </h4>
              <p className="text-xs sm:text-sm text-sky-100/75 mt-0.5">
                Every consignment is accompanied by Mill Test Certificates (MTC) verifying wall thickness, tensile yield, impact resistance, and hydrostatic pressure compliance.
              </p>
            </div>
          </div>

          {/* CTA: Talk to Our Team */}
          <button
            id="quality-talk-to-team-btn"
            type="button"
            onClick={onTalkToTeam}
            className="shrink-0 inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white text-sm font-bold shadow-md transition-colors group"
          >
            <span>Talk to Our Team</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
