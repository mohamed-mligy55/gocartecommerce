"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Mock API Call
    console.log("Gocart Contact Submission:", formData);

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about Gocart? Our team is here to help you with your 
            orders, technical issues, or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1 bg-blue-600 rounded-2xl p-8 text-white shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <span className="text-xl bg-blue-500 p-2 rounded-lg">📍</span>
                  <div>
                    <p className="font-semibold">Office</p>
                    <p className="text-blue-100 text-sm">Cairo, Egypt</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-xl bg-blue-500 p-2 rounded-lg">📧</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100 text-sm">support@gocart.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-xl bg-blue-500 p-2 rounded-lg">📞</span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-blue-100 text-sm">+20 100 000 0000</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-blue-500">
              <p className="text-sm text-blue-100 italic">
                Typical response time: Within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input
                  required
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  required
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all transform active:scale-[0.98] shadow-lg ${
                  status === "success" 
                  ? "bg-green-500" 
                  : "bg-blue-600 hover:bg-blue-700 shadow-blue-100"
                }`}
              >
                {status === "loading" ? "Sending Message..." : status === "success" ? "Message Sent! ✓" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}