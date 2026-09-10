import React from "react";
import { ShieldCheck, HeartHandshake, Sparkles, ArrowRight } from "lucide-react";

export const CareerPage: React.FC = () => {
  return (
    <div className="w-full bg-white text-[#111827]">
      {/* Hero Section */}
      <section
        className="text-white py-16 lg:py-20 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('bg1.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#071B4A]/85" />

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#08A9D6_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#08A9D6] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            Join Our Team
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Build Your Career With Kevin PVC
          </h1>

          <p className="mt-4 text-base sm:text-lg text-sky-100/80 max-w-2xl mx-auto leading-relaxed">
            Work with one of Gujarat's growing PVC pipe manufacturers. We
            provide opportunities in production, quality control, maintenance,
            logistics, sales and administration.
          </p>
        </div>
      </section>

      {/* Career Form Section */}
      <section className="py-14 sm:py-20 bg-[#F3F6F8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block mb-2">
              Career Opportunities
            </span>

            <h2 className="text-[26px] sm:text-3xl font-extrabold text-[#071B4A]">
              Apply For A Position At Kevin PVC
            </h2>

            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
              Submit your application through our online form. Our HR team will
              review your profile and contact shortlisted candidates.
            </p>
          </div>

          {/* Application Card */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 sm:p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#071B4A] mb-4">
                Ready To Join Kevin PVC?
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                We are always looking for talented and dedicated professionals.
                Click the button below to fill out the career application form.
                Our HR department will review your application and get in touch
                if your profile matches our requirements.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScMi37Z1pcmo1nrh9Y3ll5GxlNXnnMWdb4SPMMYI93PBXtxKw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Why Join Us */}
          <div className="mt-14 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#071B4A]">
              Why Join Kevin PVC?
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We believe our employees are the foundation of our success. We
              offer a professional work environment, continuous learning, growth
              opportunities and long-term career stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <ShieldCheck className="w-8 h-8 text-[#08A9D6] mb-4" />

              <h4 className="text-lg font-bold text-[#071B4A]">
                Safe Workplace
              </h4>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Strong safety standards, structured processes and a secure
                working environment.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <Sparkles className="w-8 h-8 text-[#08A9D6] mb-4" />

              <h4 className="text-lg font-bold text-[#071B4A]">
                Skill Development
              </h4>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Hands-on training, technical learning and opportunities to
                improve your expertise.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <HeartHandshake className="w-8 h-8 text-[#08A9D6] mb-4" />

              <h4 className="text-lg font-bold text-[#071B4A]">
                Career Growth
              </h4>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Performance-based growth, leadership opportunities and long-term
                employment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;