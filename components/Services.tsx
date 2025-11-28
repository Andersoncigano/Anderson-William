
import React from 'react';
import { SERVICES } from '../constants';
import { PenTool, Video, Bot, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold uppercase tracking-tighter mb-14 bg-black text-white px-5 py-1.5 inline-block border-2 border-black transition-all duration-300 hover:invert hover:tracking-widest cursor-default"
        >
          O que eu faço
        </motion.h3>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName];
            
            return (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40 } }
                }}
                className="group p-8 rounded-2xl bg-white border border-gray-100 transition-all duration-300 ease-out hover:shadow-2xl hover:border-transparent hover:-translate-y-2 cursor-default hover:bg-black"
              >
                {/* Icon Box: Fundo Cinza -> Branco no Hover */}
                <div className="mb-6 inline-block p-3 rounded-xl bg-gray-50 text-black group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <IconComponent size={24} />
                </div>
                
                {/* Título: Preto -> Branco no Hover */}
                <h4 className="text-lg font-bold uppercase mb-3 tracking-tight group-hover:tracking-wide transition-all duration-300 group-hover:text-white">
                  {service.title}
                </h4>
                
                {/* Descrição: Cinza -> Branco no Hover */}
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;