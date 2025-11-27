
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-brandWhite text-brandBlack scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-bold uppercase tracking-tighter mb-14 bg-black text-white px-5 py-1.5 inline-block border-2 border-black transition-all duration-300 hover:bg-white hover:text-black hover:tracking-widest cursor-default">
          Conhecimentos
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((cat, index) => (
            <div 
              key={index} 
              className="flex flex-col h-full p-6 rounded-2xl transition-all duration-500 hover:bg-black hover:shadow-2xl hover:-translate-y-2 group cursor-default border border-transparent"
            >
              <h4 className="text-lg font-extrabold uppercase mb-6 tracking-wide self-start transition-colors duration-300 group-hover:text-white border-b-2 border-black group-hover:border-white pb-1">
                {cat.title}
              </h4>
              <ul className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <li 
                    key={i} 
                    className="text-sm border-b border-gray-300 pb-2 last:border-0 transition-colors duration-300 group-hover:text-gray-300 group-hover:border-gray-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
