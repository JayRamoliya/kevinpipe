import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Droplets,
  CheckCircle2,
  ShieldCheck,
  Download,
} from "lucide-react";
import { PRODUCTS_DATA } from "../data/products";

interface ProductsPageProps {
  onOpenQuote: () => void;
  onOpenCatalogue?: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onOpenQuote,
  onOpenCatalogue,
}) => {
  return (
    <div
      id="products-page-container"
      className="w-full bg-white text-[#111827]"
    >
      {/* 1. HERO BANNER */}
      <section
        className="text-white py-16 lg:py-20 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('bg3.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#071B4A]/85" />

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#08A9D6_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#08A9D6] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10 font-heading">
            <span>ISI & ISO Certified Range</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white">
            Our Products
          </h1>

          <p className="mt-4 text-base sm:text-lg text-sky-100/80 max-w-2xl mx-auto font-light leading-relaxed">
            Engineered piping systems manufactured from 100% virgin polymer
            compound for pressure water conveyance, deep borewells, casing, and
            agricultural irrigation.
          </p>
        </div>
      </section>

      {/* 2. PRODUCTS GRID */}
      <section className="py-14 sm:py-20 bg-[#F3F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block font-heading">
                Catalogue Portfolio
              </span>
              <h2 className="text-[26px] sm:text-3xl font-extrabold text-[#071B4A] font-heading">
                Complete Piping Systems
              </h2>
            </div>

            <a
              href="https://drive.google.com/file/d/1WQcgMPVAsU5vwlJXhhLtya9ocvylHU8L/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full border border-gray-200 text-xs font-bold text-[#071B4A] hover:text-[#08A9D6] hover:border-[#08A9D6] transition-colors"
            >
              <Download className="w-4 h-4 text-[#08A9D6]" />
              <span>Download Brochure</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PRODUCTS_DATA.map((product) => (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="bg-white rounded-card overflow-hidden border border-gray-100 soft-shadow flex flex-col group transition-all duration-300 hover:border-sky-200 hover:shadow-xl"
              >
                {/* Product Image */}
                <div className="relative h-52 sm:h-60 overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-[#071B4A]/90 backdrop-blur-md text-white">
                      {product.standard}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#071B4A] group-hover:text-[#08A9D6] transition-colors font-heading mb-2">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4 font-normal">
                      {product.shortDesc}
                    </p>

                    {/* Quick Specs Highlight Box */}
                    <div className="bg-[#F3F6F8] rounded-2xl p-4 space-y-2 mb-6 text-xs text-gray-600">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-800">
                          Available Sizes:
                        </span>
                        <span className="font-medium text-[#071B4A]">
                          {product.sizes}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-800">
                          Pressure Rating:
                        </span>
                        <span className="font-medium text-[#071B4A]">
                          {product.pressureRating}
                        </span>
                      </div>
                      {product.types && (
                        <div className="pt-1 border-t border-gray-200/70 text-[11px]">
                          <span className="font-semibold text-gray-800 block mb-1">
                            Configuration Types:
                          </span>
                          <span className="text-gray-600">
                            {product.types.join(" • ")}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions - Full width and 48px touch targets */}
                  <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                    <Link
                      id={`view-details-btn-${product.id}`}
                      to={`/products/${product.id}`}
                      className="min-h-[48px] flex-1 py-3 px-4 rounded-xl sm:rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white text-xs font-bold tracking-wide transition-colors flex items-center justify-center gap-1.5 shadow-sm active:scale-95 text-center"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      type="button"
                      onClick={onOpenQuote}
                      className="min-h-[48px] py-3 px-5 rounded-xl sm:rounded-full bg-gray-100 hover:bg-[#071B4A] hover:text-white text-[#071B4A] text-xs font-bold transition-colors active:scale-95 text-center"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. QUALITY ASSURANCE FOOTER BANNER */}
      <section className="py-14 sm:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#071B4A] rounded-card p-6 sm:p-10 lg:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#08A9D6] font-heading">
                Factory Direct Bulk Dispatch
              </span>
              <h3 className="text-[24px] sm:text-3xl font-extrabold font-heading text-white">
                Need Bulk Tender or Contractor Specifications?
              </h3>
              <p className="text-sm sm:text-base text-sky-100/80 max-w-xl font-normal leading-relaxed">
                We supply custom wall-thicknesses, special reel coil lengths,
                and project-stamped pipes for large Jal Jeevan Mission and
                municipal water projects.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenQuote}
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white text-sm font-bold tracking-wide shadow-lg shadow-sky-500/25 shrink-0 transition-transform active:scale-95 flex items-center justify-center text-center"
            >
              Get Project Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
