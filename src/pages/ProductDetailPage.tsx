import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  Layers,
  ChevronRight,
  FileText,
  Building,
  Image as ImageIcon,
} from "lucide-react";
import { PRODUCTS_DATA } from "../data/products";

interface ProductDetailPageProps {
  onOpenQuote: () => void;
  onOpenCatalogue?: () => void;
  forcedProductId?: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  onOpenQuote,
  onOpenCatalogue,
  forcedProductId,
}) => {
  const { productId: paramProductId } = useParams<{ productId: string }>();
  const activeId = forcedProductId || paramProductId;

  // Find product by id
  const product = PRODUCTS_DATA.find((p) => p.id === activeId);

  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const currentHeroImage = activeImage || product.image;

  return (
    <div
      id={`product-detail-${product.id}`}
      className="w-full bg-white text-[#111827]"
    >
      {/* 1. BREADCRUMB & BACK LINK */}
      <div className="bg-[#F3F6F8] border-b border-gray-200/60 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:text-[#08A9D6] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              to="/products"
              className="hover:text-[#08A9D6] transition-colors"
            >
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-[#071B4A]">{product.name}</span>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#08A9D6] hover:text-[#071B4A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Products</span>
          </Link>
        </div>
      </div>

      {/* 2. PRODUCT HERO */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Large Product Image & Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-card overflow-hidden border border-gray-200 soft-shadow p-2 bg-[#F3F6F8]">
                <img
                  src={currentHeroImage}
                  alt={product.name}
                  className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover rounded-[18px] transition-all duration-300"
                />
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                  <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold bg-[#071B4A]/90 text-white backdrop-blur-md">
                    {product.standard}
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                    <ImageIcon className="w-3.5 h-3.5 text-[#08A9D6]" />
                    <span>Product View Gallery</span>
                  </p>
                  <div className="flex items-center gap-3 overflow-x-auto pb-2 -mx-1 px-1">
                    {product.gallery.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImage(imgUrl)}
                        className={`w-20 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                          currentHeroImage === imgUrl
                            ? "border-[#08A9D6] scale-95 shadow-sm"
                            : "border-gray-200 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${product.name} shot ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Overview & CTA */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block font-heading">
                  High-Grade Manufacturing
                </span>
                <h1 className="text-[28px] sm:text-4xl font-extrabold text-[#071B4A] font-heading tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="text-base text-gray-700 leading-relaxed font-normal">
                  {product.fullDesc}
                </p>
              </div>

              {/* Product Types if present */}
              {product.types && product.types.length > 0 && (
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#071B4A] font-heading mb-2.5">
                    Available Product Configurations & Jointing
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.types.map((type, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-[#071B4A] border border-sky-200 shadow-2xs"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Specification Box */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 bg-[#F3F6F8] p-4 sm:p-5 rounded-2xl border border-gray-100 text-xs">
                <div>
                  <span className="text-gray-500 font-medium block">
                    Nominal Sizes:
                  </span>
                  <span className="font-bold text-[#071B4A] text-sm">
                    {product.sizes}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 font-medium block">
                    Pressure Rating:
                  </span>
                  <span className="font-bold text-[#071B4A] text-sm">
                    {product.pressureRating}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 font-medium block">
                    Quality Standard:
                  </span>
                  <span className="font-bold text-[#071B4A] text-sm">
                    {product.standard}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 font-medium block">
                    Material Base:
                  </span>
                  <span className="font-bold text-[#071B4A] text-sm">
                    100% Virgin Polymer
                  </span>
                </div>
              </div>

              {/* Action Buttons - Stack full-width on mobile with min-h-[48px] */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                {/* <button
                  id="product-detail-quote-btn"
                  type="button"
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto flex-1 min-h-[48px] py-3.5 px-6 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white text-sm font-bold tracking-wide shadow-md shadow-sky-500/20 transition-all flex items-center justify-center gap-2 active:scale-95 text-center"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request Instant Quotation</span>
                </button> */}

                <a
                  href="https://drive.google.com/uc?export=download&id=1XMsaWzQScf-KSeHEsRDxob_bBhiZuheo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full border border-gray-200 text-xs font-bold text-[#071B4A] hover:text-[#08A9D6] hover:border-[#08A9D6] transition-colors"
                >
                  <Download className="w-4 h-4 text-[#08A9D6]" />
                  <span>Download Brochure</span>
                </a>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto min-h-[48px] py-3.5 px-6 rounded-full bg-[#071B4A] hover:bg-[#0d2766] text-white text-sm font-bold tracking-wide transition-all flex items-center justify-center gap-2 active:scale-95 text-center"
                >
                  <span>Contact Sales Desk</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES & APPLICATIONS (TWO COLUMN) */}
      <section className="py-14 sm:py-16 bg-[#F3F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
            {/* Key Features */}
            <div className="lg:col-span-6 bg-white rounded-card p-6 sm:p-8 border border-gray-100 soft-shadow">
              <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block mb-2 font-heading">
                Engineering Highlights
              </span>
              <h3 className="text-xl font-bold text-[#071B4A] font-heading mb-5 sm:mb-6">
                Key Features & Technical Advantages
              </h3>

              <ul className="space-y-3.5 sm:space-y-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-50 text-[#08A9D6] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="lg:col-span-6 bg-white rounded-card p-6 sm:p-8 border border-gray-100 soft-shadow">
              <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block mb-2 font-heading">
                Deployment Verticals
              </span>
              <h3 className="text-xl font-bold text-[#071B4A] font-heading mb-5 sm:mb-6">
                Recommended Applications
              </h3>

              <ul className="space-y-3.5 sm:space-y-4">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#071B4A]/10 text-[#071B4A] flex items-center justify-center shrink-0 mt-0.5">
                      <Droplets className="w-4 h-4 text-[#08A9D6]" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                      {app}
                    </span>
                  </li>
                ))}
              </ul>

              {product.benefits && product.benefits.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#071B4A] font-heading mb-3">
                    Primary Operational Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#F3F6F8] text-xs text-gray-700 font-semibold flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#08A9D6]" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL OVERVIEW (If available) */}
      {product.technicalOverview && (
        <section className="py-14 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#F0F9FD] rounded-card p-6 sm:p-10 border border-sky-100">
              <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block mb-2 font-heading">
                Standards & Compliance
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#071B4A] font-heading mb-4">
                Technical Overview & In-House Testing
              </h3>
              <p className="text-base text-gray-700 leading-relaxed max-w-4xl font-normal">
                {product.technicalOverview}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 5. SPECIFICATION TABLE */}
      {product.specifications && product.specifications.length > 0 && (
        <section className="py-14 sm:py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block mb-2 font-heading">
                Engineering Dimensions
              </span>
              <h3 className="text-[24px] sm:text-2xl font-bold text-[#071B4A] font-heading">
                Specification Table ({product.standard})
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 font-normal">
                Standard dimension ratios, wall thickness tolerances, and rated
                working pressures.
              </p>
              <p className="sm:hidden text-[11px] text-[#08A9D6] font-semibold mt-2">
                ← Swipe horizontally to see all specifications →
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 soft-shadow -mx-4 sm:mx-0">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#071B4A] text-white font-heading text-xs font-bold uppercase tracking-wider">
                    <th className="py-3 px-3 sm:px-6 whitespace-nowrap">
                      Nominal Size
                    </th>
                    <th className="py-3 px-3 sm:px-6 whitespace-nowrap">
                      Pressure Class
                    </th>
                    <th className="py-3 px-3 sm:px-6 whitespace-nowrap">
                      Outer Diameter (OD)
                    </th>
                    <th className="py-3 px-3 sm:px-6 whitespace-nowrap">
                      Wall Thickness
                    </th>
                    <th className="py-3 px-3 sm:px-6 whitespace-nowrap">
                      Working Pressure
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {product.specifications.map((row, idx) => (
                    <tr
                      key={idx}
                      className={
                        idx % 2 === 0
                          ? "bg-white hover:bg-sky-50/50 transition-colors"
                          : "bg-gray-50/60 hover:bg-sky-50/50 transition-colors"
                      }
                    >
                      <td className="py-3 px-3 sm:px-6 font-bold text-[#071B4A] whitespace-nowrap">
                        {row.size}
                      </td>
                      <td className="py-3 px-3 sm:px-6 text-gray-700 whitespace-nowrap">
                        {row.classRating}
                      </td>
                      <td className="py-3 px-3 sm:px-6 text-gray-700 whitespace-nowrap">
                        {row.outerDiameter}
                      </td>
                      <td className="py-3 px-3 sm:px-6 text-gray-700 whitespace-nowrap">
                        {row.wallThickness}
                      </td>
                      <td className="py-3 px-3 sm:px-6 font-medium text-[#08A9D6] whitespace-nowrap">
                        {row.workingPressure}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-gray-400 mt-3 text-right">
              * Custom wall thickness and special lengths available for project
              tenders upon request.
            </p>
          </div>
        </section>
      )}

      {/* 6. BOTTOM ACTION BAR */}
      <section className="py-12 sm:py-14 bg-[#071B4A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
            Need Bulk Consignment or Dealer Pricing for {product.name}?
          </h3>
          <p className="text-sm text-sky-100/80 max-w-xl mx-auto font-normal leading-relaxed">
            Our plant dispatch department provides full logistics coordination
            across Gujarat, Maharashtra, Rajasthan, and Madhya Pradesh.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-md mx-auto sm:max-w-none">
            <button
              type="button"
              onClick={onOpenQuote}
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white text-sm font-bold tracking-wide transition-all shadow-md active:scale-95 flex items-center justify-center text-center"
            >
              Get Custom Quote for {product.name}
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold tracking-wide border border-white/20 transition-all active:scale-95 flex items-center justify-center text-center"
            >
              Talk to Our Engineers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
