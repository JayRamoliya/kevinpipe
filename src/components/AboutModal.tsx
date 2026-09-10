import React from 'react';
import { X, Factory, ShieldCheck, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { FACTORY_IMAGE } from '../data/products';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onContact }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-[24px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[92vh] overflow-y-auto relative">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Close about company modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#08A9D6] mb-1 block">
            ABOUT KEVIN PVC PIPE INDUSTRIES
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071B4A]">
            Quality Manufacturing. Reliable Water Solutions.
          </h3>
        </div>

        {/* Plant Image */}
        <div className="rounded-2xl overflow-hidden mb-6 aspect-[16/9] bg-gray-100">
          <img
            src={FACTORY_IMAGE}
            alt="Kevin PVC Pipe manufacturing plant"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Narrative */}
        <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
          <p>
            Established on the Rajkot-Bhavnagar Highway in Amreli District, Gujarat, <strong>Kevin PVC Pipe Industries</strong> is an engineering-driven PVC piping manufacturer dedicated to powering agricultural irrigation, civil construction, and municipal water grids.
          </p>
          <p>
            With advanced high-precision extrusion machinery and automated socketing systems, our production line handles uPVC column pipes, uPVC pressure pipes, rigid conduits, elastomeric ring-fit systems, HDPE pipes, and agricultural sprinkler lines with millimeter dimensional accuracy.
          </p>
        </div>

        {/* Manufacturing Strengths */}
        <div className="bg-[#F3F6F8] rounded-2xl p-5 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#071B4A] mb-3">
            Core Operational Pillars
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#08A9D6] shrink-0 mt-0.5" />
              <span><strong>Virgin Raw Materials:</strong> Pure polymers with zero reprocessed fillers</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#08A9D6] shrink-0 mt-0.5" />
              <span><strong>In-House Testing Lab:</strong> Hydrostatic burst, impact, and tensile rigs</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#08A9D6] shrink-0 mt-0.5" />
              <span><strong>IS Certifications:</strong> Full compliance with IS 4984, 4985, and 12818</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#08A9D6] shrink-0 mt-0.5" />
              <span><strong>Prompt Logistics:</strong> Direct bulk dispatch across western and pan-India</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={() => {
              onClose();
              onContact();
            }}
            className="flex-1 py-3 px-6 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Connect with Factory Engineers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="py-3 px-6 rounded-full bg-gray-100 text-gray-700 font-bold text-sm"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
