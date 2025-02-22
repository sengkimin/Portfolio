"use client";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return alert("Name is required");
    if (!formData.email.trim()) return alert("Email is required");
    if (!formData.message.trim()) return alert("Message is required");

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/sengin.pse@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-950 shadow-md shadow-teal-400 text-white rounded-se-full">
      <section id="contact" className="container mx-auto px-6 py-16">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center mb-8">
          GET IN <span className="text-teal-400">TOUCH</span>
        </h1>

        <div className="flex flex-col lg:flex-row justify-center">
          <div className="lg:w-1/2 space-y-6">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="relative group">
                  <FaUser className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-teal-400 transition-colors" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-5 pl-12 bg-gray-700 border border-teal-400 rounded-lg focus:outline-none text-white placeholder-gray-500"
                    required
                  />
                </div>

                <div className="relative group">
                  <FaEnvelope className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-teal-400 transition-colors" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-5 pl-12 bg-gray-700 border border-teal-400 rounded-lg focus:outline-none text-white placeholder-gray-500"
                    required
                  />
                </div>

                <div className="relative group">
                  <FaComment className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-teal-400 transition-colors" />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full resize-none p-5 pl-12 bg-gray-700 border border-teal-400 rounded-lg focus:outline-none text-white placeholder-gray-500 h-[9.9rem]"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-teal-400 text-black font-bold rounded-lg hover:bg-teal-500 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane className="w-5 h-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
