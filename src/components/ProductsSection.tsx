import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { ProductItem } from '../types';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProduct }) => {
  return (
    <section id="products" className="py-20 lg:py-28 bg-[#F3F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#08A9D6] border border-sky-100 text-xs font-bold uppercase tracking-wider mb-4">
            Industrial Portfolio
          </div>
          <h2
            id="products-main-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B4A] tracking-tight"
          >
            Our Product Range
          </h2>
          <p
            id="products-subtitle"
            className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed"
          >
            Reliable pipe solutions for water supply, irrigation and infrastructure.
          </p>
        </div>

        {/* Clean 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_8px_24px_rgba(7,27,74,0.05)] hover:shadow-[0_14px_34px_rgba(7,27,74,0.09)] transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Realistic PVC Pipe Product Image */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    id={`product-img-${product.id}`}
                    src={product.image}
                    alt={`${product.name} - Kevin PVC Pipe Industries`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#071B4A] shadow-xs">
                    {product.standard}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7">
                  <h3 className="text-xl font-extrabold text-[#071B4A] mb-2 tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-normal leading-relaxed line-clamp-2">
                    {product.shortDesc}
                  </p>
                  
                  {/* Subtle specs chip */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                    <span>Sizes: <strong className="text-gray-800">{product.sizes}</strong></span>
                  </div>
                </div>
              </div>

              {/* View Product CTA Button */}
              <div className="px-7 pb-7 pt-2">
                <button
                  id={`view-product-btn-${product.id}`}
                  type="button"
                  onClick={() => onSelectProduct(product)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F3F6F8] hover:bg-[#E1F4FA] text-[#071B4A] hover:text-[#08A9D6] text-sm font-bold transition-colors group"
                >
                  <span>View Product</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
