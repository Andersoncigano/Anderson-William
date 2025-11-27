
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50 text-brandBlack scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl font-bold uppercase tracking-tighter mb-14 bg-black text-white px-5 py-1.5 inline-block border-2 border-black transition-all duration-500 hover:invert hover:tracking-widest cursor-default">
          O que dizem
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id} 
              className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:scale-[1.02] cursor-default"
            >
              <Quote size={40} className="absolute top-6 right-6 text-gray-100" />
              
              <p className="relative z-10 text-sm text-gray-700 leading-relaxed italic mb-8">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brandBlack text-white flex items-center justify-center font-bold text-xs">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black uppercase tracking-wide">
                    {item.author}
                  </h4>
                  <div className="text-xs text-gray-500 font-medium">
                    {item.role} @ {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
