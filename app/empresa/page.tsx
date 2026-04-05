import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

/* ─── SEO ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Sobre Burger Lovers España | Empresa, Historia y Compromisos",
  description:
    "Conoce la historia de Burger Lovers en España, nuestra misión, valores y compromisos con el empleo, la sostenibilidad y la calidad. Más de 40 años siendo parte de España.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://burgerlovers.es/empresa" },
  openGraph: {
    title: "Sobre Burger Lovers España | Historia, Misión y Compromisos",
    description:
      "Desde 1981, Burger Lovers forma parte de la historia de España. Descubre nuestros valores, compromisos y por qué somos mucho más que hamburguesas.",
    url: "https://burgerlovers.es/empresa",
    type: "website",
    locale: "es_ES",
    siteName: "Burger Lovers España",
    images: [
      {
        url: "https://burgerlovers.es/og-empresa.jpg",
        width: 1200,
        height: 630,
        alt: "Burger Lovers España — Sobre nosotros",
      },
    ],
  },
  other: { "content-language": "es-ES" },
};

/* ─── JSON-LD Organization ────────────────────────────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Burger Lovers España",
  legalName: "Burger Lovers Sistemas de España, S.L.",
  url: "https://burgerlovers.es",
  logo: "https://burgerlovers.es/logo.png",
  foundingDate: "1981",
  foundingLocation: {
    "@type": "Place",
    name: "Madrid, España",
  },
  description:
    "Burger Lovers es una cadena de restaurantes de hamburguesas premium presente en España desde 1981 con más de 600 restaurantes.",
  areaServed: {
    "@type": "Country",
    name: "España",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 30000,
    unitText: "empleados en España",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://burgerlovers.es/contacto",
    availableLanguage: "Spanish",
    areaServed: "ES",
  },
  sameAs: [
    "https://www.instagram.com/burgerlovers_es/",
    "https://www.facebook.com/burgerloversespana/",
    "https://twitter.com/BurgerLoversEs",
    "https://www.youtube.com/BurgerLoversEspana",
  ],
};

const milestones = [
  { year: "1981", event: "Primer Burger Lovers en España abre en Madrid, Gran Vía." },
  { year: "1990", event: "Llegamos a 100 restaurantes en toda España." },
  { year: "2001", event: "Lanzamos el programa de Empleo de calidad con contratos indefinidos." },
  { year: "2010", event: "Superamos los 400 restaurantes y 25.000 empleados." },
  { year: "2017", event: "Inauguramos el primer Burger Lovers 'verde' con certificación LEED en España." },
  { year: "2023", event: "Más de 600 restaurantes en España y 30.000 personas empleadas." },
  { year: "2025", event: "25 millones de visitas mensuales en España. Lanzamos BL App 3.0." },
];

const values = [
  {
    icon: "🤝",
    title: "Empleo de calidad",
    description:
      "Más de 30.000 personas trabajan en Burger Lovers España con contratos estables, formación continua y planes de carrera reales. El 90% de nuestros directivos empezaron como trabajadores de restaurante.",
    href: "/compromisos/compromiso-empleo",
  },
  {
    icon: "🌱",
    title: "Compromiso con el Planeta",
    description:
      "Objetivo: cero emisiones netas en 2050. Packaging 100% sostenible, reducción del desperdicio alimentario un 50% y autoconsumo de energías renovables en todos nuestros restaurantes.",
    href: "/compromisos/compromiso-sostenibilidad",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Con las familias",
    description:
      "Happy Meal sin frito como opción predeterminada, y el Modo Familia en nuestra BL App. Las familias españolas son el corazón de Burger Lovers.",
    href: "/compromisos/compromiso-familias",
  },
  {
    icon: "✅",
    title: "Calidad y transparencia",
    description:
      "Carne de ternera 100% pura, sin rellenos. Proveedores auditados en Europa. Información nutricional y de alérgenos disponible en todos los restaurantes y en nuestra App.",
    href: "/compromisos/compromiso-calidad",
  },
];

const keyFacts = [
  { number: "600+", label: "Restaurantes en España" },
  { number: "30.000", label: "Personas empleadas" },
  { number: "44", label: "Años en España" },
  { number: "25M", label: "Visitas al mes" },
];

export default function EmpresaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Navbar />

      <div className="pt-[72px]">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Burger Lovers" },
          ]}
        />
      </div>

      <main>
        {/* ── HERO ─────────────────────────────────────── */}
        <section
          className="bg-[#27251F] pt-20 pb-24 px-6 relative overflow-hidden"
          aria-labelledby="empresa-heading"
        >
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03] rounded-full"
            style={{ background: "radial-gradient(circle, #FFBC0D, transparent)" }}
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#FFBC0D] text-xs font-bold tracking-[0.3em] uppercase">
                  Sobre nosotros
                </span>
                <h1
                  id="empresa-heading"
                  className="text-white font-black text-5xl md:text-6xl mt-3 leading-[1.05]"
                >
                  Somos mucho
                  <br />
                  más que
                  <br />
                  <span className="text-[#FFBC0D]">hamburguesas.</span>
                </h1>
                <p className="text-white/60 text-lg mt-6 leading-relaxed max-w-lg">
                  Desde 1981, Burger Lovers forma parte del tejido social, económico y cultural de España.
                  Más de 30.000 personas. Más de 600 restaurantes. Un solo propósito: crear momentos
                  deliciosos para todos.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="/compromisos"
                    className="min-h-[44px] flex items-center bg-[#FFBC0D] hover:bg-[#e5a800] text-[#27251F] font-black text-sm px-7 rounded-full transition-all duration-200 hover:scale-105"
                  >
                    Nuestros compromisos
                  </a>
                  <a
                    href="/empresa/sala-de-prensa"
                    className="min-h-[44px] flex items-center bg-white/10 hover:bg-white/15 text-white font-bold text-sm px-7 rounded-full border border-white/15 transition-all duration-200"
                  >
                    Sala de prensa
                  </a>
                </div>
              </div>

              {/* Key Facts Grid */}
              <div className="grid grid-cols-2 gap-4">
                {keyFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#FFBC0D]/30 transition-colors"
                  >
                    <div className="text-[#FFBC0D] font-black text-4xl md:text-5xl leading-none">
                      {fact.number}
                    </div>
                    <div className="text-white/50 text-sm mt-2 leading-tight">
                      {fact.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ─────────────────────────────────── */}
        <section className="bg-[#1a1917] py-20 px-6" aria-labelledby="historia-heading">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[#FFBC0D] text-xs font-bold tracking-[0.3em] uppercase">
                Nuestra historia
              </span>
              <h2
                id="historia-heading"
                className="text-white font-black text-4xl md:text-5xl mt-3"
              >
                44 años siendo parte
                <br />
                <span className="text-[#FFBC0D]">de tu historia.</span>
              </h2>
            </div>

            <div className="relative">
              <div
                className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#FFBC0D] via-[#FFBC0D]/30 to-transparent"
                aria-hidden="true"
              />
              <ol className="space-y-8 pl-16">
                {milestones.map((m, i) => (
                  <li key={i} className="relative group">
                    <div
                      className="absolute -left-[42px] top-1.5 w-4 h-4 rounded-full border-2 border-[#FFBC0D] bg-[#1a1917] group-hover:bg-[#FFBC0D] transition-colors duration-200"
                      aria-hidden="true"
                    />
                    <time dateTime={m.year} className="text-[#FFBC0D] font-black text-2xl block">
                      {m.year}
                    </time>
                    <p className="text-white/60 text-base mt-1 leading-relaxed">{m.event}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── VALORES ──────────────────────────────────── */}
        <section className="bg-[#27251F] py-20 px-6" aria-labelledby="valores-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[#FFBC0D] text-xs font-bold tracking-[0.3em] uppercase">
                Nuestros pilares
              </span>
              <h2 id="valores-heading" className="text-white font-black text-4xl md:text-5xl mt-3">
                Lo que nos define.
              </h2>
              <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
                Más allá de la comida, estos son los compromisos que guían cada decisión que tomamos en España.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <a
                  key={v.title}
                  href={v.href}
                  className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#FFBC0D]/40 transition-all duration-300 block"
                >
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="text-white font-black text-lg mb-2 group-hover:text-[#FFBC0D] transition-colors duration-200">
                    {v.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">{v.description}</p>
                  <div className="flex items-center gap-1 mt-4 text-[#FFBC0D] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Leer más
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FRANQUICIAS + EMPLEO ─────────────────────── */}
        <section className="bg-[#FFBC0D] py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#27251F] rounded-2xl p-8">
              <div className="text-4xl mb-4">🏪</div>
              <h2 className="text-white font-black text-2xl mb-3">Franquíciate</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                El 90% de los restaurantes Burger Lovers en España son franquicias. Un modelo de negocio
                probado, con soporte total y la marca más querida del país.
              </p>
              <a
                href="/empresa/franquiciate"
                className="min-h-[44px] inline-flex items-center bg-[#FFBC0D] hover:bg-[#e5a800] text-[#27251F] font-black text-sm px-6 rounded-full transition-all duration-200 hover:scale-105"
              >
                Quiero ser franquiciado
              </a>
            </div>

            <div className="bg-[#DA291C] rounded-2xl p-8">
              <div className="text-4xl mb-4">💼</div>
              <h2 className="text-white font-black text-2xl mb-3">Trabaja con nosotros</h2>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                30.000 personas ya forman parte del equipo Burger Lovers en España. Contratos estables,
                formación, flexibilidad y posibilidades reales de crecer.
              </p>
              <a
                href="/empresa/empleo"
                className="min-h-[44px] inline-flex items-center bg-white text-[#DA291C] font-black text-sm px-6 rounded-full transition-all duration-200 hover:scale-105"
              >
                Ver empleos disponibles
              </a>
            </div>
          </div>
        </section>

        {/* ── LINKS CORPORATIVOS ───────────────────────── */}
        <section className="bg-[#27251F] py-16 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-white font-black text-2xl">📰 Sala de prensa</h2>
              <p className="text-white/40 text-sm mt-1">
                Notas de prensa, informes anuales y recursos para medios de comunicación.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              {[
                { label: "Sala de prensa", href: "/empresa/sala-de-prensa" },
                { label: "Compliance", href: "/empresa/compliance-integridad" },
                { label: "Contáctanos", href: "/contacto" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="min-h-[44px] flex items-center bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-6 rounded-full transition-all"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
