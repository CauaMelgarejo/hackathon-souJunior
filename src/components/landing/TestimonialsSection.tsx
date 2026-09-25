"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const testimonialsData = [
  {
    id: "1",
    author: "Ana Clara",
    role: "Dev Frontend Jr",
    avatarUrl: "/avatars/user1.png",
    testimonial: "A SouJunior me deu o empurrão que eu precisava para acreditar que era possível. Hoje continuo aprendendo e evoluindo junto com a comunidade."
  },
  {
    id: "2",
    author: "Carlos Silva",
    role: "QA Engineer Jr",
    avatarUrl: "/avatars/user2.png",
    testimonial: "As mentorias foram fundamentais para o meu crescimento. Aprendi muito e fiz conexões que levo para minha carreira."
  },
  {
    id: "3",
    author: "Mariana Costa",
    role: "Voluntária",
    avatarUrl: "/avatars/user3.png",
    testimonial: "Contribuir com a SouJunior é incrível! É gratificante ver o impacto que a comunidade gera na vida de tantas pessoas."
  },
  {
    id: "4",
    author: "Rafael Souza",
    role: "Dev Backend Jr",
    avatarUrl: "/avatars/user4.png",
    testimonial: "Graças aos projetos práticos e à troca de conhecimentos constante, consegui minha primeira vaga em tecnologia. Recomendo a todos!"
  },
  {
    id: "5",
    author: "Fernanda Lima",
    role: "UX/UI Designer",
    avatarUrl: "/avatars/user5.png",
    testimonial: "Os desafios me ajudaram a montar meu portfólio. As feedbacks das mentorias foram super precisos e essenciais na minha evolução."
  }
];

// Array de cores dinâmicas para os avatares (caso não tenha foto)
const avatarColors = [
  "bg-[#3B82F6]", // blue
  "bg-[#8B5CF6]", // violet
  "bg-[#F43F5E]", // rose
  "bg-[#10B981]", // emerald
  "bg-[#F59E0B]", // amber
];

const getAvatarColor = (index: number) => avatarColors[index % avatarColors.length];

export default function TestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      // Avança a largura de aproximadamente um card + gap
      const scrollAmount = carouselRef.current.clientWidth > 768 ? 350 : carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth > 768 ? 350 : carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="depoimentos" className="section-reveal w-full relative overflow-hidden bg-gradient-to-b from-[#6366F1] via-blue-600 to-teal-500 py-24 px-6 lg:px-12" aria-label="Histórias e Depoimentos">
      
      {/* Efeito de luz sutil no fundo */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-14 relative z-10">
        
        {/* Cabeçalho com Título, Subtítulo e Controles */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              Histórias <span className="italic font-black text-white/90 border-b-4 border-[#FFCC00]">reais</span>, conquistas <span className="italic font-black text-white/90 border-b-4 border-[#FFCC00]">reais</span>.
            </h2>
            <p className="text-xl text-white/90 leading-relaxed font-medium">
              Conheça algumas das pessoas que tiveram suas trajetórias transformadas pela <span className="text-[#FFCC00] font-black drop-shadow-md">SouJunior</span>.
            </p>
          </div>
          
          {/* Botões de navegação */}
          <div className="flex gap-4">
            <button 
              onClick={scrollLeft}
              aria-label="Anterior" 
              className="p-3 lg:p-4 rounded-full bg-white/10 hover:bg-white/25 transition-all text-white focus:outline-none focus:ring-2 focus:ring-[#FFCC00] active:scale-90 shadow-xl backdrop-blur-md border border-white/10"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight}
              aria-label="Próximo" 
              className="p-3 lg:p-4 rounded-full bg-white/10 hover:bg-white/25 transition-all text-white focus:outline-none focus:ring-2 focus:ring-[#FFCC00] active:scale-90 shadow-xl backdrop-blur-md border border-white/10"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carrossel / Slider Horizontal */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 lg:gap-8 pb-12 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="snap-center shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] bg-white rounded-3xl p-8 lg:p-10 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative border-t-8 border-transparent hover:border-[#FFCC00]"
            >
              {/* Aspas decorativas */}
              <div className="absolute top-6 left-6 text-slate-100 opacity-60">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Avatar Dinâmico */}
              <div className={`relative z-10 w-20 h-20 rounded-full mb-6 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg text-white font-extrabold text-2xl uppercase group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ${getAvatarColor(index)}`}>
                {testimonial.author.charAt(0)}
              </div>
              
              {/* Texto */}
              <p className="text-slate-600 italic mb-8 flex-grow text-lg leading-relaxed relative z-10 font-medium">
                &quot;{testimonial.testimonial}&quot;
              </p>
              
              {/* Autor */}
              <div className="mt-auto relative z-10">
                <h4 className="font-bold text-slate-900 text-xl group-hover:text-blue-600 transition-colors">{testimonial.author}</h4>
                <p className="text-[#FF8C55] font-semibold text-sm mt-1 tracking-wide">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
