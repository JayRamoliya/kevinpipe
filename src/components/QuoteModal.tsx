import React, { useState } from "react";
import {
  X,
  CheckCircle,
  Send,
  PhoneCall,
  Building2,
  User,
  Mail,
  MessageSquare,
  Package,
} from "lucide-react";
import { QuoteFormData } from "../types";
import { PRODUCTS_DATA } from "../data/products";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultProduct,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    productInterest: defaultProduct || "uPVC Column Pipes",
    estimatedQuantity: "",
    projectLocation: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "919925373353";

    const text = `Hello, I would like a quote.

Full Name: ${formData.fullName}
Company Name: ${formData.companyName}
Phone: ${formData.phone}
Email: ${formData.email}
Product Interest: ${formData.productInterest}
Estimated Quantity: ${formData.estimatedQuantity}
Project Location: ${formData.projectLocation}

Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-[24px] max-w-xl w-full p-5 sm:p-8 shadow-2xl border border-gray-100 max-h-[94vh] sm:max-h-[92vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 sm:py-8">
            <div className="w-16 h-16 rounded-full bg-[#E1F4FA] text-[#08A9D6] mx-auto flex items-center justify-center mb-4">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#071B4A] mb-2 font-heading">
              Quote Request Received
            </h3>
            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed mb-6">
              Thank you,{" "}
              <strong className="text-gray-900">
                {formData.fullName || "Valued Partner"}
              </strong>
              . Our technical sales engineering team at Kevin PVC Pipe
              Industries has received your inquiry for{" "}
              <strong className="text-[#071B4A]">
                {formData.productInterest}
              </strong>{" "}
              and will contact you within 2 business hours.
            </p>
            <div className="p-4 bg-[#F3F6F8] rounded-2xl text-xs sm:text-sm text-gray-600 mb-6 text-left space-y-1.5">
              <div>
                <strong>Direct Desk:</strong> 02791-291353
              </div>
              <div>
                <strong>Email:</strong> info@kevinpvcpipe.com
              </div>
              <div>
                <strong>Plant:</strong> Untvad, Babra, Dist. Amreli, Gujarat
              </div>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto min-h-[48px] px-8 py-3 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white text-sm font-bold shadow-sm inline-flex items-center justify-center"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5 sm:mb-6 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E1F4FA] text-[#08A9D6] text-xs font-bold uppercase tracking-wider mb-2 font-heading">
                Factory Direct Inquiry
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#071B4A] font-heading">
                Request Commercial Quote
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Provide your requirements below. Direct pricing with verified
                test certifications.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Contact Person Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ramesh Patel"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full min-h-[48px] pl-10 pr-3.5 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:bg-white focus:outline-none focus:border-[#08A9D6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Company / Contractor Name
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. Patel Infrastructure Ltd"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyName: e.target.value,
                        })
                      }
                      className="w-full min-h-[48px] pl-10 pr-3.5 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:bg-white focus:outline-none focus:border-[#08A9D6]"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <PhoneCall className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      required
                      type="tel"
                      placeholder="e.g. 98250 12345"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full min-h-[48px] pl-10 pr-3.5 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:bg-white focus:outline-none focus:border-[#08A9D6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full min-h-[48px] pl-10 pr-3.5 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:bg-white focus:outline-none focus:border-[#08A9D6]"
                    />
                  </div>
                </div>
              </div>

              {/* Product Select & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Pipe Product Range *
                  </label>
                  <div className="relative">
                    <Package className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <select
                      value={formData.productInterest}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          productInterest: e.target.value,
                        })
                      }
                      className="w-full min-h-[48px] pl-10 pr-3.5 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:bg-white focus:outline-none focus:border-[#08A9D6]"
                    >
                      {PRODUCTS_DATA.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="Custom Specification / Fittings">
                        Fittings & Accessories
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Estimated Meters / Quantity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 500 Meters / 200 Pipes"
                    value={formData.estimatedQuantity}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        estimatedQuantity: e.target.value,
                      })
                    }
                    className="w-full min-h-[48px] px-3.5 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:bg-white focus:outline-none focus:border-[#08A9D6]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  Project Location / Specific Diameters
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                  <textarea
                    rows={3}
                    placeholder="Specify nominal diameter, pressure class (kgf/cm²), delivery destination, or project timeline..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full pl-10 pr-3.5 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:bg-white focus:outline-none focus:border-[#08A9D6]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-2 active:scale-98 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Quote Request</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-gray-400 font-normal">
                Direct manufacturing dispatch from Amreli, Gujarat. Zero spam.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
