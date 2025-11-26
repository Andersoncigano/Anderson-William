import React from 'react';
import { Mail, Linkedin, Instagram, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-brandWhite text-brandBlack">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold uppercase tracking-tighter mb-12 bg-black text-white px-6 py-2 inline-block border-2 border-black transition-all duration-300 hover:bg-white hover:text-black hover:tracking-widest cursor-default">
          Vamos Conversar?
        </h3>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Estou disponível para novos projetos e colaborações.
        </p>

        <a 
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold hover:text-red-600 transition-colors mb-16 border-b-2 border-black hover:border-red-600 pb-1"
        >
          <Mail className="w-6 h-6 md:w-8 md:h-8" />
          {PERSONAL_INFO.email}
        </a>

        <div className="flex justify-center gap-6 md:gap-12">
          <SocialLink 
            href="#" 
            icon={<Linkedin size={32} />} 
            label="LinkedIn" 
            color="hover:text-[#0077b5]"
          />
          <SocialLink 
            href="#" 
            icon={<Phone size={32} />} 
            label="WhatsApp" 
            color="hover:text-[#25D366]"
          />
          <SocialLink 
            href="#" 
            icon={<Instagram size={32} />} 
            label="Instagram" 
            color="hover:text-[#E4405F]"
          />
          <SocialLink 
            href="https://behance.net" 
            icon={<span className="font-bold text-2xl">Be</span>} 
            label="Behance" 
            color="hover:text-[#1769ff]"
          />
        </div>

        <div className="mt-24 text-sm text-gray-400 uppercase tracking-widest">
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
    className={`flex flex-col items-center gap-3 group transition-colors duration-300 ${color}`}
    aria-label={label}
  >
    <div className="p-4 rounded-full bg-gray-100 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
      {icon}
    </div>
    <span className="text-xs uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
      {label}
    </span>
  </a>
);

export default Contact;