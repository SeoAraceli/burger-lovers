import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollVideoSection from "@/components/ScrollVideoSection";
import HeroOverlay from "@/components/HeroOverlay";
import ProductsSection from "@/components/ProductsSection";
import AppSection from "@/components/AppSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Burger Lovers España — We Love Burgers",
  description:
    "Descubre las hamburguesas más icónicas de Burger Lovers España. Ofertas exclusivas, BL App y la mejor experiencia en cada bocado.",
  keywords: "Burger Lovers, hamburguesas, burgers, España, ofertas",
  openGraph: {
    title: "Burger Lovers España — We Love Burgers",
    description: "El sabor que para el tiempo. Descúbrelo.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      <main>
        {/* ─── HERO: Scroll-Driven Video ─── */}
        {/* ScrollVideoSection wraps the scroll journey container.        */}
        {/* The video's currentTime is always slaved to scroll progress.  */}
        {/* It NEVER plays autonomously — Rule 2 of the Scroll Engine.    */}
        <ScrollVideoSection
          videoSrc="/assets/scroll-video.mp4"
          posterSrc="/assets/hero-poster.jpg"
          scrollHeight="400vh"
          scrollHeightMobile="340vh"
        >
          <HeroOverlay />
        </ScrollVideoSection>

        {/* ─── PRODUCTS: La Carta ─── */}
        <ProductsSection />

        {/* ─── APP: Burger Lovers App ─── */}
        <AppSection />

        {/* ─── BRAND STORY ─── */}
        <section className="bg-[#DA291C] py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-white/70 text-sm font-bold tracking-[0.3em] uppercase">
              Lo que se cocina en Burger Lovers
            </span>
            <h2 className="text-white font-black text-4xl md:text-6xl mt-4 leading-tight">
              Ingredientes de
              <br />
              confianza. Siempre.
            </h2>
            <p className="text-white/80 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              En Burger Lovers apostamos por la transparencia. Carne 100% nacida y criada en Europa,
              productores locales y estándares de calidad que nunca comprometemos.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-8 bg-white text-[#DA291C] font-black text-sm px-7 py-3.5 rounded-full hover:scale-105 transition-transform duration-200"
            >
              Conoce nuestra cocina
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
