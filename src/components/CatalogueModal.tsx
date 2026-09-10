import React from 'react';
import { X, Download, Printer, CheckCircle, FileText, Droplets } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGetQuote: () => void;
}

export const CatalogueModal: React.FC<CatalogueModalProps> = ({ isOpen, onClose, onGetQuote }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-[24px] max-w-3xl w-full p-5 sm:p-8 shadow-2xl border border-gray-100 max-h-[94vh] sm:max-h-[92vh] overflow-y-auto relative">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Close catalogue"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5 sm:mb-6 pb-4 border-b border-gray-100 pr-8">
          <div className="w-12 h-12 rounded-xl bg-[#071B4A] text-[#08A9D6] flex items-center justify-center shrink-0">
            <Droplets className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#08A9D6] font-heading">
              TECHNICAL SPECIFICATION CATALOGUE 2026
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#071B4A] font-heading">
              KEVIN PVC PIPE INDUSTRIES
            </h3>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-5 sm:mb-6 leading-relaxed font-normal">
          Comprehensive product portfolio engineered for agriculture, submersible column rising, potable drinking water grids, and civil infrastructure.
        </p>

        {/* Mobile scroll hint */}
        <div className="flex sm:hidden items-center justify-between text-[11px] text-gray-500 mb-2 px-1">
          <span>Swipe horizontally to view full specifications</span>
          <span className="text-[#08A9D6] font-semibold">Scroll &rarr;</span>
        </div>

        {/* Product Spec Table */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px] text-left text-xs">
              <thead className="bg-[#071B4A] text-white">
                <tr>
                  <th className="p-3 font-bold">Product Name</th>
                  <th className="p-3 font-bold">Standard</th>
                  <th className="p-3 font-bold">Size Range</th>
                  <th className="p-3 font-bold">Pressure Class</th>
                  <th className="p-3 font-bold">Primary Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {PRODUCTS_DATA.map((p, idx) => (
                  <tr key={p.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}>
                    <td className="p-3 font-bold text-[#071B4A] whitespace-nowrap">{p.name}</td>
                    <td className="p-3 font-semibold text-[#08A9D6] whitespace-nowrap">{p.standard}</td>
                    <td className="p-3 text-gray-700 whitespace-nowrap">{p.sizes}</td>
                    <td className="p-3 text-gray-700 whitespace-nowrap">{p.pressureRating}</td>
                    <td className="p-3 text-gray-600">{p.shortDesc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Standards & Credentials Overview */}
        <div className="bg-[#F3F6F8] rounded-2xl p-4 sm:p-5 mb-6 text-xs text-gray-700 space-y-2">
          <h4 className="font-bold text-[#071B4A] uppercase tracking-wider text-[11px] font-heading">
            Quality & Material Compliance
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#08A9D6] shrink-0" />
              <span>100% Virgin Grade Resin Polymer</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#08A9D6] shrink-0" />
              <span>ISO 9001:2015 Certified Plant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#08A9D6] shrink-0" />
              <span>Lead-free formulation for potable water</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#08A9D6] shrink-0" />
              <span>Hydrostatic pressure burst verified</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-4 border-t border-gray-100">
          <div className="w-full sm:w-auto">
            <button
              type="button"
              onClick={handlePrint}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-700 text-xs font-bold transition-colors"
            >
              <Printer className="w-4 h-4 text-[#08A9D6]" />
              <span>Print Specification Sheet</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                onClose();
                onGetQuote();
              }}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white text-xs font-bold transition-colors shadow-sm"
            >
              <span>Get Commercial Pricing</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs font-bold"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
