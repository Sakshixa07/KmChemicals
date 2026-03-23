import { useState } from 'react';
import { Package, Droplet, Factory, Shield } from 'lucide-react';
import { products } from '../data/mock';

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryIcons = {
    'Bitumen Emulsion': Droplet,
    'VG Grade Bitumen': Factory,
    'Polymer Modified Bitumen (PMB)': Shield,
    'Crumb Rubber Modified Bitumen (CRMB)': Shield,
    'Penetration Grade Bitumen': Package,
    'Oxidized / Blown Bitumen': Factory,
    'Standard Bitumen': Package
  };

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1708117242652-25dc76c4b30c"
            alt="Road Construction"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded-full">
            <span className="text-[#C9A961] text-sm font-semibold">OUR PRODUCTS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Premium Bitumen Products
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive range of high-quality bitumen solutions for every infrastructure need
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-[#1a1a1a] sticky top-20 z-30 border-b border-[#C9A961]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                selectedCategory === null
                  ? 'bg-[#C9A961] text-[#0B0B0B]'
                  : 'bg-white/5 text-white border border-[#C9A961]/30 hover:border-[#C9A961]/60'
              }`}
            >
              All Products
            </button>
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedCategory(product.category)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === product.category
                    ? 'bg-[#C9A961] text-[#0B0B0B]'
                    : 'bg-white/5 text-white border border-[#C9A961]/30 hover:border-[#C9A961]/60'
                }`}
              >
                {product.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.map((productCategory) => {
            const Icon = categoryIcons[productCategory.category] || Package;
            return (
              <div key={productCategory.id} className="mb-20 last:mb-0">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-10">
                  <div className="w-14 h-14 bg-[#C9A961]/10 rounded-xl flex items-center justify-center border border-[#C9A961]/30">
                    <Icon className="w-7 h-7 text-[#C9A961]" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{productCategory.category}</h2>
                    <div className="h-1 w-20 bg-[#C9A961] rounded-full mt-2"></div>
                  </div>
                </div>

                {/* Product Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productCategory.items.map((item, index) => (
                    <div
                      key={index}
                      className="group p-8 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0B0B0B] border border-[#C9A961]/20 hover:border-[#C9A961] transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A961]/30 hover:transform hover:-translate-y-2"
                    >
                      {/* Product Image - Drum Placeholder */}
                      <div className="mb-6 rounded-lg overflow-hidden bg-[#0B0B0B] border border-[#C9A961]/20 p-4 flex items-center justify-center h-48">
                        <img
                          src="https://via.placeholder.com/200x200/1a1a1a/C9A961?text=KM+Drum"
                          alt={item.name}
                          className="h-full w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>

                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#C9A961] transition-colors">
                          {item.name}
                        </h3>
                        <div className="w-10 h-10 bg-[#C9A961]/10 rounded-lg flex items-center justify-center group-hover:bg-[#C9A961]/20 transition-colors border border-[#C9A961]/30">
                          <Package className="w-5 h-5 text-[#C9A961]" />
                        </div>
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      <div className="pt-4 border-t border-[#C9A961]/20">
                        <div className="text-xs font-semibold text-[#C9A961] mb-2">APPLICATIONS:</div>
                        <div className="text-sm text-gray-300">{item.applications}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#0B0B0B] to-[#1a1a1a] border-t border-[#C9A961]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Our technical team is ready to assist you in selecting the right bitumen product for your project requirements
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-5 bg-[#C9A961] text-[#0B0B0B] rounded-lg font-bold text-lg hover:bg-[#B8941F] transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-[#C9A961]/40"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};
