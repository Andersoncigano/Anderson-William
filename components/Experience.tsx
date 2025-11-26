import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-brandWhite text-brandBlack">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold uppercase tracking-tighter mb-16 bg-black text-white px-6 py-2 inline-block border-2 border-black transition-all duration-300 hover:bg-white hover:text-black hover:tracking-widest cursor-default">
          Experiências
        </h3>

        <div className="space-y-16">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 group">
              <div className="md:col-span-3 text-lg font-bold text-gray-500 group-hover:text-black transition-colors">
                {exp.year}
              </div>
              <div className="md:col-span-9">
                <h4 className="text-2xl font-bold uppercase mb-2">
                  {exp.company}
                </h4>
                {exp.role && (
                  <div className="text-sm uppercase tracking-widest font-semibold mb-4 text-gray-600">
                    {exp.role}
                  </div>
                )}
                <ul className="space-y-2 text-gray-800 leading-relaxed">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 mt-2 block w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;