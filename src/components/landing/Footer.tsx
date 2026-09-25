"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="section-reveal w-full bg-gradient-to-b from-[#0E14BF] to-[#6366F1] pt-16 pb-8 px-6 lg:px-12" aria-label="Rodapé">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Topo do Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Marca / Frase */}
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-black text-white tracking-tight">
              Sou<span className="text-[#FFCC00]">Junior</span>
            </div>
            <p className="text-gray-400 font-medium max-w-xs mt-1">
              A comunidade que impulsiona o seu futuro.
            </p>
          </div>

          {/* Links Rápidos */}
          <nav aria-label="Links rápidos" className="flex flex-wrap gap-x-8 gap-y-4">
            <a href="https://discord.com/invite/FkBcf3vdQZ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:underline transition-colors font-medium">Discord</a>
            <a href="https://chat.whatsapp.com/JJzCMlqMKlw1YOhOk7QB3W" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:underline transition-colors font-medium">WhatsApp</a>
            <a href="https://github.com/SouJunior" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:underline transition-colors font-medium">GitHub</a>
            <a href="https://apoia.se/soujunior" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:underline transition-colors font-medium">Apoia.se</a>
          </nav>
        </div>

        {/* Divisória e Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center md:items-start">
          <p className="text-gray-500 text-sm font-medium">
            © 2026 SouJunior. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
