"use client";
import { useState } from "react";

export default function PostAJob() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = (form) => {
    const newErrors = {};
    if (!form.company) newErrors.company = "Company name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.title) newErrors.title = "Job title is required";
    if (!form.trade) newErrors.trade = "Please select a trade";
    if (!form.type) newErrors.type = "Please select a job type";
    if (!form.city) newErrors.city = "City is required";
    if (!form.state) newErrors.state = "State is required";
    if (!form.minPay) newErrors.minPay = "Min pay is required";
    if (!form.maxPay) newErrors.maxPay = "Max pay is required";
    if (!form.description) newErrors.description = "Job description is required";
    return newErrors;
  };

  const handleSubmit = () => {
    const form = {
      company: document.getElementById("company").value,
      email: document.getElementById("email").value,
      title: document.getElementById("title").value,
      trade: document.getElementById("trade").value,
      type: document.getElementById("type").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      minPay: document.getElementById("minPay").value,
      maxPay: document.getElementById("maxPay").value,
      description: document.getElementById("description").value,
    };

    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white font-sans flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-6">
          <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Job posted successfully</h1>
          <p className="text-gray-500 text-sm mb-8">Your listing is now live on GridHire. Qualified tradespeople in your area will be able to find and apply to your role.</p>
          <div className="flex items-center justify-center gap-3">
            <a href="/" className="text-sm border border-gray-200 text-gray-600 px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
              Back to home
            </a>
            <button
              onClick={() => { setSubmitted(false); setErrors({}); }}
              className="text-sm bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Post another job
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Navbar */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-green-600 rounded-md"></div>
            <span className="text-lg font-bold text-gray-900">GridHire</span>
          </a>
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm text-gray-500 hover:text-gray-900">Browse Jobs</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Sign In</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-14 px-6 border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            First post is free
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Post a job on GridHire</h1>
          <p className="text-gray-500 text-sm">Reach thousands of verified HVAC, Electrical, and Plumbing professionals.</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-14 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Company Info */}
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-gray-900 mb-1">Company information</h2>
            <p className="text-xs text-gray-400 mb-5">Tell tradespeople who they'll be working for.</p>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Company name</label>
                <input
                  id="company"
                  type="text"
                  placeholder="e.g. AirPro Services"
                  className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-green-500 transition-colors placeholder-gray-300 ${errors.company ? "border-red-300" : "border-gray-200"}`}
                />
                {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Company email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="hiring@yourcompany.com"
                  className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-green-500 transition-colors placeholder-gray-300 ${errors.email ? "border-red-300" : "border-gray-200"}`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Company website <span className="text-gray-300 font-normal">(optional)</span></label>
                <input
                  id="website"
                  type="url"
                  placeholder="https://yourcompany.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-green-500 transition-colors placeholder-gray-300"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 mb-10"></div>

          {/* Job Info */}
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-gray-900 mb-1">Job details</h2>
            <p className="text-xs text-gray-400 mb-5">Be specific — better details attract better candidates.</p>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Job title</label>
                <input
                  id="title"
                  type="text"
                  placeholder="e.g. Journeyman Electrician"
                  className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-green-500 transition-colors placeholder-gray-300 ${errors.title ? "border-red-300" : "border-gray-200"}`}
                />
                {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Trade</label>
                  <select
                    id="trade"
                    className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-green-500 transition-colors bg-white ${errors.trade ? "border-red-300" : "border-gray-200"}`}
                  >
                    <option value="">Select a trade...</option>
                    <option value="hvac">HVAC</option>
                    <option value="electrical">Electrical</option>
                    <option value="plumbing">Plumbing</option>
                  </select>
                  {errors.trade && <p className="text-xs text-red-500 mt-1">{errors.trade}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Job type</label>
                  <select
                    id="type"
                    className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-green-500 transition-colors bg-white ${errors.type ? "border-red-300" : "border-gray-200"}`}
                  >
                    <option value="">Select type...</option>
                    <option value="fulltime">Full-time</option>
                    <option value="parttime">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="apprenticeship">Apprenticeship</option>
                  </select>
                  {errors.type && <p className="text-xs text-red-500 mt-1">{errors.type}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">City</label>
                  <input
                    id="city"
                    type="text"
                    placeholder="e.g. Nashville"
                    className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-green-500 transition-colors placeholder-gray-300 ${errors.city ? "border-red-300" : "border-gray-200"}`}
                  />
                  {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">State</label>
                  <input
                    id="state"
                    type="text"
                    placeholder="e.g. TN"
                    className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-green-500 transition-colors placeholder-gray-300 ${errors.state ? "border-red-300" : "border-gray-200"}`}
                  />
                  {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Min pay ($/hr)</label>
                  <input
                    id="minPay"
                    type="number"
                    placeholder="e.g. 28"
                    className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-green-500 transition-colors placeholder-gray-300 ${errors.minPay ? "border-red-300" : "border-gray-200"}`}
                  />
                  {errors.minPay && <p className="text-xs text-red-500 mt-1">{errors.minPay}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Max pay ($/hr)</label>
                  <input
                    id="maxPay"
                    type="number"
                    placeholder="e.g. 38"
                    className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-green-500 transition-colors placeholder-gray-300 ${errors.maxPay ? "border-red-300" : "border-gray-200"}`}
                  />
                  {errors.maxPay && <p className="text-xs text-red-500 mt-1">{errors.maxPay}</p>}
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Required certifications <span className="text-gray-300 font-normal">(optional)</span></label>
                <input
                  id="certs"
                  type="text"
                  placeholder="e.g. EPA 608, State Electrical License"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-green-500 transition-colors placeholder-gray-300"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Job description</label>
                <textarea
                  id="description"
                  rows={6}
                  placeholder="Describe the role, responsibilities, and what you're looking for in a candidate..."
                  className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-800 outline-none focus:border-green-500 transition-colors placeholder-gray-300 resize-none ${errors.description ? "border-red-300" : "border-gray-200"}`}
                />
                {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description}</p>}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 mb-10"></div>

          {/* Urgency */}
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-gray-900 mb-1">Listing options</h2>
            <p className="text-xs text-gray-400 mb-5">Boost visibility for hard to fill roles.</p>
            <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:border-green-500 transition-colors">
              <input type="checkbox" id="urgent" className="accent-green-600" />
              <label htmlFor="urgent" className="text-sm text-gray-700 cursor-pointer">
                Mark as <span className="font-medium text-red-500">Urgent</span> — shows a badge on your listing
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-between pt-2">
            <p className="text-xs text-gray-400">Your first listing is completely free. No credit card required.</p>
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white text-sm font-medium px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Post job →
            </button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6 mt-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-600 rounded-md"></div>
            <span className="text-sm font-bold text-gray-900">GridHire</span>
          </div>
          <span className="text-xs text-gray-400">© 2026 GridHire</span>
        </div>
      </footer>

    </div>
  );
}