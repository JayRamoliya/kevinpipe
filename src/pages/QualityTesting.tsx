import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  CheckCircle2,
  FlaskConical,
  Gauge,
  Microscope,
  Factory,
  ArrowRight,
} from "lucide-react";

export const QualityTesting: React.FC = () => {
  const testingPoints = [
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Hydrostatic Pressure Test",
      desc: "Ensures pipes withstand required internal pressure levels.",
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Raw Material Testing",
      desc: "Verification of resin quality and composition before production.",
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Dimensional Accuracy",
      desc: "Checks wall thickness, diameter and manufacturing tolerance.",
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Impact Resistance",
      desc: "Evaluates product strength under external force conditions.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Leakage Testing",
      desc: "Ensures zero leakage and dependable field performance.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Quality Verification",
      desc: "Final inspection before dispatch and customer delivery.",
    },
  ];

  return (
    <div className="w-full bg-white text-[#111827]">

      {/* HERO */}
      <section
        className="relative overflow-hidden text-white py-16 lg:py-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('bg1.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#071B4A]/85" />

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#08A9D6_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#08A9D6] text-xs font-bold uppercase tracking-wider border border-white/10 mb-4">
            Quality Assurance
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold">
            Advanced Quality Testing Laboratory
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-sky-100/80 text-lg leading-relaxed">
            Every pipe manufactured undergoes rigorous testing procedures
            to ensure unmatched quality, strength, durability and long-term
            performance.
          </p>
        </div>
      </section>

      {/* ABOUT TESTING */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-gray-100 p-2 bg-[#F3F6F8]">
                <img
                  src="quality-lab.webp"
                  alt="Quality Testing Lab"
                  className="w-full h-[420px] object-contain rounded-[20px]"
                />

                <div className="absolute bottom-6 left-6 right-6 bg-[#071B4A]/90 rounded-2xl p-4 text-white">
                  <p className="text-[#08A9D6] text-xs uppercase font-bold tracking-wider">
                    Testing Excellence
                  </p>

                  <p className="text-sm mt-1">
                    Advanced Laboratory & Inspection Facility
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-[#08A9D6] text-xs uppercase font-bold tracking-widest">
                Quality Control
              </span>

              <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-[#071B4A]">
                Quality Tested. Performance Proven.
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Our quality control laboratory continuously monitors raw
                materials, manufacturing processes and finished products.
                Every batch is subjected to comprehensive testing before
                approval and dispatch.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                With advanced testing equipment and experienced quality
                professionals, we ensure compliance with BIS, ISO and
                internal quality standards.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                <div className="bg-[#F3F6F8] rounded-2xl p-5">
                  <h4 className="font-bold text-[#071B4A]">
                    Our Mission
                  </h4>

                  <p className="text-sm text-gray-600 mt-2">
                    Deliver reliable piping solutions through strict quality
                    assurance systems.
                  </p>
                </div>

                <div className="bg-[#F3F6F8] rounded-2xl p-5">
                  <h4 className="font-bold text-[#071B4A]">
                    Our Standard
                  </h4>

                  <p className="text-sm text-gray-600 mt-2">
                    Consistent testing, inspection and certification for
                    every production batch.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* TESTING FACILITIES */}
      <section className="py-16 lg:py-20 bg-[#F3F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <span className="text-[#08A9D6] text-xs uppercase font-bold tracking-widest">
              Testing Facilities
            </span>

            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-[#071B4A]">
              Comprehensive Testing Procedures
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {testingPoints.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 border border-gray-100 soft-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#08A9D6] flex items-center justify-center mb-4">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-[#071B4A] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-14">
            <span className="text-[#08A9D6] text-xs uppercase font-bold tracking-widest">
              Testing Process
            </span>

            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-[#071B4A]">
              Our Quality Workflow
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">

            {[
              "Raw Material Inspection",
              "Production Monitoring",
              "Laboratory Testing",
              "Quality Verification",
              "Dispatch Approval",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-[#F3F6F8] rounded-2xl p-5 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#08A9D6] text-white font-bold flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>

                <p className="font-semibold text-[#071B4A] text-sm">
                  {step}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#071B4A] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">

          <h2 className="text-4xl lg:text-5xl font-extrabold">
            Quality You Can Trust
          </h2>

          <p className="mt-5 text-sky-100/80 text-lg">
            Every product is thoroughly tested before reaching our customers.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white font-bold mt-8"
          >
            Contact Our Team
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>
      </section>

    </div>
  );
};