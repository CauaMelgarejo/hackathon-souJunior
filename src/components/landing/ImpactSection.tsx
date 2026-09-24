"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { TrendingUp } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ImpactMetric {
  /** Rótulo em maiúsculas exibido no topo do card */
  label: string;
  /** Número principal de destaque */
  value: string;
  /** Informação complementar abaixo do número */
  description: string;
  /** Texto do badge de status (ex: "Em alta") */
  badge: string;
  /** Detalhe extra opcional abaixo da descrição */
  detail?: string;
}

// ─── Data — EDITE AQUI os valores reais das métricas ─────────────────────────
// Para atualizar os dados, basta modificar os campos abaixo.
// Não é necessário alterar nenhum componente de layout.

const IMPACT_METRICS: ImpactMetric[] = [
  {
    label: "APOIADORES",
    value: "+108",
    description: "92% alcançado",
    badge: "Em alta",
    detail: "Meta do mês",
  },
  {
    label: "PROJETOS",
    value: "3",
    description: "2 em andamento",
    badge: "Em alta",
    detail: "2 concluídos",
  },
  {
    label: "MENTORES ATIVOS",
    value: "35",
    description: "Disponíveis",
    badge: "Em alta",
    detail: "12 nesta semana",
  },
  {
    label: "PESSOAS EMPREGADAS",
    value: "50",
    description: "Através da SouJunior",
    badge: "Em alta",
    detail: "↑ +12%",
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const EASE_SMOOTH = [0.22, 0.61, 0.36, 1] as [number, number, number, number];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_SMOOTH },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE_SMOOTH },
  },
};

// ─── ImpactMetricCard ─────────────────────────────────────────────────────────

function ImpactMetricCard({ metric }: { metric: ImpactMetric }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="
        bg-white rounded-2xl p-5
        shadow-[0_2px_12px_rgba(0,0,0,0.08)]
        flex flex-col justify-between
        min-h-[148px]
        relative
        overflow-hidden
      "
      aria-label={`Métrica: ${metric.label}`}
    >
      {/* Linha superior: label + badge */}
      <div className="flex items-start justify-between gap-2">
        <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase leading-tight">
          {metric.label}
        </span>

        <span
          className="
            inline-flex items-center gap-1
            bg-emerald-50 text-emerald-600
            text-[10px] font-semibold
            px-2 py-0.5 rounded-full
            border border-emerald-100
            whitespace-nowrap
          "
          aria-label={`Status: ${metric.badge}`}
        >
          <TrendingUp size={9} strokeWidth={2.5} aria-hidden="true" />
          {metric.badge}
        </span>
      </div>

      {/* Valor principal */}
      <div className="mt-2">
        <p
          className="text-[2.25rem] font-black leading-none tracking-tight text-gray-900"
          aria-label={`Valor: ${metric.value}`}
        >
          {metric.value}
        </p>
      </div>

      {/* Informação complementar + detalhe */}
      <div className="mt-auto pt-3 flex items-end justify-between gap-1">
        <span className="text-[11px] font-medium text-gray-500 leading-snug">
          {metric.description}
        </span>
        {metric.detail && (
          <span className="text-[10px] text-gray-400 font-normal text-right">
            {metric.detail}
          </span>
        )}
      </div>
    </motion.article>
  );
}

// ─── ImpactSection ────────────────────────────────────────────────────────────

export default function ImpactSection() {
  const ref = useRef<HTMLElement>(null);

  // Dispara as animações apenas quando a seção entra no viewport
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="impacto"
      ref={ref}
      aria-labelledby="impact-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f1f7a 0%, #1a3cbe 35%, #2340cc 60%, #3a30d9 85%, #4a28e0 100%)",
      }}
    >
      {/* Orb decorativo */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #818cf8 0%, transparent 70%)",
        }}
      />

      {/* Conteúdo principal */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto"
        style={{
          padding:
            "clamp(3.5rem, 8vh, 5.5rem) var(--section-padding-x)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── COLUNA ESQUERDA — Texto ───────────────────────────── */}
          <div className="flex flex-col gap-6">

            {/* Eyebrow */}
            <motion.div variants={fadeUp}>
              <span
                className="
                  inline-flex items-center gap-2
                  bg-white/10 text-white/90
                  text-xs font-semibold
                  px-4 py-1.5 rounded-full
                  border border-white/15
                  backdrop-blur-sm
                "
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                  aria-hidden="true"
                />
                Impacto real
              </span>
            </motion.div>

            {/* H2 */}
            <motion.h2
              id="impact-heading"
              variants={fadeUp}
              className="text-white font-black leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Um impacto que vai além
              <br />
              do código
            </motion.h2>

            {/* Descrição */}
            <motion.p
              variants={fadeUp}
              className="text-white/80 leading-relaxed max-w-[420px]"
              style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)" }}
            >
              Cada pessoa que chega, aprende e se desenvolve com a SouJunior
              representa um passo a mais para um futuro com mais oportunidades
              na área de tecnologia.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <a
                href="#impacto-detalhes"
                id="impact-cta"
                className="btn-primary inline-flex text-sm px-6 py-3.5"
                aria-label="Conheça mais sobre o impacto da SouJunior"
              >
                Conheça mais sobre o impacto
              </a>
            </motion.div>
          </div>

          {/* ── COLUNA DIREITA — Grid 2×2 de cards ───────────────── */}
          <div
            className="grid grid-cols-2 gap-3 sm:gap-4"
            role="list"
            aria-label="Métricas de impacto da SouJunior"
          >
            {IMPACT_METRICS.map((metric) => (
              <div key={metric.label} role="listitem">
                <ImpactMetricCard metric={metric} />
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
