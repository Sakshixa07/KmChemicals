import { Beaker, CheckCircle, Shield, TrendingUp, Factory, Gauge, Microscope, Award } from 'lucide-react';
import { labFeatures, plantFeatures } from '../data/mock';

export const LabPlant = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1766297247072-93fd815afef3"
            alt="Laboratory"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded-full">
            <span className="text-[#C9A961] text-sm font-semibold">FACILITIES</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Laboratory & Manufacturing Plant
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            State-of-the-art facilities ensuring quality excellence in every product
          </p>
        </div>
      </section>

      {/* Laboratory Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded-full">
                <span className="text-[#C9A961] text-sm font-semibold">LABORATORY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Testing Facility
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our in-house laboratory is equipped with cutting-edge testing equipment and manned by experienced 
                technicians. We conduct comprehensive quality tests at every stage of production to ensure our 
                products meet the highest standards.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                From raw material inspection to final product verification, our quality control process is meticulous 
                and thorough, guaranteeing consistency and reliability in every batch.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1766297247072-93fd815afef3"
                alt="Lab Equipment"
                className="rounded-xl h-64 w-full object-cover border border-[#C9A961]/20"
              />
              <img
                src="https://images.unsplash.com/photo-1768498950637-88d073faa491"
                alt="Quality Testing"
                className="rounded-xl h-64 w-full object-cover border border-[#C9A961]/20 mt-8"
              />
            </div>
          </div>

          {/* Lab Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {labFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-[#0B0B0B] border border-[#C9A961]/20 hover:border-[#C9A961]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A961]/20 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#C9A961]/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#C9A961]/30">
                    <CheckCircle className="w-6 h-6 text-[#C9A961]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Parameters */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded-full">
              <span className="text-[#C9A961] text-sm font-semibold">QUALITY TESTING</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Key Test Parameters</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive testing protocols ensuring superior product quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Gauge, title: 'Penetration Test', desc: 'Hardness measurement' },
              { icon: Beaker, title: 'Viscosity Test', desc: 'Flow characteristics' },
              { icon: Microscope, title: 'Ductility Test', desc: 'Elongation properties' },
              { icon: Shield, title: 'Flash Point', desc: 'Safety parameters' },
              { icon: Award, title: 'Softening Point', desc: 'Temperature resistance' },
              { icon: TrendingUp, title: 'Specific Gravity', desc: 'Density verification' },
              { icon: CheckCircle, title: 'Solubility Test', desc: 'Purity analysis' },
              { icon: Beaker, title: 'Water Content', desc: 'Moisture testing' }
            ].map((test, index) => {
              const Icon = test.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-[#1a1a1a] border border-[#C9A961]/20 hover:border-[#C9A961]/60 transition-all duration-300 text-center hover:transform hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-[#C9A961]/10 rounded-xl flex items-center justify-center mb-4 mx-auto border border-[#C9A961]/30">
                    <Icon className="w-7 h-7 text-[#C9A961]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{test.title}</h4>
                  <p className="text-gray-400 text-sm">{test.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing Plant Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1717386255773-a456c611dc4e"
                alt="Manufacturing Plant"
                className="rounded-xl w-full h-[500px] object-cover border border-[#C9A961]/20 shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block mb-6 px-4 py-2 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded-full">
                <span className="text-[#C9A961] text-sm font-semibold">MANUFACTURING PLANT</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Modern Production Facility
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our manufacturing plant is designed with efficiency, safety, and environmental sustainability in mind. 
                Equipped with the latest technology and automated systems, we maintain optimal production standards 
                while minimizing environmental impact.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With a production capacity exceeding 50,000 tons annually, we can handle both small-scale orders 
                and large infrastructure projects with equal dedication to quality and timely delivery.
              </p>
            </div>
          </div>

          {/* Plant Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {plantFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-[#0B0B0B] border border-[#C9A961]/20 hover:border-[#C9A961]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A961]/20 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#C9A961]/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#C9A961]/30">
                    <Factory className="w-6 h-6 text-[#C9A961]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Images Gallery */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded-full">
              <span className="text-[#C9A961] text-sm font-semibold">FACILITY OVERVIEW</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Infrastructure</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg"
              alt="Plant View 1"
              className="rounded-xl h-64 w-full object-cover border border-[#C9A961]/20 hover:border-[#C9A961]/60 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1588011930968-eadac80e6a5a"
              alt="Plant View 2"
              className="rounded-xl h-64 w-full object-cover border border-[#C9A961]/20 hover:border-[#C9A961]/60 transition-all duration-300"
            />
            <img
              src="https://images.pexels.com/photos/7178310/pexels-photo-7178310.jpeg"
              alt="Plant View 3"
              className="rounded-xl h-64 w-full object-cover border border-[#C9A961]/20 hover:border-[#C9A961]/60 transition-all duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
