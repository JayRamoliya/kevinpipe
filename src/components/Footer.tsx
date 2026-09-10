import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Droplets,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Products", to: "/products" },
    { label: "Become Partner", to: "/become-partner" },
    // { label: "Career", to: "/career" },
    { label: "Contact", to: "/contact" },
  ];

  const productLinks = [
    { label: "uPVC Pressure Pipe", to: "/products/upvc-pressure-pipe" },
    { label: "uPVC Column Pipe", to: "/products/upvc-column-pipe" },
    { label: "uPVC Casing Pipe", to: "/products/upvc-casing-pipe" },
    { label: "HDPE Pipe", to: "/products/hdpe-pipe" },
    { label: "HDPE Sprinkler Pipe", to: "/products/hdpe-sprinkler-pipe" },
  ];

  return (
    <footer
      id="main-footer"
      className="bg-[#071B4A] text-white border-t border-[#0b245e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4">
            <Link
              id="brand-logo-link"
              to="/"
              className="flex items-center shrink-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img
                src="/logo.png"
                alt="Kevin PVC Pipe Industries"
                className="h-10 sm:h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-sm font-medium text-white/90 leading-relaxed mb-3">
              “Reliable Water Flow. Built for Every Project.”
            </p>

            <p className="text-xs text-sky-100/70 leading-relaxed mb-6">
              Premier manufacturer of ISI-certified uPVC pressure pipes,
              deep-well column pipes, casing pipes, and HDPE sprinkler piping
              solutions delivering dependable water infrastructure across India.
            </p>

            {/* Social Connect Icons */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-200 block">
                Connect Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/people/Kevin-Pipes/61576287503107/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#08A9D6] text-white flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/kevin_pipes_/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#08A9D6] text-white flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/kevin-pipe-industries/home/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#08A9D6] text-white flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column (Col 5-6) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-sky-100/75 hover:text-[#08A9D6] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-[#08A9D6]" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column (Col 7-9) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 font-heading">
              Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((prod) => (
                <li key={prod.label}>
                  <Link
                    to={prod.to}
                    className="text-sm text-sky-100/75 hover:text-[#08A9D6] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-[#08A9D6]" />
                    <span>{prod.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column (Col 10-12) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 font-heading">
              Factory & Office
            </h4>

            <div className="space-y-3.5 text-sm text-sky-100/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#08A9D6] shrink-0 mt-1" />
                <address className="not-italic leading-relaxed text-xs">
                  At. Rajkot-Bhavnagar Highway,
                  <br />
                  Untvad, Tal. Babra,
                  <br />
                  Dist. Amreli, Gujarat, India.
                </address>
              </div>

              <div className="flex items-center gap-2.5 text-xs">
                <Phone className="w-4 h-4 text-[#08A9D6] shrink-0" />
                <a
                  href="tel:+919925373353"
                  className="hover:text-white font-medium transition-colors"
                >
                  +91 99253 73353
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-xs">
                <Mail className="w-4 h-4 text-[#08A9D6] shrink-0" />
                <a
                  href="mailto:info@kevinpvcpipe.com"
                  className="hover:text-white font-medium transition-colors"
                >
                  info@kevinpvcpipe.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-100/60">
          <p id="footer-copyright">
            © 2026 Kevin PVC Pipe Industries. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            <Link
              to="/about"
              className="hover:text-white transition-colors py-1"
            >
              Quality Policy
            </Link>
            <Link
              to="/contact"
              className="hover:text-white transition-colors py-1"
            >
              Plant Location
            </Link>
            <Link
              to="/become-partner"
              className="hover:text-white transition-colors py-1"
            >
              Dealer Network
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
