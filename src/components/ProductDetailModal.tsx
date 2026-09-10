import React from 'react';
import { X, Check, ShieldCheck, ArrowRight, Gauge, Layers, FileCheck } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-[24px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[92vh] overflow-y-auto relative">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Media Header */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
          <div className="sm:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="sm:col-span-7">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#08A9D6] bg-[#E1F4FA] px-2.5 py-0.5 rounded-full mb-2">
              {product.standard}
            </span>
            <h3 className="text-2xl font-extrabold text-[#071B4A] tracking-tight">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              {product.fullDesc}
            </p>
          </div>
        </div>

        {/* Technical Specification Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 bg-[#F3F6F8] rounded-2xl text-xs">
          <div className="flex items-start gap-2.5">
            <Gauge className="w-4 h-4 text-[#08A9D6] shrink-0 mt-0.5" />
            <div>
              <span className="text-gray-500 font-medium block">Nominal Sizes</span>
              <strong className="text-gray-900 font-bold">{product.sizes}</strong>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Layers className="w-4 h-4 text-[#08A9D6] shrink-0 mt-0.5" />
            <div>
              <span className="text-gray-500 font-medium block">Pressure Rating</span>
              <strong className="text-gray-900 font-bold">{product.pressureRating}</strong>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <FileCheck className="w-4 h-4 text-[#08A9D6] shrink-0 mt-0.5" />
            <div>
              <span className="text-gray-500 font-medium block">Quality Benchmark</span>
              <strong className="text-gray-900 font-bold">{product.standard}</strong>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#08A9D6] shrink-0 mt-0.5" />
            <div>
              <span className="text-gray-500 font-medium block">Material Grade</span>
              <strong className="text-gray-900 font-bold">100% Virgin Polymer Resin</strong>
            </div>
          </div>
        </div>

        {/* Key Engineering Features */}
        <div className="mb-6">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#071B4A] mb-3">
            Engineering & Performance Highlights
          </h4>
          <div className="space-y-2">
            {product.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                <Check className="w-3.5 h-3.5 text-[#08A9D6] shrink-0 mt-0.5 stroke-[2.5]" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Applications */}
        <div className="mb-8">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#071B4A] mb-3">
            Recommended Application Fields
          </h4>
          <div className="flex flex-wrap gap-2">
            {product.applications.map((app, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-3 py-1 bg-sky-50 text-[#071B4A] border border-sky-100 rounded-lg"
              >
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={() => {
              const name = product.name;
              onClose();
              onRequestQuote(name);
            }}
            className="flex-1 py-3 px-6 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Request Quote For This Pipe</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onClose}
            className="py-3 px-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
