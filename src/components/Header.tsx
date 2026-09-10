import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall, Droplets, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    { label: "About", to: "/about" },
    // { label: "Products", to: "/products" },
    // { label: "Become Partner", to: "/become-partner" },
    // { label: "Career", to: "/career" },
    // { label: "Contact", to: "/contact" },
  ];

  return (
    <header
      id="main-header"
      className="w-full bg-white border-b border-gray-100 sticky top-0 z-40 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="h-10 sm:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop & Large Tablet Navigation (Compact spacing on lg, relaxed on xl) */}
          <nav
            id="desktop-navigation"
            className="hidden lg:flex items-center space-x-5 xl:space-x-7"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors py-1.5 relative ${
                    isActive
                      ? "text-[#08A9D6] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#08A9D6] after:rounded-full"
                      : "text-[#111827] hover:text-[#08A9D6]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
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
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `min-h-[48px] flex items-center justify-between text-base font-semibold px-4 rounded-xl transition-colors ${
                      isActive
                        ? "bg-sky-50 text-[#08A9D6] font-bold border border-sky-100"
                        : "text-[#111827] hover:bg-gray-50 active:bg-gray-100"
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </NavLink>
              ))}
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
