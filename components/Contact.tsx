
import React from 'react';
import { Mail, Linkedin, Instagram, Phone, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-brandWhite text-brandBlack scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-bold uppercase tracking-tighter mb-10 bg-black text-white px-5 py-1.5 inline-block border-2 border-black transition-all duration-300 hover:bg-white hover:text-black hover:tracking-widest cursor-default">
          Vamos Conversar?
        </h3>
        <p className="text-sm text-gray-600 mb-10 max-w-2xl mx-auto">
          Estou disponível para novos projetos e colaborações.
        </p>

        <a 
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-3 text-lg md:text-xl font-black tracking-wide px-8 py-4 rounded-full border-2 border-black/5 bg-white text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-black hover:shadow-xl hover:-translate-y-1 mb-14 group"
        >
          <Mail className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
          {PERSONAL_INFO.email}
        </a>

        <div className="flex justify-center gap-6 md:gap-10">
          <SocialLink 
            href="https://www.linkedin.com/in/anderson-w-28a010a8/" 
            icon={<Linkedin size={24} />} 
            label="LinkedIn" 
            color="hover:text-[#0077b5]"
          />
          <SocialLink 
            href="https://wa.me/5551993171197" 
            icon={<Phone size={24} />} 
            label="WhatsApp" 
            color="hover:text-[#25D366]"
          />
          <SocialLink 
            href="https://www.instagram.com/andersonnhrs/" 
            icon={<Instagram size={24} />} 
            label="Instagram" 
            color="hover:text-[#E4405F]"
          />
          <SocialLink 
            href="https://www.behance.net/andersonnh" 
            icon={<span className="font-bold text-lg">Be</span>} 
            label="Behance" 
            color="hover:text-[#1769ff]"
          />
          <SocialLink 
            href="https://github.com/" 
            icon={<Github size={24} />} 
            label="GitHub" 
            color="hover:text-[#333]"
          />
        </div>

        <div className="mt-20 text-[9px] text-gray-400 uppercase tracking-widest">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Todos os direitos reservados.
        </div>
      </div>
    </section>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, color }) => (
  <a 
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`flex flex-col items-center gap-2 group transition-colors duration-300 ${color}`}
    aria-label={label}
  >
    <div className="p-3.5 rounded-full bg-gray-100 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
      {icon}
    </div>
    <span className="text-[8px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
      {label}
    </span>
  </a>
);

export default Contact;
