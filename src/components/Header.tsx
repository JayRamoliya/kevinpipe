import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall, Droplets, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const location = useLocation();

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", to: "/" },

    {
      label: "About Us",
      to: "/about",
      children: [{ label: "Clients", to: "/clients" }],
    },

    {
      label: "Products",
      to: "/products",
      children: [
        { label: "uPVC Casing Pipe", to: "/products/upvc-casing-pipe" },
        { label: "uPVC Ringfit Pipe", to: "/products/upvc-ringfit-pipe" },
        { label: "uPVC Agri Plain Socket Pipe", to: "/products/upvc-agri-plain-socket-pipe" },
        { label: "uPVC Column Pipe", to: "/products/upvc-column-pipe" },
        { label: "HDPE Pipe", to: "/products/hdpe-pipe" },
        { label: "HDPE Sprinkler Pipe", to: "/products/hdpe-sprinkler-pipe" },
      ],
    },
    { label: "Become Partner", to: "/become-partner" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header
      id="main-header"
      className="w-full bg-white border-b border-gray-100 sticky top-0 z-40 shadow-xs overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="flex items-center justify-between h-18 sm:h-20">
          <Link
            id="brand-logo-link"
            to="/"
            className="flex items-center shrink-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="/logo.png"
              alt="Kevin PVC Pipe Industries"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.to}
                    className="flex items-center gap-1 text-sm font-semibold text-[#111827] hover:text-[#08A9D6]"
                  >
                    {item.label}

                    <svg
                      className="w-4 h-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>

                  <div
                    className="
            absolute left-0 top-full
            min-w-[280px]
            bg-[#EAF5F6]
            border border-[#cfe4e7]
            shadow-xl
            opacity-0 invisible
            translate-y-2
            group-hover:opacity-100
            group-hover:visible
            group-hover:translate-y-0
            transition-all duration-200
            z-50
          "
                  >
                    {item.children.map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        className="
                block px-6 py-4
                border-b border-[#cfe4e7]
                hover:bg-white
                text-[#111827]
                transition-colors
              "
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="text-sm font-semibold text-[#111827] hover:text-[#08A9D6]"
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          {/* Right Action on Desktop & Tablet */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              id="header-phone-quicklink"
              href="tel:+919925373353"
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#071B4A] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#08A9D6]" />
              <span>+91 99253 73353</span>
            </a>
            {/* <button
              id="header-get-quote-btn"
              type="button"
              onClick={onOpenQuote}
              className="min-h-[44px] px-6 py-2.5 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white text-sm font-bold tracking-wide shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-[#08A9D6] focus:ring-offset-2 active:scale-95"
            >
              Get Quote
            </button> */}
          </div>

          {/* Mobile & Tablet (< lg) Header Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="header-get-quote-mobile-direct"
              type="button"
              onClick={onOpenQuote}
              className="min-h-[40px] px-3.5 py-1.5 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white text-xs font-bold shadow-xs active:scale-95 transition-all"
            >
              Get Quote
            </button>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] p-2 rounded-xl text-[#071B4A] hover:bg-gray-100 flex items-center justify-center focus:outline-none transition-colors"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen / Full-Width Slide-Down Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden fixed inset-x-0 top-[72px] sm:top-[80px] bottom-0 bg-white z-50 overflow-y-auto flex flex-col justify-between p-6 border-t border-gray-200 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] font-heading">
              Navigation Menu
            </p>
            <nav className="flex flex-col space-y-1.5">
              {navLinks.map((item) =>
                item.children ? (
                  <div key={item.label} className="border-b border-gray-100">
                    <div className="flex items-center">
                      {/* Parent Page Link */}
                      <Link
                        to={item.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex-1 min-h-[48px] flex items-center px-4 text-base font-semibold text-[#111827]"
                      >
                        {item.label}
                      </Link>

                      {/* Dropdown Toggle */}
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileMenu(
                            openMobileMenu === item.label ? null : item.label,
                          )
                        }
                        className="p-4"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            openMobileMenu === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>

                    {openMobileMenu === item.label && (
                      <div className="pl-4 pb-2">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-3 px-4 text-sm text-gray-600 hover:text-[#08A9D6]"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `min-h-[48px] flex items-center justify-between text-base font-semibold px-4 rounded-xl transition-colors ${
                        isActive
                          ? "bg-sky-50 text-[#08A9D6] font-bold border border-sky-100"
                          : "text-[#111827] hover:bg-gray-50"
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </NavLink>
                ),
              )}
            </nav>
          </div>

          {/* Bottom Drawer Actions: Phone & Full-width Get Quote */}
          <div className="pt-6 mt-6 border-t border-gray-100 space-y-3">
            <a
              href="tel:+919925373353"
              className="min-h-[48px] flex items-center justify-center gap-2 text-sm text-[#071B4A] font-bold bg-[#F3F6F8] rounded-xl px-4 py-3 hover:bg-sky-50 hover:text-[#08A9D6] transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#08A9D6]" />
              <span>Call: +91 99253 73353</span>
            </a>

            <button
              id="mobile-drawer-get-quote-btn"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white font-bold text-sm tracking-wide text-center shadow-md active:scale-95 transition-all"
            >
              Get Quote
            </button>

            <p className="text-[11px] text-center text-gray-500 font-medium pt-1">
              Untvad, Babra, Dist. Amreli, Gujarat - 365421
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
