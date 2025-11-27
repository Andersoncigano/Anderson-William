
import React from 'react';
import { SERVICES } from '../constants';
import { PenTool, Video, Bot, Layout } from 'lucide-react';

const iconMap = {
  PenTool: PenTool,
  Video: Video,
  Bot: Bot,
  Layout: Layout
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-6 bg-brandWhite text-brandBlack scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl font-bold uppercase tracking-tighter mb-14 bg-black text-white px-5 py-1.5 inline-block border-2 border-black transition-all duration-500 hover:invert hover:tracking-widest cursor-default">
          O que faço
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName];
            
            return (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-white border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:border-black/10 hover:-translate-y-2 cursor-default"
              >
                <div className="mb-6 inline-block p-3 rounded-xl bg-gray-50 text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <IconComponent size={24} />
                </div>
                
                <h4 className="text-lg font-bold uppercase mb-3 tracking-tight group-hover:tracking-wide transition-all duration-300">
                  {service.title}
                </h4>
                
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
