import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-brandWhite text-brandBlack">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold uppercase tracking-tighter mb-16 bg-black text-white px-6 py-2 inline-block border-2 border-black transition-all duration-500 hover:invert hover:tracking-widest cursor-default">
          Experiências
        </h3>

        <div className="space-y-16">
          {EXPERIENCES.map((exp, index) => {
            return (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 group transition-all duration-500 ease-out relative p-6 -mx-6 rounded-2xl cursor-default border border-transparent hover:bg-black hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Barra lateral animada que fica BRANCA no hover */}
                <div className="absolute left-0 top-4 bottom-4 w-1.5 bg-brandBlack group-hover:bg-white rounded-r-full scale-y-0 group-hover:scale-y-100 transition-all duration-500 origin-center"></div>

                <div className="md:col-span-3 text-sm font-bold text-gray-500 transition-colors duration-300 group-hover:text-white group-hover:translate-x-2">
                  {exp.year}
                </div>
                
                <div className="md:col-span-9 group-hover:translate-x-2 transition-transform duration-300">
                  <h4 className="text-lg font-bold uppercase mb-2 group-hover:tracking-wide transition-all duration-300 group-hover:text-white">
                    {exp.company}
                  </h4>
                  
                  {exp.role && (
                    <div className="text-[10px] uppercase tracking-widest font-semibold mb-4 text-gray-600 transition-colors duration-300 group-hover:text-gray-300">
                      {exp.role}
                    </div>
                  )}
                  
                  <ul className="space-y-2 text-xs text-gray-800 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 mt-2 block w-1.5 h-1.5 bg-black rounded-full shrink-0 transition-all duration-300 group-hover:bg-white group-hover:scale-150"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;