"use client";

import React from 'react';
import { MessageSquare, MessageCircle, Code, HeartHandshake } from 'lucide-react';

export const officialChannels = [
  {
    name: "Discord",
    description: "Dúvidas e comunidade",
    href: "https://discord.com/invite/FkBcf3vdQZ",
    icon: MessageSquare,
    hoverColor: "group-hover:text-[#5865F2]"
  },
  {
    name: "WhatsApp",
    description: "Grupo de avisos",
    href: "https://chat.whatsapp.com/JJzCMlqMKlw1YOhOk7QB3W",
    icon: MessageCircle,
    hoverColor: "group-hover:text-[#25D366]"
  },
  {
    name: "GitHub",
    description: "Projetos e contribuições",
    href: "https://github.com/SouJunior",
    icon: Code,
    hoverColor: "group-hover:text-white"
  },
  {
    name: "Apoia.se",
    description: "Apoie a causa",
    href: "https://apoia.se/soujunior",
    icon: HeartHandshake,
    hoverColor: "group-hover:text-[#FFCC00]"
  }
];

export default function OfficialChannelsSection() {
  return (
    <section id="canais" className="section-reveal w-full bg-gradient-to-b from-[#3C7EF9] to-[#0E14BF] py-24 px-6 lg:px-12" aria-label="Canais Oficiais">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Faça parte da <span className="text-[#FFCC00]">comunidade.</span>
          </h2>
          <p className="text-xl text-gray-300">
            Fique por dentro de tudo o que acontece na SouJunior e venha fazer parte dessa comunidade.
          </p>
        </div>

        {/* Grid de Canais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {officialChannels.map((channel, index) => {
            const IconComponent = channel.icon;
            
            return (
              <a
                key={index}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acessar ${channel.name}`}
                className="card-hover group relative bg-[#1E293B]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-[#1E293B] hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 focus:ring-4 focus:ring-white/10 outline-none"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-inner">
                  <IconComponent size={28} className={`text-gray-400 transition-colors duration-300 ${channel.hoverColor}`} />
                </div>
                
                <div className="flex flex-col justify-center">
                  <h3 className="text-white text-xl font-bold mb-1">{channel.name}</h3>
                  <p className="text-gray-400 font-medium text-sm">{channel.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
