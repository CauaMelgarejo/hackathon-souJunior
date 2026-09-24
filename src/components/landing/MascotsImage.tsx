"use client";

import Image from "next/image";
import { useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface MascotsImageProps {
  /** Caminho da imagem em /public. Padrão: /images/mascotes.png */
  src?: string;
  className?: string;
}

// ─── Placeholder CSS ─────────────────────────────────────────────────────────
// Exibido apenas se a imagem real falhar ao carregar.

function MascotsPlaceholder() {
  return (
    <div
      role="img"
      aria-label="Espaço reservado para os mascotes da SouJunior"
      className="w-full h-full flex flex-col items-center justify-center gap-4"
    >
      <div className="flex items-end gap-3">
        {/* Mascote principal (azul) */}
        <div className="relative flex flex-col items-center" aria-hidden="true">
          <div className="w-24 h-24 rounded-full bg-blue-400 relative shadow-lg shadow-blue-900/40">
            <div className="absolute top-7 left-4 w-5 h-5 rounded-full bg-white">
              <div className="absolute top-1 left-1 w-3 h-3 rounded-full bg-gray-800" />
            </div>
            <div className="absolute top-7 right-4 w-5 h-5 rounded-full bg-white">
              <div className="absolute top-1 left-1 w-3 h-3 rounded-full bg-gray-800" />
            </div>
            <div className="absolute -top-2 left-5 w-14 h-4 rounded-full bg-blue-500" />
          </div>
          <div className="w-20 h-20 rounded-2xl bg-white mt-1 flex items-center justify-center shadow-md">
            <span className="text-blue-700 font-bold text-xs text-center leading-tight">
              Sou<br />Junior
            </span>
          </div>
        </div>

        {/* Mascote secundário (verde) */}
        <div className="relative flex flex-col items-center mb-2" aria-hidden="true">
          <div className="w-16 h-16 rounded-full bg-green-400 relative shadow-lg shadow-green-900/40">
            <div className="absolute top-4 left-2.5 w-4 h-4 rounded-full bg-white">
              <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-gray-800" />
            </div>
            <div className="absolute top-4 right-2.5 w-4 h-4 rounded-full bg-white">
              <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-gray-800" />
            </div>
            <div className="absolute -top-1 left-4 w-8 h-3 rounded-full bg-green-500" />
          </div>
          <div className="w-14 h-14 rounded-xl bg-white mt-1 flex items-center justify-center shadow-md">
            <span className="text-green-600 font-bold text-xs text-center leading-tight">
              Sou<br />Junior<br />Labs
            </span>
          </div>
        </div>
      </div>

      <p className="text-white/40 text-xs text-center max-w-[180px] leading-snug">
        Coloque a imagem em{" "}
        <code className="text-yellow-400/70">public/images/mascotes.png</code>
      </p>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function MascotsImage({ src, className = "" }: MascotsImageProps) {
  // Usa o nome correto do arquivo adicionado pelo usuário: mascotes.png
  const imageSrc = src ?? "/images/mascotes.png";

  // Controla se a imagem falhou — se sim, exibe o placeholder
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Glow decorativo atrás dos mascotes */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #5578ff 0%, transparent 70%)" }}
      />

      <div className="relative z-10 w-full h-full">
        {imgError ? (
          <MascotsPlaceholder />
        ) : (
          <Image
            src={imageSrc}
            alt="Mascotes da SouJunior — dois personagens representando a comunidade de tecnologia"
            fill
            className="object-contain object-bottom drop-shadow-2xl"
            priority
            onError={() => setImgError(true)}
          />
        )}
      </div>
    </div>
  );
}

export { MascotsPlaceholder };
