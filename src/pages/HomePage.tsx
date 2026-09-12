import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  Download,
} from "lucide-react";
import { PRODUCTS_DATA, CLIENT_LOGOS, CERTIFICATIONS } from "../data/products";
import { Helmet } from "react-helmet-async";

interface HomePageProps {
  onOpenQuote: () => void;
  onOpenCatalogue?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenQuote,
  onOpenCatalogue,
}) => {
  return (
    <div id="home-page-container" className="w-full bg-white text-[#111827]">
      <Helmet>
        <title>
          Kevin PVC Pipe Industries | uPVC, HDPE & Agricultural Pipe
          Manufacturer
        </title>

        <meta
          name="description"
          content="Kevin PVC Pipe Industries is a leading manufacturer of uPVC Ringfit Pipes, Column Pipes, Casing Pipes, HDPE Pipes and Sprinkler Pipes for water supply, irrigation and infrastructure projects across India."
        />

        <meta
          property="og:title"
          content="Kevin PVC Pipe Industries | uPVC & HDPE Pipe Manufacturer"
        />

        <meta
          property="og:description"
          content="Trusted manufacturer of uPVC and HDPE piping solutions for agriculture, water supply and infrastructure applications."
        />

        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://kevinpipes.com/" />
      </Helmet>
      <section
        id="hero-section"
        className="relative overflow-hidden bg-[#071B4A] text-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-28"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#08A9D6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="order-2 lg:order-1 lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8 },
                  },
                }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-sky-200 border border-white/10 text-xs font-semibold tracking-wide max-w-full truncate"
              >
                <ShieldCheck className="w-4 h-4 text-[#08A9D6] shrink-0" />
                <span className="truncate">
                  ISO 9001:2008 Certified PVC, uPVC & HDPE Pipe Manufacturer
                </span>
              </motion.div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.4,
                  delay: 0.3,
                }}
                className="text-[32px] sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.18] text-white font-heading"
              >
                Strong Pipes.
                <br className="hidden sm:inline" />
                <span className="text-[#08A9D6]">Trusted Water Solutions.</span>
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.4,
                  delay: 0.3,
                }}
                className="text-base sm:text-lg text-sky-100/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                KEVIN PVC PIPE manufactures premium-quality uPVC, PVC and HDPE
                pipes engineered for agriculture, borewell, plumbing and
                industrial applications. Built with superior raw materials for
                long-lasting performance and reliable water flow.
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.4,
                  delay: 0.9,
                }}
                className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full sm:w-auto"
              >
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
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1.2 },
                  },
                }}
                className="pt-6 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left"
              >
                <div className="p-2">
                  <p className="text-xl sm:text-2xl font-black text-white font-heading">
                    ISO
                  </p>
                  <p className="text-[11px] sm:text-xs text-sky-200/70 font-medium">
                    Certified Quality
                  </p>
                </div>

                <div className="p-2">
                  <p className="text-xl sm:text-2xl font-black text-white font-heading">
                    uPVC
                  </p>
                  <p className="text-[11px] sm:text-xs text-sky-200/70 font-medium">
                    Pressure Pipes
                  </p>
                </div>

                <div className="p-2">
                  <p className="text-xl sm:text-2xl font-black text-white font-heading">
                    HDPE
                  </p>
                  <p className="text-[11px] sm:text-xs text-sky-200/70 font-medium">
                    Irrigation Systems
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 lg:col-span-6 w-full">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 1.25,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative rounded-card overflow-hidden bg-white/5 border border-white/15 soft-shadow p-2"
                >
                  <motion.img
                    src="hero-1.jpg"
                    alt="KEVIN PVC Pipe Manufacturing"
                    loading="eager"
                    whileHover={{
                      scale: 1.04,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    className="w-full h-[260px] sm:h-[360px] lg:h-[440px] object-cover rounded-[18px]"
                  />
                </motion.div>
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
              Why Choose Us
            </span>

            <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold text-[#071B4A] font-heading tracking-tight leading-tight">
              Trusted Quality. Reliable Performance.
            </h2>

            <p className="text-gray-600 mt-3 text-base leading-relaxed font-normal">
              KEVIN PVC PIPE is committed to delivering premium quality uPVC,
              PVC and HDPE piping solutions. Our focus on quality manufacturing,
              durable raw materials and customer satisfaction makes us a trusted
              choice across agricultural, residential and industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <div className="bg-white rounded-card p-6 sm:p-7 border border-gray-100 soft-shadow transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#08A9D6] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
              </div>

              <h3 className="text-lg font-bold text-[#071B4A] mb-2 font-heading">
                Premium Raw Materials
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Manufactured using high-quality raw materials to ensure superior
                strength, durability and long service life in every application.
              </p>
            </div>

            <div className="bg-white rounded-card p-6 sm:p-7 border border-gray-100 soft-shadow transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#08A9D6] flex items-center justify-center mb-5">
                <Award className="w-6 h-6 stroke-[2.2]" />
              </div>

              <h3 className="text-lg font-bold text-[#071B4A] mb-2 font-heading">
                ISO Certified Manufacturing
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Our manufacturing processes follow ISO 9001:2008 quality
                standards, ensuring consistent product quality and reliability.
              </p>
            </div>

            <div className="bg-white rounded-card p-6 sm:p-7 border border-gray-100 soft-shadow transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#08A9D6] flex items-center justify-center mb-5">
                <Droplets className="w-6 h-6 stroke-[2.2]" />
              </div>

              <h3 className="text-lg font-bold text-[#071B4A] mb-2 font-heading">
                Leak-Proof Performance
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Engineered for smooth water flow and secure connections,
                reducing leakage risks and ensuring efficient performance.
              </p>
            </div>

            <div className="bg-white rounded-card p-6 sm:p-7 border border-gray-100 soft-shadow transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#08A9D6] flex items-center justify-center mb-5">
                <Factory className="w-6 h-6 stroke-[2.2]" />
              </div>

              <h3 className="text-lg font-bold text-[#071B4A] mb-2 font-heading">
                Wide Product Range
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                From uPVC Plain Socket & Ringfit Pipes to HDPE Pipes, Sprinkler
                Pipes, Column Pipes and Casing Pipes, we provide complete piping
                solutions.
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
                Our Products
              </span>

              <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold text-[#071B4A] font-heading tracking-tight">
                Complete Piping Solutions
              </h2>

              <p className="text-gray-600 mt-2 text-base max-w-2xl font-normal leading-relaxed">
                KEVIN PVC PIPE offers a wide range of high-quality uPVC and HDPE
                pipe solutions designed for agriculture, borewell, plumbing,
                water supply and industrial applications.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#08A9D6] hover:text-[#071B4A] transition-colors self-start md:self-auto min-h-[40px] py-1"
            >
              <span>View All Products</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PRODUCTS_DATA.map((product) => (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="bg-white rounded-card overflow-hidden border border-gray-100 soft-shadow flex flex-col group transition-all duration-300 hover:border-sky-200 hover:shadow-xl"
              >
                <div className="relative h-52 sm:h-60 overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-[#071B4A]/90 backdrop-blur-md text-white">
                      {product.standard}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#071B4A] group-hover:text-[#08A9D6] transition-colors font-heading mb-2">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4 font-normal">
                      {product.shortDesc}
                    </p>

                    {/* <div className="space-y-1.5 text-xs sm:text-sm text-gray-600 mb-6 bg-[#F3F6F8] p-3.5 rounded-xl">
                      <p>
                        <span className="font-semibold text-gray-800">
                          Size:
                        </span>{" "}
                        {product.sizes}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-800">
                          Rating:
                        </span>{" "}
                        {product.pressureRating}
                      </p>
                    </div> */}
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 border-t border-gray-100">
                    <Link
                      to={`/products/${product.id}`}
                      className="min-h-[48px] flex-1 px-4 py-2.5 rounded-xl sm:rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white text-xs font-bold transition-colors inline-flex items-center justify-center gap-1.5 active:scale-95 text-center"
                    >
                      <span>View Details</span>
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
      <section
        id="about-preview-section"
        className="py-14 sm:py-20 bg-[#F3F6F8]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative rounded-card overflow-hidden border border-gray-200 soft-shadow p-2 bg-white">
                <img
                  src="about.jpg"
                  alt="KEVIN PVC PIPE Manufacturing Facility"
                  className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover rounded-[18px]"
                />

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#071B4A]/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 text-white border border-white/10 shadow-lg">
                  <div className="flex items-center gap-3">
                    <Factory className="w-5 h-5 sm:w-6 sm:h-6 text-[#08A9D6] shrink-0" />

                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-sky-200">
                        Manufacturing Excellence
                      </p>

                      <p className="text-xs sm:text-xs text-white/90">
                        Premium uPVC, PVC & HDPE Pipe Production
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block font-heading">
                About Kevin PVC Pipe
              </span>

              <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold text-[#071B4A] font-heading tracking-tight leading-tight">
                Delivering Quality Piping Solutions You Can Trust
              </h2>

              <p className="text-base text-gray-700 leading-relaxed font-normal">
                <strong>KEVIN PVC PIPE</strong> is a well-known manufacturer of
                PVC, uPVC and HDPE pipes, committed to delivering durable and
                high-performance piping solutions for agricultural, residential,
                commercial and industrial applications.
              </p>

              <p className="text-base text-gray-700 leading-relaxed font-normal">
                As an ISO 9001:2008 certified company, we manufacture our
                products using premium-quality raw materials and modern
                production technology, ensuring reliability, strength and
                long-lasting performance in every pipe we produce.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-[#08A9D6] mb-1.5" />

                  <p className="text-sm font-bold text-[#071B4A] font-heading">
                    ISO 9001:2008 Certified
                  </p>

                  <p className="text-xs text-gray-500 mt-0.5">
                    Quality-Focused Manufacturing
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-[#08A9D6] mb-1.5" />

                  <p className="text-sm font-bold text-[#071B4A] font-heading">
                    Complete Pipe Range
                  </p>

                  <p className="text-xs text-gray-500 mt-0.5">
                    uPVC, HDPE, Column & Casing Pipes
                  </p>
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
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6]">
              Our Clients
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#071B4A]">
              Trusted By Leading Organizations
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Kevin PVC Pipe Industries proudly supplies high-quality piping
              solutions to government bodies, rural water supply projects and
              infrastructure organizations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["/logos/wasmo.png", "/logos/GWSSB.jpg", "/logos/girda.jpg"].map(
              (logo, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border border-gray-100 p-8 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt="Approval Logo"
                    className="h-24 object-contain"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-[#F3F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6]">
              Government Approvals
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#071B4A]">
              Approved & Registered Supplier
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["/logos/wasmo.png", "/logos/GWSSB.jpg", "/logos/ikhedut.jpg"].map(
              (logo, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border border-gray-100 p-8 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt="Approval Logo"
                    className="h-24 object-contain"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#071B4A] text-white rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-extrabold">13+</h3>
              <p className="mt-2 text-sky-100">Years of Excellence</p>
            </div>

            <div className="bg-[#071B4A] text-white rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-extrabold">500+</h3>
              <p className="mt-2 text-sky-100">Dealer Network</p>
            </div>

            <div className="bg-[#071B4A] text-white rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-extrabold">100+</h3>
              <p className="mt-2 text-sky-100">Government Projects</p>
            </div>

            <div className="bg-[#071B4A] text-white rounded-3xl p-8 text-center">
              <h3 className="text-4xl font-extrabold">1M+</h3>
              <p className="mt-2 text-sky-100">Meters Pipes Supplied</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#071B4A]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Trusted Across Gujarat
          </h2>

          <p className="mt-8 text-xl text-sky-100 leading-relaxed">
            "Kevin PVC Pipe Industries has consistently delivered quality
            products meeting government project standards and timelines."
          </p>

          <div className="mt-6 text-[#08A9D6] font-bold">
            Government Infrastructure Project Team
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
                Our in-house NABL-calibrated testing laboratory performs
                rigorous quality audits on each production lot. From raw resin
                bulk density and K-value verification to long-term hydrostatic
                endurance testing at 60°C.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-100 text-[#08A9D6] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#071B4A]">
                      Short-Term Hydrostatic Test
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Pipes subjected to 3x nominal working pressure without
                      bursting or leakage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-100 text-[#08A9D6] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#071B4A]">
                      Longitudinal Heat Reversion
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Maintains structural symmetry and strict dimensional
                      adherence under thermal shifts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-100 text-[#08A9D6] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#071B4A]">
                      Methylene Chloride Chemical Immersion
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Ensures 100% molecular gelation and polymer cross-linking.
                    </p>
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
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-card overflow-hidden border border-gray-200 soft-shadow p-2 bg-[#F3F6F8]">
                <img
                  src="/bg2.png"
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
      <section
        id="cta-section"
        className="py-14 sm:py-16 bg-[#071B4A] text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5 sm:space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block font-heading">
            Direct Plant Quotation
          </span>
          <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-extrabold text-white font-heading max-w-2xl mx-auto leading-tight">
            Ready to Source Certified Pipes for Your Next Project?
          </h2>
          <p className="text-sky-100/80 text-base max-w-xl mx-auto leading-relaxed font-normal">
            Contact our engineering sales desk for factory-direct dispatch
            schedules, bulk dealer pricing, and technical project consultation.
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
