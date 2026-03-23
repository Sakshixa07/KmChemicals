import { Link } from 'react-router-dom';
import { Factory, Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { companyInfo } from '../data/mock';

export const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg flex items-center justify-center">
                <Factory className="w-6 h-6 text-[#0B0B0B]" />
              </div>
              <h3 className="text-xl font-bold text-white">{companyInfo.name}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Leading manufacturer of premium bitumen products for infrastructure excellence.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#D4AF37]/20 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] transition-all duration-300 border border-transparent hover:border-[#D4AF37]/30">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#D4AF37]/20 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] transition-all duration-300 border border-transparent hover:border-[#D4AF37]/30">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#D4AF37]/20 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] transition-all duration-300 border border-transparent hover:border-[#D4AF37]/30">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-b border-[#D4AF37]/20 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Products', 'Certifications'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-b border-[#D4AF37]/20 pb-2">Our Products</h4>
            <ul className="space-y-2">
              {['Bitumen Emulsion', 'VG Grade Bitumen', 'PMB', 'CRMB', 'Industrial Bitumen'].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 border-b border-[#D4AF37]/20 pb-2">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{companyInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D4AF37]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
