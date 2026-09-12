import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, ShieldCheck, Users } from "lucide-react";
import { CLIENT_LOGOS } from "../data/products";
import { Helmet } from "react-helmet-async";


export const ClientsPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Our Clients | Kevin PVC Pipe Industries</title>

        <meta
          name="description"
          content="Explore the trusted clients and organizations associated with Kevin PVC Pipe Industries. Delivering reliable uPVC and HDPE pipe solutions across India."
        />

        <meta
          property="og:title"
          content="Our Clients | Kevin PVC Pipe Industries"
        />

        <meta
          property="og:description"
          content="Trusted by government, industrial and agricultural sectors for quality piping solutions."
        />

        <link rel="canonical" href="https://kevinpipes.com/clients" />
      </Helmet>
      {/* Hero */}
      <section className="bg-[#071B4A] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#08A9D6] text-xs font-bold uppercase tracking-[3px]">
            Trusted Partnerships
          </span>

          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold">
            Our Valued Clients
          </h1>

          <p className="max-w-3xl mx-auto mt-5 text-sky-100">
            Kevin PVC Pipe Industries proudly serves government departments,
            water authorities, agricultural projects and industrial clients
            across Gujarat and India.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#F3F6F8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl text-center border">
              <Building2 className="w-10 h-10 mx-auto text-[#08A9D6]" />
              <h3 className="text-3xl font-bold mt-4 text-[#071B4A]">100+</h3>
              <p className="text-gray-600 mt-2">
                Government & Institutional Projects
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center border">
              <Users className="w-10 h-10 mx-auto text-[#08A9D6]" />
              <h3 className="text-3xl font-bold mt-4 text-[#071B4A]">500+</h3>
              <p className="text-gray-600 mt-2">Dealer & Partner Network</p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center border">
              <ShieldCheck className="w-10 h-10 mx-auto text-[#08A9D6]" />
              <h3 className="text-3xl font-bold mt-4 text-[#071B4A]">20+</h3>
              <p className="text-gray-600 mt-2">Years of Industry Trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#08A9D6] text-xs font-bold uppercase tracking-[3px]">
              Client Network
            </span>

            <h2 className="mt-3 text-4xl font-extrabold text-[#071B4A]">
              Organizations That Trust Us
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 object-contain mb-4"
                />

                <h3 className="font-bold text-center text-[#071B4A]">
                  {client.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-20 bg-[#F3F6F8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 border">
              <h3 className="text-xl font-bold text-[#071B4A]">WASMO</h3>
              <p className="mt-4 text-gray-600">
                Approved supplier for rural drinking water infrastructure and
                community water supply projects.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border">
              <h3 className="text-xl font-bold text-[#071B4A]">GWSSB</h3>
              <p className="mt-4 text-gray-600">
                Trusted partner for municipal and regional water transmission
                pipeline projects.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border">
              <h3 className="text-xl font-bold text-[#071B4A]">I-Khedut</h3>
              <p className="mt-4 text-gray-600">
                Registered supplier supporting agricultural irrigation and
                subsidy-based farming projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#071B4A] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold">
            Become Our Next Success Partner
          </h2>

          <p className="mt-4 text-sky-100">
            Looking for reliable PVC, uPVC or HDPE pipe solutions for your
            project? Connect with our team today.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-[#08A9D6] text-white font-bold"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
