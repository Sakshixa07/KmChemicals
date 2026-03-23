import { Award, ShieldCheck, FileCheck, BadgeCheck } from 'lucide-react';
import { certifications } from '../data/mock';

export const Certifications = () => {
  const iconMap = {
    'award': Award,
    'leaf': ShieldCheck,
    'shield-check': ShieldCheck,
    'badge-check': BadgeCheck
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579165466949-3180a3d056d5"
            alt="Quality Standards"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full">
            <span className="text-[#D4AF37] text-sm font-semibold">CERTIFICATIONS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Quality Certifications & Standards
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognized and certified by leading quality and regulatory authorities
          </p>
        </div>
      </section>

      {/* Main Certifications */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Certifications</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Committed to maintaining the highest standards of quality and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const Icon = iconMap[cert.icon] || Award;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-xl bg-gradient-to-br from-[#0B0B0B] to-[#1a1a1a] border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/30 hover:transform hover:-translate-y-3 text-center"
                >
                  <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#D4AF37]/20 transition-colors border-2 border-[#D4AF37]/40 group-hover:border-[#D4AF37]">
                    <Icon className="w-10 h-10 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full">
              <span className="text-[#D4AF37] text-sm font-semibold">COMPLIANCE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Standards We Follow</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              All our products are manufactured in compliance with national and international standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                standard: 'IS 8042',
                title: 'Cationic Bitumen Emulsion',
                desc: 'Rapid, Medium & Slow Setting'
              },
              {
                standard: 'IS 73',
                title: 'Paving Bitumen',
                desc: 'Penetration Grade Specifications'
              },
              {
                standard: 'IS 15462',
                title: 'Polymer & Rubber Modified Bitumen',
                desc: 'PMB & CRMB Standards'
              },
              {
                standard: 'IRC SP-53',
                title: 'Road Construction Guidelines',
                desc: 'Highway Specifications'
              },
              {
                standard: 'MORTH',
                title: 'Ministry Standards',
                desc: 'Road Transport & Highways'
              },
              {
                standard: 'NHAI',
                title: 'Highway Authority',
                desc: 'Approved Supplier'
              }
            ].map((std, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-[#1a1a1a] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center border border-[#D4AF37]/30">
                    <FileCheck className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="text-2xl font-bold text-[#D4AF37]">{std.standard}</div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{std.title}</h4>
                <p className="text-gray-400 text-sm">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#0B0B0B] to-[#1a1a1a] border-y border-[#D4AF37]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center mb-8 mx-auto border-2 border-[#D4AF37]/40">
              <ShieldCheck className="w-10 h-10 text-[#D4AF37]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Quality Commitment
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              At Km Chemicals, quality is not just a promise—it's our foundation. Every product undergoes 
              rigorous testing and quality checks to ensure it meets or exceeds industry standards. Our commitment 
              to excellence is reflected in our certifications and the trust placed in us by leading infrastructure 
              companies across India.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { value: '100%', label: 'Quality Tested' },
                { value: '25+', label: 'Years Experience' },
                { value: 'ISO', label: 'Certified' }
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-xl bg-white/5 border border-[#D4AF37]/20">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">{item.value}</div>
                  <div className="text-gray-400 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification Images */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full">
              <span className="text-[#D4AF37] text-sm font-semibold">VERIFIED & APPROVED</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certified Excellence</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-12 rounded-xl bg-[#1a1a1a] border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 flex flex-col items-center justify-center text-center">
              <Award className="w-24 h-24 text-[#D4AF37] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">ISO Certified</h3>
              <p className="text-gray-400">Quality & Environmental Management</p>
            </div>
            <div className="p-12 rounded-xl bg-[#1a1a1a] border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 flex flex-col items-center justify-center text-center">
              <BadgeCheck className="w-24 h-24 text-[#D4AF37] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Government Approved</h3>
              <p className="text-gray-400">PWD & NHAI Certified Supplier</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
