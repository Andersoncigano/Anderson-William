import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

// --- ÁREA DE EDIÇÃO DA FOTO ---
// Link direto fornecido pelo usuário
const USER_IMAGE_URL = "https://i.ibb.co/1f76wLvJ/sombra.png"; 
// ------------------------------

const Hero: React.FC = () => {
  // Lógica de imagem: 
  // 1. Usa o link que você colocar em USER_IMAGE_URL
  // 2. Se estiver vazio ou der erro, usa a imagem de exemplo do Unsplash (Homem de casaco preto)
  const fallbackImage = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop";
  
  // Decide qual imagem iniciar: Se o usuário colocou link, usa ele. Se não, tenta 'profile.png' local.
  const initialImage = USER_IMAGE_URL || "/profile.png";

  const [imgSrc, setImgSrc] = useState(initialImage);

  const handleImageError = () => {
    // Se a imagem falhar (link errado ou arquivo não existe), muda para o fallback
    if (imgSrc !== fallbackImage) {
      setImgSrc(fallbackImage);
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col md:flex-row bg-gray-50 overflow-hidden">
      {/* Left Column: Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-gray-50 flex flex-col justify-end items-center">
        <img 
          src={imgSrc} 
          onError={handleImageError}
          alt={PERSONAL_INFO.name} 
          className="w-full h-full object-cover object-top grayscale transition-opacity duration-500"
        />
        {/* Subtle gradient overlay at bottom to blend cutout if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50/20 to-transparent mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Right Column: Content */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-6 md:p-12 bg-gray-50 relative">
        
        {/* Main Content Container - Clean, no borders */}
        <div className="w-full max-w-lg relative text-center z-10">
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-brandBlack font-extrabold leading-tight mb-6">
            {PERSONAL_INFO.name}
          </h1>

          <div className="w-16 h-1 bg-brandBlack mx-auto my-6"></div>

          <h2 className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-[0.2em] flex flex-col items-center gap-2">
            <span>Diretor de Arte</span>
            <span>e Inteligência Artificial</span>
          </h2>
        </div>

        {/* Minimalist Background decoration elements (optional, kept subtle) */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white -z-0 rounded-full opacity-40"></div>
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-white -z-0 rounded-full opacity-40"></div>

      </div>
    </section>
  );
};

export default Hero;