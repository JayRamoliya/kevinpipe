import React, { useState } from 'react';
import { 
  Briefcase, 
  Upload, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Clock, 
  Sparkles,
  FileCheck
} from 'lucide-react';
import { CareerFormData } from '../types';

export const CareerPage: React.FC = () => {
  const [formData, setFormData] = useState<CareerFormData>({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    position: 'Extrusion Line Operator / Engineer',
    experience: '1 - 3 Years',
    resumeFileName: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file.name);
      setFormData((prev) => ({ ...prev, resumeFileName: file.name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 850);
  };

  return (
    <div id="career-page-container" className="w-full bg-white text-[#111827]">
      
      {/* 1. HERO BANNER */}
      <section className="bg-[#071B4A] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#08A9D6_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#08A9D6] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10 font-heading">
            <span>Join Our Team</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white">
            Build Your Career With Kevin
          </h1>
          <p className="mt-4 text-base sm:text-lg text-sky-100/80 max-w-2xl mx-auto font-light leading-relaxed">
            Work at the forefront of modern polymer extrusion and hydraulic infrastructure. We nurture talent, reward discipline, and provide stable, long-term careers.
          </p>
        </div>
      </section>

      {/* 2. JOB APPLICATION FORM SECTION */}
      <section className="py-14 sm:py-20 bg-[#F3F6F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-card p-6 sm:p-10 lg:p-12 border border-gray-100 soft-shadow">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#08A9D6] block mb-1 font-heading">
                Current Openings & Direct Application
              </span>
              <h2 className="text-[26px] sm:text-3xl font-extrabold text-[#071B4A] font-heading">
                Job Application Form
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2 font-normal leading-relaxed">
                Submit your credentials and CV. Our HR talent team reviews all applications and coordinates preliminary technical interviews.
              </p>
            </div>

            {submitted ? (
              <div className="bg-sky-50/60 rounded-2xl p-6 sm:p-10 text-center border border-sky-200 shadow-sm space-y-4">
                <div className="w-16 h-16 rounded-full bg-sky-100 text-[#08A9D6] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#071B4A] font-heading">
                  Application Successfully Submitted!
                </h3>
                <p className="text-base text-gray-700 max-w-md mx-auto leading-relaxed font-normal">
                  Thank you, <strong>{formData.fullName}</strong>. Your profile for the role of <strong>{formData.position}</strong> has been registered in our recruitment database.
                </p>
                {uploadedFile && (
                  <p className="text-sm text-gray-500 font-medium">
                    Attached CV: <span className="font-semibold text-[#071B4A]">{uploadedFile}</span>
                  </p>
                )}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setUploadedFile(null);
                      setFormData({
                        fullName: '',
                        mobile: '',
                        email: '',
                        city: '',
                        position: 'Extrusion Line Operator / Engineer',
                        experience: '1 - 3 Years',
                        resumeFileName: '',
                        message: ''
                      });
                    }}
                    className="w-full sm:w-auto min-h-[48px] px-8 py-3 rounded-full bg-[#071B4A] text-white text-sm font-bold active:scale-95 transition-all"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-gray-300 bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#08A9D6] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 99000 11223"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-gray-300 bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#08A9D6] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. anand.sharma@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-gray-300 bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#08A9D6] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Current City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amreli / Rajkot / Ahmedabad"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-gray-300 bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#08A9D6] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Position Applying For */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Position Applying For *
                    </label>
                    <select
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-gray-300 bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#08A9D6] focus:border-transparent transition-all"
                    >
                      <option value="Extrusion Line Operator / Engineer">Extrusion Line Operator / Engineer</option>
                      <option value="Quality Assurance & Lab Chemist">Quality Assurance & Lab Chemist (NABL/BIS)</option>
                      <option value="Plant Maintenance Mechanical Engineer">Plant Maintenance Mechanical Engineer</option>
                      <option value="Territory Sales Officer (Agriculture/Plumbing)">Territory Sales Officer (Agriculture/Plumbing)</option>
                      <option value="Factory Dispatch & Logistics Supervisor">Factory Dispatch & Logistics Supervisor</option>
                      <option value="CNC Threading & Socketing Specialist">CNC Threading & Socketing Specialist</option>
                      <option value="Accounts & Commercial Executive">Accounts & Commercial Executive</option>
                      <option value="General Production Assistant">General Production Assistant</option>
                    </select>
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Total Work Experience *
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-gray-300 bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#08A9D6] focus:border-transparent transition-all"
                    >
                      <option value="Fresher (0 - 1 Year)">Fresher (0 - 1 Year)</option>
                      <option value="1 - 3 Years">1 - 3 Years</option>
                      <option value="3 - 5 Years">3 - 5 Years</option>
                      <option value="5 - 8 Years">5 - 8 Years</option>
                      <option value="8+ Years (Senior Role)">8+ Years (Senior Role)</option>
                    </select>
                  </div>

                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                    Resume / Curriculum Vitae (PDF or Word)
                  </label>
                  <div className="relative border-2 border-dashed border-gray-300 hover:border-[#08A9D6] rounded-2xl p-6 text-center transition-colors bg-[#F3F6F8]/50 cursor-pointer">
                    <input
                      type="file"
                      id="career-resume-file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-white text-[#08A9D6] flex items-center justify-center shadow-xs">
                        <Upload className="w-5 h-5" />
                      </div>
                      <p className="text-sm font-bold text-[#071B4A]">
                        {uploadedFile ? (
                          <span className="text-green-700 flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4 inline" /> Attached: {uploadedFile}
                          </span>
                        ) : (
                          'Tap or drag & drop resume here'
                        )}
                      </p>
                      <p className="text-xs text-gray-500 font-normal">Supports PDF, DOC, DOCX (Max 10MB)</p>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                    Cover Note / Current CTC & Notice Period
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly state your current role, salary expectations, and notice period..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#08A9D6] focus:border-transparent transition-all"
                  />
                </div>

                {/* Submit button */}
                <div className="text-center pt-2">
                  <button
                    id="submit-career-application-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-h-[48px] px-10 py-3.5 rounded-full bg-[#08A9D6] hover:bg-[#0796be] text-white font-bold text-base tracking-wide shadow-lg shadow-sky-500/20 transition-all flex items-center justify-center gap-2 mx-auto active:scale-95 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Application...' : 'Submit Application'}</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* 3. WORK CULTURE HIGHLIGHTS */}
          <div className="mt-10 sm:mt-14 text-center max-w-3xl mx-auto space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#071B4A] font-heading">
              Join a growing manufacturing company committed to quality.
            </h3>
            <p className="text-base text-gray-600 leading-relaxed font-normal">
              At Kevin PVC Pipe Industries, we treat each plant technician, sales officer, and laboratory specialist as an essential guardian of our reputation. We maintain strict safety protocols, offer merit-based salary escalations, and provide hands-on training with advanced German extrusion machinery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-left">
              <div className="p-5 rounded-2xl bg-white border border-gray-100 soft-shadow">
                <ShieldCheck className="w-6 h-6 text-[#08A9D6] mb-2" />
                <h4 className="text-sm font-bold text-[#071B4A] font-heading">Safety First Campus</h4>
                <p className="text-xs text-gray-500 mt-1 font-normal leading-relaxed">Comprehensive workplace insurance and zero-injury safety protocols.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-100 soft-shadow">
                <Sparkles className="w-6 h-6 text-[#08A9D6] mb-2" />
                <h4 className="text-sm font-bold text-[#071B4A] font-heading">Skill Development</h4>
                <p className="text-xs text-gray-500 mt-1 font-normal leading-relaxed">Regular technical seminars on polymer rheology and automated machinery.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-100 soft-shadow">
                <HeartHandshake className="w-6 h-6 text-[#08A9D6] mb-2" />
                <h4 className="text-sm font-bold text-[#071B4A] font-heading">Long-Term Retention</h4>
                <p className="text-xs text-gray-500 mt-1 font-normal leading-relaxed">Over 60% of our production team has served with us for 5+ continuous years.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
