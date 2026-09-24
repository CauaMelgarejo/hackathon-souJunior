import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hackathon SouJunior — Juntos, impulsionamos o futuro da tecnologia",
  description:
    "A SouJunior é uma comunidade que acredita no potencial de profissionais juniores. Apoie nossa missão de mentorias gratuitas e projetos open-source a partir de R$ 2,00.",
  keywords: [
    "SouJunior",
    "hackathon",
    "tecnologia",
    "programação",
    "junior developer",
    "mentoria",
    "open source",
    "comunidade tech",
  ],
  authors: [{ name: "SouJunior" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://soujunior.tech",
    siteName: "SouJunior",
    title: "Hackathon SouJunior — Juntos, impulsionamos o futuro da tecnologia",
    description:
      "Apoie a SouJunior e ajude profissionais juniores a crescer na área de tecnologia. A partir de R$ 2,00.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "SouJunior — Comunidade de tecnologia para profissionais juniores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hackathon SouJunior — Juntos, impulsionamos o futuro da tecnologia",
    description:
      "Apoie a SouJunior e ajude profissionais juniores a crescer na área de tecnologia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// viewport deve ser exportado separadamente — removido do Metadata no Next.js 14+
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
