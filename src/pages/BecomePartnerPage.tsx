import React from "react";
import {
  Store,
  Truck,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Clock,
  Building,
  Award,
  ArrowRight,
  FileCheck2,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSftBEjBn9GwCTWa6iYMVRB3JUz_vbqIF72OPK0JIpVHA7bZww/viewform?usp=dialog";
const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSftBEjBn9GwCTWa6iYMVRB3JUz_vbqIF72OPK0JIpVHA7bZww/viewform?embedded=true";

export const BecomePartnerPage: React.FC = () => {
  const scrollToApply = () => {
    const applySection = document.getElementById("apply-now-section");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="become-partner-page-container"
      className="w-full bg-white text-[#111827]"
    >
      <Helmet>
        <title>Become a Dealer & Distributor | Kevin PVC Pipe Industries</title>

        <meta
          name="description"
          content="Partner with Kevin PVC Pipe Industries as a dealer or distributor. Expand your business with high-quality uPVC and HDPE pipe products."
        />

        <meta
          property="og:title"
          content="Become a Dealer & Distributor | Kevin PVC Pipe Industries"
        />

        <meta
          property="og:description"
          content="Join our growing dealer and distributor network across India."
        />

        <link rel="canonical" href="https://kevinpipes.com/become-partner" />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section
        className="text-white py-14 sm:py-16 lg:py-24 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('bg2.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#071B4A]/85" />

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#08A9D6_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#08A9D6] text-xs font-bold uppercase tracking-wider mb-4 border border-white/10 font-heading">
            <Building className="w-3.5 h-3.5" />
            <span>Commercial Channel Expansion</span>
          </div>

          <h1 className="text-[32px] sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white leading-tight">
            Become Our Business Partner
          </h1>

          <p className="mt-4 text-base sm:text-lg text-sky-100/90 max-w-2xl mx-auto font-light leading-relaxed">
            Join Kevin PVC Pipe Industries as a Dealer or Distributor and grow
            with a trusted PVC pipe manufacturer.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
            <button
              type="button"
              onClick={scrollToApply}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-sky-900/30 active:scale-95 text-center"
            >
              <span>Apply Online Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-wide transition-all border border-white/20 text-center"
            >
              <span>Open Google Form</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. PARTNER OPTIONS: TWO PREMIUM CARDS */}
      <section className="py-14 sm:py-20 bg-[#F3F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block mb-2 font-heading">
              Partnership Opportunities
            </span>
            <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold text-[#071B4A] font-heading">
              Choose Your Partnership Track
            </h2>
            <p className="text-gray-600 mt-2 text-base font-normal leading-relaxed">
              Both dealer and distributor applications are processed quickly
              through our central application portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Card 1: Become Dealer */}
            <div
              id="card-become-dealer"
              className="bg-white rounded-card p-6 sm:p-10 border border-gray-200/80 soft-shadow flex flex-col justify-between hover:border-[#08A9D6] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#08A9D6] flex items-center justify-center">
                    <Store className="w-7 h-7 stroke-[2.2]" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#071B4A] text-white">
                    Retail & Counter
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#071B4A] font-heading mb-3">
                  Become Dealer
                </h3>
                <p className="text-base text-gray-600 mb-6 leading-relaxed font-normal">
                  Join as an authorized Kevin PVC Pipe dealer to supply premium
                  plumbing, agriculture, and casing pipes directly to local
                  contractors, farmers, and residential customers.
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-[#071B4A] font-heading mb-4">
                  Dealer Program Highlights:
                </h4>

                <ul className="space-y-3 mb-8 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#08A9D6] shrink-0 mt-1" />
                    <span>
                      <strong>High Profit Margins:</strong> Competitive retail
                      margins with periodic performance incentives.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#08A9D6] shrink-0 mt-1" />
                    <span>
                      <strong>Marketing & Display:</strong> Free dealer shop
                      boards, catalogue samples, and brand collaterals.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#08A9D6] shrink-0 mt-1" />
                    <span>
                      <strong>Prompt Local Supply:</strong> Fast turnarounds for
                      retail orders with low minimum commitments.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#08A9D6] shrink-0 mt-1" />
                    <span>
                      <strong>Direct Factory Assurance:</strong> Certified ISI
                      quality standard backing every single pipe.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
                <button
                  id="dealer-apply-btn"
                  type="button"
                  onClick={scrollToApply}
                  className="w-full min-h-[48px] py-3.5 rounded-full bg-[#071B4A] hover:bg-[#0d2766] text-white font-bold text-sm sm:text-base tracking-wide transition-colors active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  <span>Apply for Dealership</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-xs font-semibold text-[#08A9D6] hover:underline flex items-center justify-center gap-1 py-1 min-h-[36px]"
                >
                  <span>Open direct Google Form</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card 2: Become Distributor */}
            <div
              id="card-become-distributor"
              className="bg-white rounded-card p-6 sm:p-10 border border-gray-200/80 soft-shadow flex flex-col justify-between hover:border-[#08A9D6] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#08A9D6] flex items-center justify-center">
                    <Truck className="w-7 h-7 stroke-[2.2]" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#08A9D6] text-white">
                    Regional & Wholesale
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#071B4A] font-heading mb-3">
                  Become Distributor
                </h3>
                <p className="text-base text-gray-600 mb-6 leading-relaxed font-normal">
                  Become an authorized Kevin distributor for your regional
                  territory or district. Scale with bulk factory pricing,
                  stockholding advantages, and complete commercial backing.
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-[#071B4A] font-heading mb-4">
                  Distributor Program Highlights:
                </h4>

                <ul className="space-y-3 mb-8 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#08A9D6] shrink-0 mt-1" />
                    <span>
                      <strong>Territory Exclusivity:</strong> Clearly defined
                      geographic distribution territories with zero overlap.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#08A9D6] shrink-0 mt-1" />
                    <span>
                      <strong>Bulk Factory Pricing:</strong> Tier-one volume
                      pricing with quarterly and annual turnover rebates.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#08A9D6] shrink-0 mt-1" />
                    <span>
                      <strong>Priority Factory Dispatch:</strong> Dedicated
                      logistics fleet coordination for container & truck loads.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#08A9D6] shrink-0 mt-1" />
                    <span>
                      <strong>Executive Account Manager:</strong> Dedicated
                      point of contact for ordering, accounts, and tender
                      supply.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
                <button
                  id="distributor-apply-btn"
                  type="button"
                  onClick={scrollToApply}
                  className="w-full min-h-[48px] py-3.5 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white font-bold text-sm sm:text-base tracking-wide transition-colors active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  <span>Apply for Distributorship</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-xs font-semibold text-[#08A9D6] hover:underline flex items-center justify-center gap-1 py-1 min-h-[36px]"
                >
                  <span>Open direct Google Form</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick trust reassurance strip */}
          <div className="mt-10 sm:mt-14 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 text-center">
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white border border-gray-200/70">
              <ShieldCheck className="w-5 h-5 text-[#08A9D6]" />
              <span className="text-xs sm:text-sm font-bold text-[#071B4A]">
                Official Manufacturer Partner
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white border border-gray-200/70">
              <Clock className="w-5 h-5 text-[#08A9D6]" />
              <span className="text-xs sm:text-sm font-bold text-[#071B4A]">
                Response in 24-48 Hours
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white border border-gray-200/70">
              <Award className="w-5 h-5 text-[#08A9D6]" />
              <span className="text-xs sm:text-sm font-bold text-[#071B4A]">
                100% Certified ISI Quality
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPLICATION SECTION (OFFICIAL GOOGLE FORM ONLY) */}
      <section id="apply-now-section" className="py-14 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#08A9D6] text-xs font-bold uppercase tracking-wider mb-3 border border-sky-100 font-heading">
              <FileCheck2 className="w-4 h-4" />
              <span>Official Application Gateway</span>
            </div>
            <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold text-[#071B4A] font-heading">
              Apply Now
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed font-normal">
              We handle all dealership and distributorship onboarding through
              our official verified Google Form application. Submit your
              business credentials below or launch the form in a new tab.
            </p>
          </div>

          {/* Prominent CTA Action Box */}
          <div className="bg-[#071B4A] text-white rounded-card p-6 sm:p-8 mb-6 sm:mb-8 text-center relative overflow-hidden soft-shadow">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#08A9D6]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2">
                Official Kevin Partner Application Form
              </h3>
              <p className="text-sm text-sky-100/80 mb-5 max-w-xl font-normal leading-relaxed">
                Click below to open the complete multi-page partner onboarding
                form in a dedicated window for an optimal submission experience
                on any device.
              </p>
              <a
                id="open-google-form-external-btn"
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-sky-950/40 transition-all hover:scale-105 active:scale-95 text-center"
              >
                <span>Open Google Form Application</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <span className="text-xs text-sky-200/70 mt-3 font-normal">
                Securely hosted by Google Forms • Direct submission to Kevin PVC
                Pipe Industries
              </span>
            </div>
          </div>

          {/* Responsive Embedded Iframe Container */}
          <div className="bg-white rounded-card border border-gray-200 soft-shadow overflow-hidden">
            <div className="bg-[#F3F6F8] px-4 sm:px-6 py-3.5 sm:py-4 border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                <span className="text-xs font-bold text-[#071B4A] uppercase tracking-wider">
                  Embedded Application Portal
                </span>
              </div>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#08A9D6] hover:underline"
              >
                <span>Open in full tab if form doesn't load</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full relative min-h-[550px] sm:min-h-[750px] bg-white overflow-y-auto">
              <iframe
                id="google-form-iframe"
                src={GOOGLE_FORM_EMBED_URL}
                title="Kevin PVC Pipe Industries Partner Application Form"
                width="100%"
                height="850"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full border-0 block"
              >
                Loading Google Form...
              </iframe>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-500 font-normal">
              Having trouble viewing or submitting? You can also{" "}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#08A9D6] font-bold hover:underline"
              >
                click here to open the application directly in Google Forms
              </a>
              .
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
