import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Factory } from 'lucide-react';
import { companyInfo } from '../data/mock';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Lab & Plant', path: '/lab-plant' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0B0B0B] shadow-lg shadow-[#C9A961]/10' : 'bg-[#0B0B0B]/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#C9A961] to-[#B8941F] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Factory className="w-6 h-6 text-[#0B0B0B]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">{companyInfo.name}</h1>
              <p className="text-[#C9A961] text-xs font-medium">Premium Bitumen Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#C9A961] bg-[#C9A961]/10 border border-[#C9A961]/30'
                    : 'text-white hover:text-[#C9A961] hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-[#C9A961] text-[#0B0B0B] rounded-lg font-semibold text-sm hover:bg-[#B8941F] transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#C9A961]/30"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-[#0B0B0B] border-t border-[#C9A961]/20">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-[#C9A961] bg-[#C9A961]/10 border border-[#C9A961]/30'
                  : 'text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center px-4 py-3 bg-[#C9A961] text-[#0B0B0B] rounded-lg font-semibold text-sm hover:bg-[#B8941F] transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};
