import React from 'react';
import { EDUCATION, COURSES } from '../constants';

const Education: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-brandBlack text-brandWhite border-t border-white/10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Formal Education */}
        <div>
          <h3 className="text-2xl font-bold uppercase tracking-widest mb-10 text-gray-400">
            Educação
          </h3>
          <div className="space-y-6">
            {EDUCATION.map((edu, index) => (
              <div 
                key={index} 
                className="group relative border-l-2 border-white/20 pl-6 py-4 rounded-r-xl transition-all duration-300 hover:border-white hover:bg-white/5 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/50 cursor-default"
              >
                <div className="text-sm text-gray-500 mb-1 group-hover:text-gray-300 transition-colors">
                  {edu.year}
                </div>
                <h4 className="text-xl font-bold uppercase mb-1 text-gray-200 group-hover:text-white transition-colors">
                  {edu.course}
                </h4>
                <div className="text-gray-400 group-hover:text-gray-200 transition-colors">
                  {edu.institution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Courses & Extras */}
        <div>
          <h3 className="text-2xl font-bold uppercase tracking-widest mb-10 text-gray-400">
            Complementares
          </h3>
          <ul className="space-y-4">
            {COURSES.map((course, index) => (
              <li 
                key={index} 
                className="group flex flex-col p-4 -ml-4 rounded-xl transition-all duration-300 hover:bg-white/5 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/50 cursor-default"
              >
                <span className="font-semibold text-lg text-gray-300 group-hover:text-white transition-colors">
                  {course.name}
                </span>
                <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                  {course.provider ? `${course.provider} • ` : ''}{course.year}
                </span>
              </li>
            ))}
            <li className="text-sm text-gray-600 italic mt-6 pt-4 border-t border-gray-800 ml-3 md:ml-0">
              Demais cursos e aperfeiçoamentos no LinkedIn.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Education;