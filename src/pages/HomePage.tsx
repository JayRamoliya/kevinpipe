import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Droplets, 
  Building2, 
  CheckCircle2, 
  Factory, 
  Sparkles,
  ChevronRight,
  Download
} from 'lucide-react';
import { 
  HERO_IMAGE, 
  FACTORY_IMAGE, 
  LAB_IMAGE, 
  PRODUCTS_DATA, 
  CLIENT_LOGOS, 
  CERTIFICATIONS 
} from '../data/products';

interface HomePageProps {
  onOpenQuote: () => void;
  onOpenCatalogue?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote, onOpenCatalogue }) => {
  return (
    <div id="home-page-container" className="w-full bg-white text-[#111827]">
      
      {/* ----------------- 1. HERO SECTION ----------------- */}
      <section id="hero-section" className="relative overflow-hidden bg-[#071B4A] text-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-28">
        {/* Subtle background industrial pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#08A9D6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* 1. Text Content Column (Always First on Mobile & Desktop) */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-sky-200 border border-white/10 text-xs font-semibold tracking-wide max-w-full truncate">
                <ShieldCheck className="w-4 h-4 text-[#08A9D6] shrink-0" />
                <span className="truncate">ISO 9001:2008 & BIS / ISI Certified Manufacturing</span>
              </div>

              {/* Hero Heading: Mobile 32px-40px, Desktop 48px-60px */}
              <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.18] text-white font-heading">
                Reliable Water Flow.<br className="hidden sm:inline" />
                <span className="text-[#08A9D6]"> Built for Every Project.</span>
              </h1>

              {/* Body Text: Min 16px on mobile */}
              <p className="text-base sm:text-lg text-sky-100/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                High-performance uPVC pressure pipes, deep-well column pipes, casing pipes, and HDPE irrigation systems engineered for extreme durability and zero-leak water transmission.
              </p>

              {/* Action Buttons: Stacked vertically and full-width on mobile, min-height 48px */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full sm:w-auto">
                <Link
                  id="hero-explore-products-btn"
                  to="/products"
                  className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white text-base font-bold tracking-wide shadow-lg shadow-sky-500/20 transition-all flex items-center justify-center gap-2 group active:scale-95"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  id="hero-get-quote-btn"
                  type="button"
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-base font-bold tracking-wide border border-white/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Get Quote</span>
                </button>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left">
                <div className="p-2">
                  <p className="text-xl sm:text-2xl font-black text-white font-heading">50+</p>
                  <p className="text-[11px] sm:text-xs text-sky-200/70 font-medium">Years Lifespan</p>
                </div>
                <div className="p-2">
                  <p className="text-xl sm:text-2xl font-black text-white font-heading">100%</p>
                  <p className="text-[11px] sm:text-xs text-sky-200/70 font-medium">Virgin Polymer</p>
                </div>
                <div className="p-2">
                  <p className="text-xl sm:text-2xl font-black text-white font-heading">IS 4985</p>
                  <p className="text-[11px] sm:text-xs text-sky-200/70 font-medium">ISI Certified</p>
                </div>
              </div>
            </div>

            {/* 2. Image Column (Below text on mobile, right column on desktop) */}
            <div className="lg:col-span-6 w-full">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="relative rounded-card overflow-hidden bg-white/5 border border-white/15 soft-shadow p-2">
                  <img
                    src={HERO_IMAGE}
                    alt="Kevin PVC Pipe Manufacturing - Reliable Water Flow"
                    className="w-full h-[260px] sm:h-[360px] lg:h-[440px] object-cover rounded-[18px]"
                    loading="eager"
                  />
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#071B4A]/90 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 text-white shadow-xl flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#08A9D6] flex items-center justify-center shrink-0">
                      <Droplets className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-sky-200 font-bold">Engineered Quality</p>
                      <p className="text-xs sm:text-sm font-semibold text-white">Leak-Proof Push-Fit & Threaded Joints</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 2. WHY CHOOSE KEVIN ----------------- */}
      <section id="why-choose-section" className="py-14 sm:py-20 bg-[#F3F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block mb-2 font-heading">
              Industrial Excellence
            </span>
            <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold text-[#071B4A] font-heading tracking-tight leading-tight">
              Why Choose Kevin PVC Pipe Industries?
            </h2>
            <p className="text-gray-600 mt-3 text-base leading-relaxed font-normal">
              Every pipe leaving our manufacturing facility represents decades of polymer engineering, rigorous hydrostatic pressure testing, and an uncompromising commitment to water flow reliability.
            </p>
          </div>

          {/* Responsive Cards: 1 col on mobile, 2 col on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            
            {/* Feature 1 */}
            <div className="bg-white rounded-card p-6 sm:p-7 border border-gray-100 soft-shadow transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#08A9D6] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-lg font-bold text-[#071B4A] mb-2 font-heading">
                100% Virgin Polymer
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Formulated exclusively from virgin suspension-grade resin without recycled adulterants, assuring uniform wall thickness and zero brittleness.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-card p-6 sm:p-7 border border-gray-100 soft-shadow transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#08A9D6] flex items-center justify-center mb-5">
                <Award className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-lg font-bold text-[#071B4A] mb-2 font-heading">
                ISI & ISO Certified
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Certified under ISO 9001:2008 with official Bureau of Indian Standards (BIS) license approvals for IS 4985, IS 12818, and IS 4984.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-card p-6 sm:p-7 border border-gray-100 soft-shadow transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#08A9D6] flex items-center justify-center mb-5">
                <Droplets className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-lg font-bold text-[#071B4A] mb-2 font-heading">
                Zero Friction Loss
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Mirror-smooth internal surface (Hazen-Williams C=150) saves up to 30% electricity for agricultural and municipal pumping stations.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-card p-6 sm:p-7 border border-gray-100 soft-shadow transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#08A9D6] flex items-center justify-center mb-5">
                <Factory className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-lg font-bold text-[#071B4A] mb-2 font-heading">
                State Approval Record
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Approved government vendor for WASMO, GWSSB, and I-Khedut Gujarat, supplying major Jal Jeevan Mission rural drinking water networks.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 3. PRODUCT CATEGORIES ----------------- */}
      <section id="products-section" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block mb-2 font-heading">
                Engineered Solutions
              </span>
              <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold text-[#071B4A] font-heading tracking-tight">
                Our Product Categories
              </h2>
              <p className="text-gray-600 mt-2 text-base max-w-2xl font-normal leading-relaxed">
                Comprehensive piping systems for agricultural irrigation, deep borewells, municipal trunk distribution, and industrial effluent management.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#08A9D6] hover:text-[#071B4A] transition-colors self-start md:self-auto min-h-[40px] py-1"
            >
              <span>View All 5 Product Lines</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Product Cards: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
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

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#071B4A] group-hover:text-[#08A9D6] transition-colors font-heading mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4 font-normal">
                      {product.shortDesc}
                    </p>
                    <div className="space-y-1.5 text-xs sm:text-sm text-gray-600 mb-6 bg-[#F3F6F8] p-3.5 rounded-xl">
                      <p><span className="font-semibold text-gray-800">Size:</span> {product.sizes}</p>
                      <p><span className="font-semibold text-gray-800">Rating:</span> {product.pressureRating}</p>
                    </div>
                  </div>

                  {/* Buttons: Full width on mobile, min-h-[48px] */}
                  <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 border-t border-gray-100">
                    <Link
                      to={`/products/${product.id}`}
                      className="min-h-[48px] flex-1 px-4 py-2.5 rounded-xl sm:rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white text-xs font-bold transition-colors inline-flex items-center justify-center gap-1.5 active:scale-95 text-center"
                    >
                      <span>Explore Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      type="button"
                      onClick={onOpenQuote}
                      className="min-h-[48px] px-5 py-2.5 rounded-xl sm:rounded-full bg-gray-100 hover:bg-[#071B4A] hover:text-white text-gray-800 text-xs font-bold transition-colors text-center active:scale-95"
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

      {/* ----------------- 4. ABOUT PREVIEW ----------------- */}
      <section id="about-preview-section" className="py-14 sm:py-20 bg-[#F3F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-card overflow-hidden border border-gray-200 soft-shadow p-2 bg-white">
                <img
                  src={FACTORY_IMAGE}
                  alt="Kevin PVC Manufacturing Facility"
                  className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover rounded-[18px]"
                />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#071B4A]/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 text-white border border-white/10 shadow-lg">
                  <div className="flex items-center gap-3">
                    <Factory className="w-5 h-5 sm:w-6 sm:h-6 text-[#08A9D6] shrink-0" />
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-sky-200">Factory Campus</p>
                      <p className="text-xs sm:text-xs text-white/90">Rajkot-Bhavnagar Highway, Untvad, Babra, Gujarat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block font-heading">
                About The Manufacturer
              </span>
              <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold text-[#071B4A] font-heading tracking-tight leading-tight">
                Two Decades of Manufacturing Integrity & Precision
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-normal">
                Founded with a resolute vision to eradicate pipe failures in critical agriculture and infrastructure sectors, <strong>KEVIN PVC PIPE INDUSTRIES</strong> operates a state-of-the-art extrusion and jointing plant in Amreli, Gujarat.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-normal">
                We combine German-engineered twin-screw extrusion technology with computerized online wall thickness monitoring, delivering zero-oval distortion and flawless hydraulic balance across all batches.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-[#08A9D6] mb-1.5" />
                  <p className="text-sm font-bold text-[#071B4A] font-heading">BIS Mark Compliant</p>
                  <p className="text-xs text-gray-500 mt-0.5">IS 4985, IS 12818, IS 4984</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-[#08A9D6] mb-1.5" />
                  <p className="text-sm font-bold text-[#071B4A] font-heading">500+ Dealer Outlets</p>
                  <p className="text-xs text-gray-500 mt-0.5">Across Western & Central India</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#071B4A] hover:bg-[#0d2766] text-white text-sm font-bold tracking-wide transition-all group active:scale-95"
                >
                  <span>Read Full Company Profile</span>
                  <ArrowRight className="w-4 h-4 text-[#08A9D6] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 5. OUR CLIENTS PREVIEW ----------------- */}
      <section id="clients-preview-section" className="py-14 sm:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block mb-2 font-heading">
              Trusted By Government & Enterprise
            </span>
            <h2 className="text-[24px] sm:text-2xl lg:text-3xl font-extrabold text-[#071B4A] font-heading">
              Our Approved Clients & Certifying Bodies
            </h2>
          </div>

          {/* Responsive Grid: 2 on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="bg-[#F3F6F8] rounded-card p-5 sm:p-6 text-center border border-gray-100 soft-shadow hover:bg-white hover:border-sky-200 transition-all flex flex-col items-center justify-center"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#071B4A] text-[#08A9D6] flex items-center justify-center mb-3 font-extrabold text-sm tracking-wider font-heading">
                  {client.name}
                </div>
                <h3 className="text-sm font-bold text-[#071B4A] font-heading">{client.name}</h3>
                <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">{client.fullTitle}</p>
                <span className="mt-2.5 inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-sky-100 text-[#071B4A]">
                  {client.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 6. QUALITY PREVIEW ----------------- */}
      <section id="quality-preview-section" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block font-heading">
                Testing & Certification
              </span>
              <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold text-[#071B4A] font-heading tracking-tight leading-tight">
                Zero Compromise On Raw Material & Burst Pressure
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-normal">
                Our in-house NABL-calibrated testing laboratory performs rigorous quality audits on each production lot. From raw resin bulk density and K-value verification to long-term hydrostatic endurance testing at 60°C.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-100 text-[#08A9D6] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#071B4A]">Short-Term Hydrostatic Test</h4>
                    <p className="text-xs sm:text-sm text-gray-500">Pipes subjected to 3x nominal working pressure without bursting or leakage.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-100 text-[#08A9D6] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#071B4A]">Longitudinal Heat Reversion</h4>
                    <p className="text-xs sm:text-sm text-gray-500">Maintains structural symmetry and strict dimensional adherence under thermal shifts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-100 text-[#08A9D6] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#071B4A]">Methylene Chloride Chemical Immersion</h4>
                    <p className="text-xs sm:text-sm text-gray-500">Ensures 100% molecular gelation and polymer cross-linking.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Full width on mobile */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  to="/about"
                  className="min-h-[48px] px-6 py-3.5 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white text-sm font-bold tracking-wide transition-colors text-center flex items-center justify-center active:scale-95"
                >
                  View Quality Certifications
                </Link>
                {onOpenCatalogue && (
                  <button
                    type="button"
                    onClick={onOpenCatalogue}
                    className="min-h-[48px] inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full border border-gray-200 text-xs font-bold text-[#071B4A] hover:text-[#08A9D6] hover:border-[#08A9D6] transition-colors"
                  >
                    <Download className="w-4 h-4 text-[#08A9D6]" />
                    <span>Download Brochure</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-card overflow-hidden border border-gray-200 soft-shadow p-2 bg-[#F3F6F8]">
                <img
                  src={LAB_IMAGE}
                  alt="Precision Hydrostatic Testing Laboratory"
                  className="w-full h-[260px] sm:h-[360px] lg:h-[400px] object-cover rounded-[18px]"
                />
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#071B4A]/90 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-white text-xs font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#08A9D6]" />
                  <span>ISO 9001:2008 Standard</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 7. CALL TO ACTION ----------------- */}
      <section id="cta-section" className="py-14 sm:py-16 bg-[#071B4A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5 sm:space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block font-heading">
            Direct Plant Quotation
          </span>
          <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold text-white font-heading max-w-2xl mx-auto leading-tight">
            Ready to Source Certified Pipes for Your Next Project?
          </h2>
          <p className="text-sky-100/80 text-base max-w-xl mx-auto leading-relaxed font-normal">
            Contact our engineering sales desk for factory-direct dispatch schedules, bulk dealer pricing, and technical project consultation.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <button
              id="cta-request-quote-btn"
              type="button"
              onClick={onOpenQuote}
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white text-sm font-bold tracking-wide shadow-lg shadow-sky-500/25 transition-all active:scale-95 flex items-center justify-center"
            >
              Request Custom Quote
            </button>
            <Link
              id="cta-contact-btn"
              to="/contact"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold tracking-wide border border-white/20 transition-all active:scale-95 flex items-center justify-center"
            >
              Contact Sales Office
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
