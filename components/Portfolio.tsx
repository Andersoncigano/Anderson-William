import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-brandBlack text-brandWhite">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-white/20 pb-6">
          <h3 className="text-4xl font-bold uppercase tracking-tighter">
            Trabalhos
          </h3>
          <a 
            href="https://www.behance.net/" 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-gray-400 transition-colors"
          >
            Ver Behance <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item) => (
            <div key={item.id} className="group relative aspect-square overflow-hidden bg-gray-900 cursor-pointer">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs text-gray-300 uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.category}
                </span>
                <h4 className="text-xl font-bold uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a 
            href="https://www.behance.net/" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
          >
            Ver Behance Completo <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;