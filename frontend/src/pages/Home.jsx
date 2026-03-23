import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Factory, Droplet, Shield, TrendingUp } from 'lucide-react';
import { stats, applications, companyInfo } from '../data/mock';

export const Home = () => {
  const productCategories = [
    { name: 'Bitumen Emulsion', description: 'RS-1, RS-2, SS-1, SS-2, MS variants', icon: Droplet },
    { name: 'VG Grade Bitumen', description: 'VG-10, VG-30 for road construction', icon: Factory },
    { name: 'Modified Bitumen', description: 'PMB & CRMB for heavy traffic', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1605305104960-0344beb3ffe4"
            alt="Construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/95 to-[#0B0B0B]/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full">
            <span className="text-[#D4AF37] text-sm font-semibold">Premium Quality Since 1998</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {companyInfo.tagline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            {companyInfo.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#D4AF37] text-[#0B0B0B] rounded-lg font-semibold text-lg hover:bg-[#B8941F] transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-[#D4AF37]/30 flex items-center gap-2"
            >
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-[#D4AF37]/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              View Products
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#D4AF37]/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[#D4AF37] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-5xl font-bold text-[#D4AF37] mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full">
              <span className="text-[#D4AF37] text-sm font-semibold">OUR PRODUCTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Premium Bitumen Solutions</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive range of bitumen products for all infrastructure needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-xl bg-[#0B0B0B] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors border border-[#D4AF37]/30">
                    <Icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{category.name}</h3>
                  <p className="text-gray-400 leading-relaxed">{category.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0B0B0B] rounded-lg font-semibold text-lg hover:bg-[#B8941F] transform hover:scale-105 transition-all duration-300 shadow-xl shadow-[#D4AF37]/30"
            >
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full">
              <span className="text-[#D4AF37] text-sm font-semibold">APPLICATIONS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Where We Serve</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Trusted by contractors and infrastructure companies nationwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0B0B0B] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20"
              >
                <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-6 border border-[#D4AF37]/30">
                  <CheckCircle className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{app.title}</h3>
                <p className="text-gray-400 leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#0B0B0B] to-[#1a1a1a] border-y border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <TrendingUp className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Get premium quality bitumen with competitive pricing and reliable delivery. 
              Contact us today for bulk inquiries and custom requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-10 py-5 bg-[#D4AF37] text-[#0B0B0B] rounded-lg font-bold text-lg hover:bg-[#B8941F] transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-[#D4AF37]/40 flex items-center gap-2"
              >
                Request Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${companyInfo.phone}`}
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-[#D4AF37]/50 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
