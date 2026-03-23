import { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { companyInfo } from '../data/mock';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - in real app, this would call backend API
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', requirement: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1494778924281-cce023ab1acb"
            alt="Contact"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded-full">
            <span className="text-[#C9A961] text-sm font-semibold">GET IN TOUCH</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your bitumen requirements and how we can support your project
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-gradient-to-br from-[#0B0B0B] to-[#1a1a1a] border border-[#C9A961]/20 hover:border-[#C9A961]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A961]/20 text-center">
              <div className="w-16 h-16 bg-[#C9A961]/10 rounded-xl flex items-center justify-center mb-6 mx-auto border border-[#C9A961]/30">
                <Phone className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
              <a href={`tel:${companyInfo.phone}`} className="text-gray-300 hover:text-[#C9A961] transition-colors text-lg">
                {companyInfo.phone}
              </a>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-[#0B0B0B] to-[#1a1a1a] border border-[#C9A961]/20 hover:border-[#C9A961]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A961]/20 text-center">
              <div className="w-16 h-16 bg-[#C9A961]/10 rounded-xl flex items-center justify-center mb-6 mx-auto border border-[#C9A961]/30">
                <Mail className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <a href={`mailto:${companyInfo.email}`} className="text-gray-300 hover:text-[#C9A961] transition-colors text-lg">
                {companyInfo.email}
              </a>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-[#0B0B0B] to-[#1a1a1a] border border-[#C9A961]/20 hover:border-[#C9A961]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A961]/20 text-center">
              <div className="w-16 h-16 bg-[#C9A961]/10 rounded-xl flex items-center justify-center mb-6 mx-auto border border-[#C9A961]/30">
                <MapPin className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Location</h3>
              <p className="text-gray-300 text-lg">{companyInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <div className="inline-block mb-4 px-4 py-2 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded-full">
                  <span className="text-[#C9A961] text-sm font-semibold">CONTACT US</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">Send Us a Message</h2>
                <p className="text-gray-400 text-lg">
                  Fill out the form below and our team will get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#C9A961]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#C9A961]/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/20 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#C9A961]" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#C9A961]/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#C9A961]" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#C9A961]/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/20 transition-all"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="requirement" className="block text-white font-medium mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#C9A961]" />
                    Your Requirements *
                  </label>
                  <textarea
                    id="requirement"
                    name="requirement"
                    required
                    rows="5"
                    value={formData.requirement}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#C9A961]/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A961] focus:ring-2 focus:ring-[#C9A961]/20 transition-all resize-none"
                    placeholder="Tell us about your project requirements, quantity needed, delivery location, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full px-8 py-4 bg-[#C9A961] text-[#0B0B0B] rounded-lg font-bold text-lg hover:bg-[#B8941F] transform hover:scale-105 transition-all duration-300 shadow-xl shadow-[#C9A961]/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitted ? (
                    <>Message Sent Successfully!</>
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="h-[600px] rounded-xl overflow-hidden border border-[#C9A961]/20">
              <iframe
                src={companyInfo.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-[#1a1a1a] border-t border-[#C9A961]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">Business Hours</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="p-6 rounded-xl bg-[#0B0B0B] border border-[#C9A961]/20">
                <div className="text-[#C9A961] font-bold text-lg mb-2">Monday - Saturday</div>
                <div className="text-gray-300 text-xl">9:00 AM - 6:00 PM</div>
              </div>
              <div className="p-6 rounded-xl bg-[#0B0B0B] border border-[#C9A961]/20">
                <div className="text-[#C9A961] font-bold text-lg mb-2">Sunday</div>
                <div className="text-gray-300 text-xl">Closed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
