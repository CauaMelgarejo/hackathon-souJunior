import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ImpactSection from "@/components/landing/ImpactSection";

/**
 * Landing Page — SouJunior Hackathon
 *
 * Ordem das seções:
 * 1. Hero  ✅
 * 2. O que é a SouJunior?     (a implementar)
 * 3. O que torna única?       (a implementar)
 * 4. Impacto                  ✅
 * 5. Comunidade               (a implementar)
 * 6. Como o apoio faz diferença (a implementar)
 * 7. Depoimentos              (a implementar)
 * 8. FAQ                      (a implementar)
 * 9. CTA final                (a implementar)
 * 10. Canais oficiais         (a implementar)
 * 11. Footer                  (a implementar)
 */
export default function LandingPage() {
  return (
    <main>
      {/* ── 1. Hero (Header integrado ao gradiente) ── */}
      <div className="hero-gradient">
        <Header />
        <Hero />
      </div>

      {/* ── 2. O que é a SouJunior? ── (a implementar) */}
      {/* <SobreSouJunior /> */}

      {/* ── 3. O que torna a SouJunior única? ── (a implementar) */}
      {/* <DiferencialSection /> */}

      {/* ── 4. Impacto ── */}
      <ImpactSection />

      {/* ── 5. Comunidade ── (a implementar) */}
      {/* <ComunidadeSection /> */}

      {/* ── 6. Como o apoio faz a diferença ── (a implementar) */}
      {/* <ComoApoiarSection /> */}

      {/* ── 7. Depoimentos ── (a implementar) */}
      {/* <DepoimentosSection /> */}

      {/* ── 8. FAQ ── (a implementar) */}
      {/* <FAQSection /> */}

      {/* ── 9. CTA Final ── (a implementar) */}
      {/* <CTAFinalSection /> */}

      {/* ── 10. Canais Oficiais ── (a implementar) */}
      {/* <CanaisOficiaisSection /> */}

      {/* ── 11. Footer ── (a implementar) */}
      {/* <Footer /> */}
    </main>
  );
}
