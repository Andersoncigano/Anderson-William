
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

// --- ÁREA DE EDIÇÃO DA FOTO ---
const USER_IMAGE_URL = "https://i.ibb.co/zC8jtbr/sombra.png"; 
// ------------------------------

const Hero: React.FC = () => {
  const fallbackImage = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop";
  const initialImage = USER_IMAGE_URL || "/profile.png";
  const [imgSrc, setImgSrc] = useState(initialImage);

  const handleImageError = () => {
    if (imgSrc !== fallbackImage) {
      setImgSrc(fallbackImage);
    }
  };

  // Variantes de animação para orquestração
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex flex-col md:flex-row bg-gray-50 overflow-hidden">
      {/* Left Column: Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-gray-50 flex flex-col justify-end items-center">
        
        {/* Container da imagem */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full h-full flex items-end justify-center pb-0 cursor-default"
        >
          {/* Imagem Principal (Base) - Otimizada para evitar cortes */}
          <img 
            src={imgSrc} 
            onError={handleImageError}
            alt={PERSONAL_INFO.name} 
            className="relative z-10 w-auto h-auto max-w-full max-h-[85%] md:max-h-[90%] object-contain object-bottom"
          />
        </motion.div>

      </div>

      {/* Right Column: Content */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center md:justify-start p-6 md:pl-0 bg-gray-50 relative z-30">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl relative text-left z-10 md:-ml-20 lg:-ml-24"
        >
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl text-brandBlack font-black leading-none mb-8 tracking-tighter transition-all duration-500 hover:text-gray-600 hover:drop-shadow-xl hover:tracking-tight cursor-default"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          <motion.div 
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: { width: 80, opacity: 1, transition: { duration: 0.8, delay: 0.8 } }
            }}
            className="h-1 bg-brandBlack my-8"
          ></motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-xs md:text-base lg:text-lg font-bold text-gray-700 uppercase tracking-[0.25em] flex flex-col items-start gap-3 transition-all duration-500 hover:bg-black hover:text-white p-3 -ml-3 rounded-lg cursor-default"
          >
            <span>Diretor de Arte</span>
            <span>e Inteligência Artificial</span>
          </motion.h2>
        </motion.div>

        {/* Background blobs com movimento fluido */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white rounded-full opacity-40"
        ></motion.div>
        
        <motion.div 
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-white rounded-full opacity-40"
        ></motion.div>

      </div>
    </section>
  );
};

export default Hero;
