import { Users, Target, Eye, TrendingUp, Award, Clock } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/257703/pexels-photo-257703.jpeg"
            alt="Industrial Plant"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded-full">
            <span className="text-[#C9A961] text-sm font-semibold">ABOUT US</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Building Excellence Since 1998
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading manufacturer of premium bitumen products, trusted by infrastructure companies nationwide
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Who We Are</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                <strong className="text-[#C9A961]">Km Chemicals</strong> is a premier manufacturer of high-quality bitumen products, 
                serving the infrastructure industry with dedication and excellence. With over 25 years of experience, 
                we have established ourselves as a trusted partner for road construction, waterproofing, and industrial applications.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our state-of-the-art manufacturing facility is equipped with modern machinery and advanced technology, 
                enabling us to produce a comprehensive range of bitumen products that meet international quality standards.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We take pride in our commitment to quality, innovation, and customer satisfaction. Our team of experienced 
                professionals ensures that every product leaving our facility meets the highest standards of excellence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1647427060118-4911c9821b82"
                alt="Manufacturing"
                className="rounded-xl h-64 w-full object-cover border border-[#C9A961]/20"
              />
              <img
                src="https://images.unsplash.com/photo-1670689334799-cdc6777db8cc"
                alt="Plant Facility"
                className="rounded-xl h-64 w-full object-cover border border-[#C9A961]/20 mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-10 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0B0B0B] border border-[#C9A961]/20 hover:border-[#C9A961]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A961]/20">
              <div className="w-16 h-16 bg-[#C9A961]/10 rounded-xl flex items-center justify-center mb-6 border border-[#C9A961]/30">
                <Target className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To deliver high-quality bitumen products with unwavering consistency and build long-term trust 
                with our clients through superior quality, competitive pricing, and reliable service. We are 
                committed to supporting infrastructure development across the nation.
              </p>
            </div>

            {/* Vision */}
            <div className="p-10 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0B0B0B] border border-[#C9A961]/20 hover:border-[#C9A961]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9A961]/20">
              <div className="w-16 h-16 bg-[#C9A961]/10 rounded-xl flex items-center justify-center mb-6 border border-[#C9A961]/30">
                <Eye className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become the leading infrastructure material provider in India, recognized for innovation, 
                quality excellence, and sustainable practices. We envision a future where Km Chemicals is 
                the first choice for contractors and infrastructure companies nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded-full">
              <span className="text-[#C9A961] text-sm font-semibold">CORE VALUES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Drives Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Quality First', desc: 'Uncompromising standards in every product' },
              { icon: Users, title: 'Customer Focus', desc: 'Building lasting relationships through service' },
              { icon: TrendingUp, title: 'Innovation', desc: 'Continuous improvement and technology adoption' },
              { icon: Clock, title: 'Reliability', desc: 'On-time delivery and consistent supply' }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-xl bg-[#0B0B0B] border border-[#C9A961]/20 hover:border-[#C9A961]/60 transition-all duration-300 hover:transform hover:-translate-y-2 text-center"
                >
                  <div className="w-14 h-14 bg-[#C9A961]/10 rounded-xl flex items-center justify-center mb-4 mx-auto border border-[#C9A961]/30">
                    <Icon className="w-7 h-7 text-[#C9A961]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-gray-400 text-sm">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plant Capacity Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#0B0B0B] to-[#1a1a1a] border-y border-[#C9A961]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">World-Class Infrastructure</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our manufacturing facility spans across acres of industrial land, equipped with cutting-edge 
                technology and modern machinery. With a production capacity exceeding 50,000 tons annually, 
                we are capable of handling large-scale orders while maintaining consistent quality.
              </p>
              <ul className="space-y-4">
                {[
                  'ISO 9001:2015 certified manufacturing processes',
                  'Advanced quality control laboratory',
                  'Efficient logistics and distribution network',
                  'Experienced technical team',
                  'Environment-friendly production methods'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#C9A961]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#C9A961]/30">
                      <div className="w-2 h-2 bg-[#C9A961] rounded-full"></div>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/6048394/pexels-photo-6048394.jpeg"
                alt="Plant Facility"
                className="rounded-xl w-full h-full object-cover border border-[#C9A961]/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
