"use client";

import React from 'react';

export const supportTiersData = [
  {
    id: "1",
    price: "R$ 2 até R$ 4",
    title: "Venha para nosso grupo conhecer os projetos",
    description: "Logo mais vamos liberar os links para acessar os grupos!",
    ctaText: "Ver mais...",
    link: "https://apoia.se/",
    isRecommended: false
  },
  {
    id: "2",
    price: "R$ 5 até R$ 8",
    title: "O Guia iniciante TI",
    description: "Acesse o nosso guia construído pelo Wouerner Brandão.",
    ctaText: "Ver mais...",
    link: "https://apoia.se/",
    isRecommended: true
  },
  {
    id: "3",
    price: "R$ 9 ou +",
    title: "Participar nos hackathons",
    description: "Para poder participar dos hackathons online da SouJunior.",
    ctaText: "Ver mais...",
    link: "https://apoia.se/",
    isRecommended: false
  }
];

export default function SupportCTASection() {
  return (
    <section id="como-apoiar" className="section-reveal w-full bg-gradient-to-b from-teal-500 to-[#3C7EF9] py-24 px-6 lg:px-12" aria-label="Apoie a SouJunior no Apoia.se">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Apoie a SouJunior no <span className="text-[#FFCC00]">Apoia.se</span>
          </h2>
          <p className="text-xl text-white/90">
            Juntos, podemos continuar transformando vidas através da tecnologia.
          </p>
        </div>

        {/* Grid de Níveis de Benefícios */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mb-16 items-start">
          {supportTiersData.map((tier) => (
            <div 
              key={tier.id} 
              className={`card-hover relative bg-white rounded-3xl p-8 flex flex-col h-full shadow-lg transition-transform ${
                tier.isRecommended 
                  ? 'ring-4 ring-[#FFCC00] lg:-translate-y-4 shadow-2xl' 
                  : 'mt-0 lg:mt-4'
              }`}
            >
              {tier.isRecommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFCC00] text-black font-extrabold text-sm px-5 py-1.5 rounded-full shadow-md whitespace-nowrap uppercase tracking-wide">
                  Apoio recomendado!
                </div>
              )}
              
              <div className="text-[#5B50F6] font-black text-2xl mb-4">
                {tier.price}
              </div>
              
              <h3 className="font-bold text-slate-900 text-xl mb-4">
                {tier.title}
              </h3>
              
              <p className="text-slate-600 flex-grow mb-8 font-medium">
                {tier.description}
              </p>
              
              <a 
                href={tier.link === "https://apoia.se/" ? "https://apoia.se/soujunior" : tier.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#5B50F6] font-bold hover:text-indigo-800 transition-colors inline-block group"
              >
                <span className="border-b-2 border-transparent group-hover:border-indigo-800 transition-colors">
                  {tier.ctaText}
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Principal */}
        <div className="flex flex-col items-center">
          <a 
            href="https://apoia.se/soujunior" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#FFCC00] hover:bg-[#EAB308] text-black font-extrabold text-xl py-5 px-12 rounded-xl transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 focus:ring-4 focus:ring-yellow-400/50 outline-none mb-4"
          >
            Apoie agora
          </a>
          <span className="text-white/80 text-sm font-medium">
            A partir de R$ 2,00
          </span>
        </div>

      </div>
    </section>
  );
}
