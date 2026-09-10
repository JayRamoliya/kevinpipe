import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  Globe, 
  ShieldCheck,
  Factory
} from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 750);
  };

  return (
    <div id="contact-page-container" className="w-full bg-white text-[#111827]">
      
      {/* 1. HERO BANNER */}
      <section className="bg-[#071B4A] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#08A9D6_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#08A9D6] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10 font-heading">
            <span>Direct Commercial Liaison</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white">
            Contact Kevin PVC Pipe Industries
          </h1>
          <p className="mt-4 text-base sm:text-lg text-sky-100/80 max-w-2xl mx-auto font-light leading-relaxed">
            Get in touch with our technical sales division, factory dispatch team, or dealer management desk for prompt service.
          </p>
        </div>
      </section>

      {/* 2. CONTACT LAYOUT (GRID: DETAILS & FORM) */}
      <section className="py-14 sm:py-20 bg-[#F3F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-card p-6 sm:p-8 border border-gray-100 soft-shadow space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block mb-1 font-heading">
                    Plant & Corporate Office
                  </span>
                  <h2 className="text-2xl font-bold text-[#071B4A] font-heading">
                    Contact Information
                  </h2>
                </div>

                <div className="space-y-5 sm:space-y-6 text-sm">
                  
                  {/* Address */}
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-sky-50 text-[#08A9D6] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#071B4A] font-heading text-sm sm:text-base">Factory & Headquarters</h3>
                      <address className="not-italic text-gray-600 mt-1 leading-relaxed text-xs sm:text-sm font-normal">
                        KEVIN PVC PIPE INDUSTRIES<br />
                        At. Rajkot-Bhavnagar Highway,<br />
                        Untvad, Gujarat - 365421, India.
                      </address>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-sky-50 text-[#08A9D6] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#071B4A] font-heading text-sm sm:text-base">Direct Phone & WhatsApp</h3>
                      <p className="mt-1">
                        <a 
                          href="tel:+919925373353" 
                          className="font-bold text-[#071B4A] hover:text-[#08A9D6] transition-colors text-base"
                        >
                          +91 99253 73353
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-sky-50 text-[#08A9D6] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#071B4A] font-heading text-sm sm:text-base">Email Inquiries</h3>
                      <p className="mt-1">
                        <a 
                          href="mailto:info@kevinpvcpipe.com" 
                          className="font-semibold text-gray-700 hover:text-[#08A9D6] transition-colors text-xs sm:text-sm"
                        >
                          info@kevinpvcpipe.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-sky-50 text-[#08A9D6] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#071B4A] font-heading text-sm sm:text-base">Operating Hours</h3>
                      <p className="text-xs text-gray-600 mt-1 font-normal">Monday – Sunday: 8:00 AM – 8:00 PM</p>
                      <p className="text-xs text-gray-500 font-normal">Factory Dispatch: 24/7 Loading Operations</p>
                    </div>
                  </div>

                </div>

              </div>

              <div className="bg-[#071B4A] rounded-card p-5 sm:p-6 text-white soft-shadow flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#08A9D6] text-white flex items-center justify-center shrink-0">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-heading text-white">Direct Plant Loading</h4>
                  <p className="text-xs text-sky-100/80 mt-0.5 font-normal">Prompt weighbridge verification & computerized dispatch invoices.</p>
                </div>
              </div>

            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-card p-6 sm:p-10 lg:p-12 border border-gray-100 soft-shadow">
                
                <div className="mb-6 sm:mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block mb-1 font-heading">
                    Send Us A Message
                  </span>
                  <h2 className="text-[26px] sm:text-3xl font-extrabold text-[#071B4A] font-heading">
                    Let's Discuss Your Project
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 font-normal leading-relaxed">
                    Fill out the form below and our team will get back to you with product technical data and custom rates.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-sky-50/70 rounded-2xl p-6 sm:p-8 text-center border border-sky-200 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-sky-100 text-[#08A9D6] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#071B4A] font-heading">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-base text-gray-600 max-w-md mx-auto font-normal leading-relaxed">
                      Thank you for contacting us, <strong>{formData.name}</strong>. A technical sales representative will respond to your email or call your number ({formData.mobile}) shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          mobile: '',
                          email: '',
                          subject: '',
                          message: ''
                        });
                      }}
                      className="w-full sm:w-auto min-h-[48px] px-8 py-3 rounded-full bg-[#071B4A] text-white text-sm font-bold active:scale-95 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Nilesh Patel"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-gray-300 bg-[#F3F6F8]/40 text-base focus:outline-none focus:ring-2 focus:ring-[#08A9D6] focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 99253 73353"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-gray-300 bg-[#F3F6F8]/40 text-base focus:outline-none focus:ring-2 focus:ring-[#08A9D6] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. nilesh@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-gray-300 bg-[#F3F6F8]/40 text-base focus:outline-none focus:ring-2 focus:ring-[#08A9D6] focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                          Subject *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. uPVC Column Pipe Quotation"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-gray-300 bg-[#F3F6F8]/40 text-base focus:outline-none focus:ring-2 focus:ring-[#08A9D6] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                        Message / Project Requirements *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please describe pipe sizes, expected length / quantity, application, and destination city..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#F3F6F8]/40 text-base focus:outline-none focus:ring-2 focus:ring-[#08A9D6] focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        id="contact-send-message-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto min-h-[48px] px-10 py-3.5 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white font-bold text-base tracking-wide shadow-lg shadow-sky-500/20 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message'}</span>
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block font-heading">
                Geographic Coordinates
              </span>
              <h3 className="text-[24px] sm:text-2xl font-bold text-[#071B4A] font-heading">
                Factory & Plant Location
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 font-normal">
                Located conveniently on the major transport arterial: Rajkot-Bhavnagar Highway, Babra, Amreli.
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/utJ4nToWFkaujsoN7"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto min-h-[44px] justify-center px-5 py-2.5 rounded-full bg-white border border-gray-200 text-xs font-bold text-[#071B4A] hover:text-[#08A9D6] hover:border-[#08A9D6] transition-colors soft-shadow inline-flex items-center gap-2 text-center"
            >
              <Globe className="w-4 h-4 text-[#08A9D6]" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Map Frame Container */}
          <div className="relative rounded-card overflow-hidden border border-gray-200 soft-shadow h-[320px] sm:h-[400px] bg-gray-100">
            <iframe
              title="Kevin PVC Pipe Industries Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1850.6210654034576!2d71.21650059072222!3d21.925241195670125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958f586955fa995%3A0x2ca9088cd27ec233!2sKevin%20PVC%20Pipe%20Industries%20Untvad!5e0!3m2!1sen!2sin!4v1789021989926!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[25%] contrast-[1.05]"
            />

            {/* Overlaid Plant Information Tag */}
            <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:bottom-4 sm:left-4 bg-[#071B4A]/90 backdrop-blur-md text-white p-3.5 sm:p-4 rounded-2xl border border-white/10 shadow-lg text-xs max-w-sm">
              <p className="font-bold text-sm text-[#08A9D6]">KEVIN PVC PIPE INDUSTRIES</p>
              <p className="text-gray-300 mt-0.5 text-[11px] sm:text-xs">Untvad, Rajkot-Bhavnagar Highway, Tal. Babra, Dist. Amreli, Gujarat</p>
              <p className="text-[11px] text-sky-200 mt-1.5 flex items-center gap-1.5 font-semibold">
                <Phone className="w-3 h-3" /> +91 99253 73353
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
