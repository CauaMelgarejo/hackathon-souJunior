"use client";

import { motion, type Variants } from "framer-motion";
import MascotsImage from "./MascotsImage";

// ─── Constants ───────────────────────────────────────────────────────────────

const APOIA_SE_URL = "https://apoia.se/soujunior";
const COMMUNITY_URL = "https://www.soujunior.tech/";

// ─── Animation Variants ───────────────────────────────────────────────────────

// Cubic-bezier tipado como tupla para satisfazer o tipo BezierDefinition do Framer Motion
const EASE_OUT_EXPO = [0.22, 0.61, 0.36, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

const mascotsVariants: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.94 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.25 },
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function HeroTitle() {
  return (
    <motion.h1
      variants={fadeUp}
      className="text-hero-title text-white"
      style={{ maxWidth: "680px" }}
    >
      {/* "Juntos," em amarelo conforme referência */}
      <span className="text-yellow-400">Juntos,</span>{" "}
      <span>impulsionamos o</span>
      <br />
      <span>futuro da tecnologia.</span>
    </motion.h1>
  );
}

function HeroDescription() {
  return (
    <motion.p
      variants={fadeUp}
      className="text-hero-body max-w-[540px]"
    >
      A SouJunior é uma comunidade que acredita no potencial de profissionais
      juniores. Por meio de mentorias gratuitas, projetos open-source e
      oportunidades, ajudamos pessoas a dar os primeiros passos e crescer na
      área de tecnologia.
    </motion.p>
  );
}

function HeroCTAs() {
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col sm:flex-row gap-4"
      role="group"
      aria-label="Ações principais"
    >
      <a
        href={APOIA_SE_URL}
        target="_blank"
        rel="noopener noreferrer"
        id="hero-cta-apoia-se"
        className="btn-primary text-base px-7 py-4"
        aria-label="Apoie no Apoia.se — abre em nova aba"
      >
        Apoie no Apoia.se
      </a>

      <a
        href={COMMUNITY_URL}
        target="_blank"
        rel="noopener noreferrer"
        id="hero-cta-community"
        className="btn-secondary text-base px-7 py-4"
        aria-label="Conheça a comunidade SouJunior"
      >
        Conheça a comunidade
      </a>
    </motion.div>
  );
}

function HeroSupportText() {
  return (
    <motion.p
      variants={fadeIn}
      className="text-white/75 text-sm font-medium"
    >
      A partir de{" "}
      <strong className="text-yellow-400 font-bold">R$ 2,00</strong>, você já
      pode fazer parte dessa transformação.
    </motion.p>
  );
}

// ─── Main Hero Component ──────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col section-reveal"
    >
      {/* Decorative orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #7b9fff 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #a0b4ff 0%, transparent 70%)" }}
      />

      {/* Hero content */}
      <div
        className="relative z-10 flex-1 flex items-center"
        style={{ padding: "3rem var(--section-padding-x) var(--section-padding-y)" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT — Text content */}
            <motion.div
              className="flex flex-col gap-6 lg:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
      

              {/* H1 — main heading */}
              <div id="hero-heading">
                <HeroTitle />
              </div>

              <HeroDescription />
              <HeroCTAs />
              <HeroSupportText />
            </motion.div>

            {/* RIGHT — Mascots illustration */}
            <motion.div
              variants={mascotsVariants}
              initial="hidden"
              animate="visible"
              className="flex justify-center lg:justify-end items-end"
              aria-hidden="false"
            >
              <MascotsImage
                className="
                  relative
                  w-full max-w-sm
                  h-72 sm:h-80 lg:h-[480px]
                "
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
