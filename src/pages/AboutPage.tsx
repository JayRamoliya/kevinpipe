import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Factory,
  Users,
  Building2,
  FileCheck2,
  Compass,
  Layers,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import {
  FACTORY_IMAGE,
  OWNER_IMAGE,
  LAB_IMAGE,
  CLIENT_LOGOS,
  CERTIFICATIONS,
} from "../data/products";

export const AboutPage: React.FC = () => {
  return (
    <div id="about-page-container" className="w-full bg-white text-[#111827]">
      {/* 1. PAGE HEADER / BANNER */}
      <section className="bg-[#071B4A] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#08A9D6_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#08A9D6] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10 font-heading">
            <span>About Our Company</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white">
            Trusted PVC, uPVC & HDPE Pipe Manufacturer
          </h1>

          <p className="mt-4 text-base sm:text-lg text-sky-100/80 max-w-3xl mx-auto font-light leading-relaxed">
            KEVIN PVC PIPE is a leading manufacturer of high-quality PVC, uPVC
            and HDPE pipes. With a strong commitment to quality, innovation and
            customer satisfaction, we deliver reliable piping solutions for
            agriculture, water supply, borewell and industrial applications
            across India.
          </p>
        </div>
      </section>

      {/* 2. ABOUT COMPANY (TWO-COLUMN LAYOUT, STACKED ON MOBILE) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-2">
              <div className="relative rounded-card overflow-hidden border border-gray-100 soft-shadow p-2 bg-[#F3F6F8]">
                <img
                  src="about.jpg"
                  alt="KEVIN PVC PIPE Manufacturing Facility"
                  className="w-full h-[260px] sm:h-[360px] lg:h-[400px] object-cover rounded-[18px]"
                />

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#071B4A]/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl text-white border border-white/10">
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#08A9D6]">
                    Quality Manufacturing
                  </p>

                  <p className="text-xs sm:text-xs text-white/90">
                    Premium PVC, uPVC & HDPE Pipe Production
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 sm:space-y-6 order-1 lg:order-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block font-heading">
                Our Company
              </span>

              <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold text-[#071B4A] font-heading tracking-tight leading-tight">
                Committed to Quality, Built for Performance
              </h2>

              <p className="text-base text-gray-700 leading-relaxed font-normal">
                <strong>KEVIN PVC PIPE</strong> is a trusted manufacturer of
                PVC, uPVC and HDPE pipes, dedicated to providing reliable piping
                solutions for agriculture, water supply, borewell and industrial
                applications. Our products are designed to deliver durability,
                strength and long-term performance.
              </p>

              <p className="text-base text-gray-700 leading-relaxed font-normal">
                As an ISO 9001:2008 certified company, we use high-quality raw
                materials and modern manufacturing processes to ensure
                consistent quality across our entire product range. Our
                commitment to excellence helps us build long-term relationships
                with customers across India.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F3F6F8] border border-gray-100">
                  <h4 className="text-sm font-bold text-[#071B4A] font-heading mb-1 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#08A9D6]" />
                    <span>Our Mission</span>
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    To deliver high-quality piping solutions that provide
                    dependable performance, customer satisfaction and
                    long-lasting value.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#F3F6F8] border border-gray-100">
                  <h4 className="text-sm font-bold text-[#071B4A] font-heading mb-1 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#08A9D6]" />
                    <span>Our Products</span>
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    uPVC Plain Socket & Ringfit Pipes, uPVC Column Pipes, uPVC
                    Casing Pipes, HDPE Pipes and HDPE Sprinkler Pipes for
                    diverse applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OWNER / LEADERSHIP SECTION */}
      <section className="py-14 sm:py-20 bg-[#F3F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block mb-2 font-heading">
              Leadership & Vision
            </span>

            <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold text-[#071B4A] font-heading leading-tight">
              Leadership That Drives Quality & Trust
            </h2>
          </div>

          <div className="bg-white rounded-card border border-gray-100 soft-shadow p-6 sm:p-10 lg:p-12 w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="md:col-span-4 text-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-2xl overflow-hidden border-4 border-sky-100 shadow-md">
                  <img
                    src={OWNER_IMAGE}
                    alt="Kishorbhai Hadiya - Founder & Managing Director"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-3.5">
                  <h3 className="text-lg font-bold text-[#071B4A] font-heading">
                    Kishorbhai Hadiya
                  </h3>

                  <p className="text-xs font-semibold text-[#08A9D6] uppercase tracking-wider">
                    Founder & Managing Director
                  </p>
                </div>
              </div>

              <div className="md:col-span-8 space-y-4 border-t md:border-t-0 md:border-l border-gray-100 md:pl-8 pt-6 md:pt-0">
                <span className="text-3xl text-[#08A9D6] font-serif leading-none">
                  “
                </span>

                <p className="text-base text-gray-700 italic leading-relaxed font-normal">
                  At KEVIN PVC PIPE, our commitment has always been to deliver
                  dependable quality, lasting performance and complete customer
                  satisfaction. Every product we manufacture reflects our
                  dedication to excellence, innovation and building long-term
                  trust with our customers and business partners.
                </p>

                <div className="pt-2 text-xs sm:text-sm text-gray-600 space-y-1">
                  <p>
                    <strong>Leadership Focus:</strong> Quality Manufacturing,
                    Customer Satisfaction & Sustainable Growth
                  </p>

                  <p>
                    <strong>Core Values:</strong> Integrity, Reliability,
                    Innovation and Long-Term Relationships
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="min-h-[44px] inline-flex items-center gap-2 text-sm font-bold text-[#08A9D6] hover:text-[#071B4A] transition-colors"
                  >
                    <span>Connect With Our Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CERTIFICATION SECTION */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block mb-2 font-heading">
              Certified Quality Benchmark
            </span>
            <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold text-[#071B4A] font-heading leading-tight">
              National & International Certifications
            </h2>
            <p className="text-gray-600 mt-2 text-base leading-relaxed font-normal">
              Every production batch adheres strictly to the rigorous test
              protocols defined by the Bureau of Indian Standards (BIS) and ISO
              regulatory frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.code}
                className="bg-[#F3F6F8] rounded-card p-6 border border-gray-100 soft-shadow hover:bg-white hover:border-sky-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#08A9D6] flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#071B4A] text-white mb-2">
                    {cert.code}
                  </span>
                  <h3 className="text-base font-bold text-[#071B4A] font-heading mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {cert.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-200 flex items-center gap-1.5 text-xs text-[#08A9D6] font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Audited & Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR CLIENTS SECTION */}
      <section className="py-14 sm:py-20 bg-[#F3F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block mb-2 font-heading">
              Public Infrastructure Trust
            </span>
            <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold text-[#071B4A] font-heading leading-tight">
              Our Esteemed Institutional Clients
            </h2>
            <p className="text-gray-600 mt-2 text-base leading-relaxed font-normal">
              Major government bodies and public water authorities rely on Kevin
              PVC Pipes for regional pipeline projects, rural tap-water schemes,
              and irrigation networks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* WASMO */}
            <div className="bg-white rounded-card p-6 sm:p-8 border border-gray-100 soft-shadow text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-[#071B4A] text-[#08A9D6] flex items-center justify-center mb-4 font-black text-lg tracking-wider font-heading">
                WASMO
              </div>
              <h3 className="text-lg font-bold text-[#071B4A] font-heading">
                WASMO
              </h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">
                Water and Sanitation Management Organisation
              </p>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed font-normal">
                Registered and approved vendor supplying high-durability uPVC
                potable water distribution networks across rural villages under
                statewide community water supply programs.
              </p>
              <span className="mt-4 px-3 py-1 rounded-full text-[11px] font-bold bg-sky-50 text-[#08A9D6] border border-sky-100">
                Approved Supply Partner
              </span>
            </div>

            {/* GWSSB */}
            <div className="bg-white rounded-card p-6 sm:p-8 border border-gray-100 soft-shadow text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-[#071B4A] text-[#08A9D6] flex items-center justify-center mb-4 font-black text-lg tracking-wider font-heading">
                GWSSB
              </div>
              <h3 className="text-lg font-bold text-[#071B4A] font-heading">
                GWSSB
              </h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">
                Gujarat Water Supply and Sewerage Board
              </p>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed font-normal">
                Empaneled contractor vendor providing heavy-duty pressure pipes
                and HDPE lines for large-scale municipal pipelines, bulk
                transmission mains, and urban drainage networks.
              </p>
              <span className="mt-4 px-3 py-1 rounded-full text-[11px] font-bold bg-sky-50 text-[#08A9D6] border border-sky-100">
                State Board Qualified Vendor
              </span>
            </div>

            {/* GIRDA */}
            <div className="bg-white rounded-card p-6 sm:p-8 border border-gray-100 soft-shadow text-center flex flex-col items-center sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 rounded-2xl bg-[#071B4A] text-[#08A9D6] flex items-center justify-center mb-4 font-black text-lg tracking-wider font-heading">
                GIRDA
              </div>
              <h3 className="text-lg font-bold text-[#071B4A] font-heading">
                GIRDA
              </h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">
                Gujarat Industrial Research & Development Agency
              </p>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed font-normal">
                Regularly audited and endorsed by GIRDA scientific labs for
                hydrostatic resilience, mechanical elongation, impact test
                compliance, and polymer chemical purity.
              </p>
              <span className="mt-4 px-3 py-1 rounded-full text-[11px] font-bold bg-sky-50 text-[#08A9D6] border border-sky-100">
                Certified Testing Inspection
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. APPROVED COMPANY BY SECTION */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block mb-2 font-heading">
              Official Approvals
            </span>
            <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold text-[#071B4A] font-heading leading-tight">
              Approved Company By
            </h2>
            <p className="text-gray-600 mt-2 text-base leading-relaxed font-normal">
              Kevin PVC Pipe Industries is officially recognized and registered
              by premier regulatory authorities and agricultural subsidy
              programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* WASMO Approval Card */}
            <div className="rounded-card border-2 border-sky-100 bg-[#F0F9FD] p-6 sm:p-8 soft-shadow relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#071B4A] text-white flex items-center justify-center mb-4">
                  <FileCheck2 className="w-6 h-6 text-[#08A9D6]" />
                </div>
                <h3 className="text-xl font-bold text-[#071B4A] font-heading">
                  WASMO Approved
                </h3>
                <p className="text-xs font-medium text-[#08A9D6] mt-1">
                  Water and Sanitation Management Organisation
                </p>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed font-normal">
                  Authorized for supply under Village Water Supply Schemes, Jal
                  Jeevan Mission, and Gujarat Rural Water Supply projects.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sky-200/50 flex items-center justify-between text-xs text-[#071B4A] font-bold">
                <span>Vendor Code Approved</span>
                <CheckCircle2 className="w-4 h-4 text-[#08A9D6]" />
              </div>
            </div>

            {/* GWSSB Approval Card */}
            <div className="rounded-card border-2 border-sky-100 bg-[#F0F9FD] p-6 sm:p-8 soft-shadow relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#071B4A] text-white flex items-center justify-center mb-4">
                  <FileCheck2 className="w-6 h-6 text-[#08A9D6]" />
                </div>
                <h3 className="text-xl font-bold text-[#071B4A] font-heading">
                  GWSSB Approved
                </h3>
                <p className="text-xs font-medium text-[#08A9D6] mt-1">
                  Gujarat Water Supply & Sewerage Board
                </p>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed font-normal">
                  Qualified and registered for heavy infrastructure pipelines,
                  lift irrigation works, and municipal bulk water conduits.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sky-200/50 flex items-center justify-between text-xs text-[#071B4A] font-bold">
                <span>Infrastructure Vendor</span>
                <CheckCircle2 className="w-4 h-4 text-[#08A9D6]" />
              </div>
            </div>

            {/* I-Khedut Approval Card */}
            <div className="rounded-card border-2 border-sky-100 bg-[#F0F9FD] p-6 sm:p-8 soft-shadow relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#071B4A] text-white flex items-center justify-center mb-4">
                  <FileCheck2 className="w-6 h-6 text-[#08A9D6]" />
                </div>
                <h3 className="text-xl font-bold text-[#071B4A] font-heading">
                  I-Khedut Approved
                </h3>
                <p className="text-xs font-medium text-[#08A9D6] mt-1">
                  Department of Agriculture, Govt. of Gujarat
                </p>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed font-normal">
                  Registered portal vendor for government farmer subsidies on
                  Sprinkler Piping Sets, HDPE irrigation, and deep-well column
                  pipes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sky-200/50 flex items-center justify-between text-xs text-[#071B4A] font-bold">
                <span>Farmer Subsidy Registered</span>
                <CheckCircle2 className="w-4 h-4 text-[#08A9D6]" />
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-14 text-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white text-base font-bold tracking-wide transition-all shadow-md active:scale-95"
            >
              <span>Connect with Our Technical & Liaison Office</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
