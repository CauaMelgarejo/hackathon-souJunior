import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ImpactSection from "@/components/landing/ImpactSection";
import SupportDifferenceSection from "@/components/landing/SupportDifferenceSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import SupportCTASection from "@/components/landing/SupportCTASection";
import OfficialChannelsSection from "@/components/landing/OfficialChannelsSection";
import Footer from "@/components/landing/Footer";

/**
 * Landing Page — SouJunior Hackathon
 *
 * Ordem das seções:
 * 1. Hero  ✅
 * 2. O que é a SouJunior?     (a implementar)
 * 3. O que torna única?       (a implementar)
 * 4. Impacto                  ✅
 * 5. Comunidade               (a implementar)
 * 6. Como o apoio faz diferença ✅
 * 7. Depoimentos              ✅
 * 8. FAQ                      (a implementar)
 * 9. CTA final                ✅
 * 10. Canais oficiais         ✅
 * 11. Footer                  ✅
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

      {/* ── 6. Como o apoio faz a diferença ── */}
      <SupportDifferenceSection />

      {/* ── 7. Depoimentos ── */}
      <TestimonialsSection />

      {/* ── 8. FAQ ── (a implementar) */}
      {/* <FAQSection /> */}

      {/* ── 9. CTA Final ── */}
      <SupportCTASection />

      {/* ── 10. Canais Oficiais ── */}
      <OfficialChannelsSection />

      {/* ── 11. Footer ── */}
      <Footer />
    </main>
  );
}
