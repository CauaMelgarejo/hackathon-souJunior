"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ─── Types ───────────────────────────────────────────────────────────────────

interface NavLink {
  label: string;
  href: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Impacto", href: "#impacto" },
  { label: "Como apoiar", href: "#como-apoiar" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Canais", href: "#canais" },
];

const APOIA_SE_URL = "https://apoia.se/soujunior";
const SOU_JUNIOR_SITE_URL = "https://www.soujunior.tech";

// ─── Animations ──────────────────────────────────────────────────────────────

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -12, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] as [number, number, number, number] },
  },
};

// ─── Logo Component ──────────────────────────────────────────────────────────

function Logo() {
  return (
    <a
      href={SOU_JUNIOR_SITE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="SouJunior — abrir site oficial"
      className="flex items-center gap-2 group"
    >
      <Image
        src="/images/Logomarca.png"
        alt="Logomarca SouJunior"
        width={140}
        height={40}
        priority
        className="h-9 w-auto transition-transform group-hover:scale-105"
      />
    </a>
  );
}

// ─── Desktop Nav Links ────────────────────────────────────────────────────────

function DesktopNav() {
  return (
    <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-7">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="nav-link text-white/80 text-sm font-medium"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

// ─── CTA Button ──────────────────────────────────────────────────────────────

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={APOIA_SE_URL}
      target="_blank"
      rel="noopener noreferrer"
      id="header-cta-apoia-se"
      className={`btn-primary text-sm px-5 py-2.5 rounded-lg ${className}`}
    >
      Apoie no Apoia.se
    </a>
  );
}

// ─── Mobile Menu Button ───────────────────────────────────────────────────────

function MobileMenuButton({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      onClick={onToggle}
      className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
    >
      {isOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  );
}

// ─── Mobile Menu ─────────────────────────────────────────────────────────────

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          role="navigation"
          aria-label="Menu mobile"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="lg:hidden absolute top-full left-0 right-0 z-40 mt-1 mx-4 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(10, 27, 111, 0.96)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <nav className="p-5 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="text-white/80 hover:text-white hover:bg-white/8 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:translate-x-1"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-white/10">
              <CtaButton className="w-full justify-center" />
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Header Component ────────────────────────────────────────────────────

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      role="banner"
      className="relative z-50 w-full"
      style={{ padding: "0 var(--section-padding-x)" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20">
        <Logo />
        <DesktopNav />

        <div className="hidden lg:flex items-center">
          <CtaButton />
        </div>

        <MobileMenuButton isOpen={mobileMenuOpen} onToggle={toggleMenu} />
      </div>

      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMenu} />
    </header>
  );
}
