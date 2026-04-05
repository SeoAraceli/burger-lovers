import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

/* ─── SEO ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Hamburguesas | Burger Lovers España",
  description:
    "Descubre toda la carta de hamburguesas de Burger Lovers: Big BL, Extreme Lovers, Quarter Pounder y mucho más. Todas elaboradas con carne 100% pura. Pide ahora.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://burgerlovers.es/hamburguesas" },
  openGraph: {
    title: "Hamburguesas | Burger Lovers España",
    description:
      "8 hamburguesas irresistibles. Big BL, Extreme Lovers, Quarter Pounder... Elige la tuya y pídela ahora. Burger Lovers. Donde el sabor manda.",
    url: "https://burgerlovers.es/hamburguesas",
    type: "website",
    locale: "es_ES",
    siteName: "Burger Lovers España",
    images: [{ url: "https://burgerlovers.es/images/burgers/big-bl.png", width: 1200, height: 630, alt: "Hamburguesas Burger Lovers España" }],
  },
  other: { "content-language": "es-ES" },
};

/* ─── JSON-LD ─────────────────────────────────────────────── */
const burgers = [
  {
    slug: "big-bl",
    name: "Big BL®",
    description: "Dos filetes de ternera 100% pura, salsa especial Big BL, lechuga, queso cheddar, pepinillos y cebolla en pan de sésamo con tres capas.",
    price: "5,25",
    calories: "508 kcal",
    badge: "Clásico",
    badgeColor: "#FFBC0D",
    image: "/images/burgers/big-bl.png",
    isNew: false,
    isPopular: true,
    ingredients: ["Ternera 100% pura", "Salsa especial", "Lechuga", "Cheddar", "Pepinillos", "Cebolla"],
  },
  {
    slug: "extreme-lovers",
    name: "Extreme Lovers®",
    description: "Filete de ternera, queso cheddar doble, jalapeños, bacon ahumado y salsa barbacoa Extreme.",
    price: "6,10",
    calories: "612 kcal",
    badge: "🌶️ Picante",
    badgeColor: "#DA291C",
    image: "/images/burgers/extreme-lovers.png",
    isNew: true,
    isPopular: false,
    ingredients: ["Ternera", "Doble cheddar", "Jalapeños", "Bacon", "Salsa BBQ"],
  },
  {
    slug: "quarter-pounder",
    name: "Quarter Pounder® con queso",
    description: "Un cuarto de libra de ternera pura a la plancha, queso cheddar fundido, cebolla, mostaza y ketchup.",
    price: "5,75",
    calories: "530 kcal",
    badge: "Favorito",
    badgeColor: "#FFBC0D",
    image: "/images/burgers/quarter-pounder.png",
    isNew: false,
    isPopular: true,
    ingredients: ["Ternera 1/4 lb", "Doble cheddar", "Cebolla", "Mostaza", "Ketchup"],
  },
  {
    slug: "the-superior",
    name: "The Superior®",
    description: "La hamburguesa premium. Filete de ternera en pan artesano, lechuga batavia, tomate fresco, mayonesa suave y cheddar blanco.",
    price: "6,45",
    calories: "575 kcal",
    badge: "Premium",
    badgeColor: "#27251F",
    image: "/images/burgers/the-superior.png",
    isNew: false,
    isPopular: false,
    ingredients: ["Ternera", "Pan artesano", "Batavia", "Tomate", "Mayo", "Cheddar blanco"],
  },
  {
    slug: "crispy-chicken",
    name: "Crispy Chicken®",
    description: "Pollo crujiente estilo Burger Lovers, mayonesa y lechuga iceberg en pan suave. El clásico de pollo que nunca falla.",
    price: "4,50",
    calories: "395 kcal",
    badge: "Pollo",
    badgeColor: "#FFBC0D",
    image: "/images/burgers/crispy-chicken.png",
    isNew: false,
    isPopular: true,
    ingredients: ["Pollo crujiente", "Mayonesa", "Lechuga iceberg", "Pan suave"],
  },
  {
    slug: "chicken-deluxe",
    name: "Chicken Deluxe®",
    description: "Filete de pollo crujiente, queso cheddar, bacon, lechuga, tomate y salsa deluxe en pan brioche.",
    price: "5,90",
    calories: "552 kcal",
    badge: "Deluxe",
    badgeColor: "#DA291C",
    image: "/images/burgers/chicken-deluxe.png",
    isNew: false,
    isPopular: false,
    ingredients: ["Pollo crujiente", "Cheddar", "Bacon", "Lechuga", "Tomate", "Salsa deluxe"],
  },
  {
    slug: "filet-o-fish",
    name: "Filet-O-Fish®",
    description: "Filete de pescado crujiente con queso cheddar y salsa tártara en pan suave al vapor. Ligero y delicioso.",
    price: "4,75",
    calories: "332 kcal",
    badge: "Pescado",
    badgeColor: "#27251F",
    image: "/images/burgers/filet-o-fish.png",
    isNew: false,
    isPopular: false,
    ingredients: ["Filete de pescado", "Cheddar", "Salsa tártara", "Pan al vapor"],
  },
  {
    slug: "double-bl",
    name: "Double BL®",
    description: "Todo lo que amas del Big BL multiplicado por dos. Cuatro filetes de ternera, doble salsa especial y pan de tres pisos.",
    price: "6,80",
    calories: "742 kcal",
    badge: "XL",
    badgeColor: "#DA291C",
    image: "/images/burgers/double-bl.png",
    isNew: false,
    isPopular: false,
    ingredients: ["4 filetes de ternera", "Doble salsa especial", "Doble cheddar", "Pan triple"],
  },
];

const menuItemsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Hamburguesas Burger Lovers España",
  url: "https://burgerlovers.es/hamburguesas",
  numberOfItems: burgers.length,
  itemListElement: burgers.map((b, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "MenuItem",
      name: b.name,
      description: b.description,
      url: `https://burgerlovers.es/hamburguesas/${b.slug}`,
      image: `https://burgerlovers.es${b.image}`,
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: b.price.replace(",", "."),
        availability: "https://schema.org/InStock",
        areaServed: "ES",
      },
      nutrition: {
        "@type": "NutritionInformation",
        calories: b.calories,
      },
    },
  })),
};

const categories = ["Todas", "Ternera", "Pollo", "Pescado", "XL", "Nuevo"];
const popularBurgers = burgers.filter((b) => b.isPopular);

export default function HamburguesasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemsSchema) }}
      />

      <Navbar />

      <div className="pt-[72px]">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Hamburguesas" },
          ]}
        />
      </div>

      <main>
        {/* ── HERO ─────────────────────────────────────── */}
        <section className="bg-[#27251F] pt-14 pb-16 px-6 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-3xl bg-[#FFBC0D]" aria-hidden="true" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full opacity-[0.04] blur-2xl bg-[#DA291C]" aria-hidden="true" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
              <div className="max-w-xl">
                <span className="text-[#FFBC0D] text-xs font-bold tracking-[0.35em] uppercase">
                  Nuestra carta
                </span>
                <h1 className="text-white font-black text-6xl md:text-8xl mt-3 leading-[0.95] tracking-tight">
                  Ham<br />
                  <span className="text-[#FFBC0D]">burguesas</span>
                </h1>
                <p className="text-white/55 text-base mt-5 leading-relaxed">
                  {burgers.length} hamburguesas elaboradas con carne 100% pura.
                  Sin rellenos, sin artificios. Solo sabor.
                </p>
              </div>

              {/* Quick stats */}
              <div className="flex gap-6 flex-wrap">
                {[
                  { num: burgers.length, label: "Opciones" },
                  { num: "100%", label: "Ternera pura" },
                  { num: "1", label: "Amor por burger" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-[#FFBC0D] font-black text-3xl leading-none">{s.num}</div>
                    <div className="text-white/35 text-xs mt-1 uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a href="/delivery" className="min-h-[44px] flex items-center gap-2 bg-[#DA291C] hover:bg-[#b82418] text-white font-bold text-sm px-7 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-[#DA291C]/25">
                🛵 Pedir a domicilio
              </a>
              <a href="/mymcdonalds" className="min-h-[44px] flex items-center gap-2 bg-[#FFBC0D] hover:bg-[#e5a800] text-[#27251F] font-bold text-sm px-7 rounded-full transition-all duration-200 hover:scale-105">
                📱 Pedir por la App
              </a>
            </div>
          </div>
        </section>

        {/* ── FILTER BAR ──────────────────────────────── */}
        <div className="bg-[#1a1917] border-b border-white/5 sticky top-[72px] z-40">
          <div className="max-w-7xl mx-auto px-6">
            <nav aria-label="Filtros" className="flex gap-0 overflow-x-auto scrollbar-none">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`min-h-[48px] whitespace-nowrap px-5 text-sm font-bold border-b-2 transition-all duration-200 ${
                    i === 0
                      ? "border-[#FFBC0D] text-[#FFBC0D]"
                      : "border-transparent text-white/35 hover:text-white/60 hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* ── FEATURED — Los más pedidos ───────────────── */}
        <section className="bg-[#27251F] pt-16 pb-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-baseline justify-between mb-8">
              <div>
                <h2 className="text-white font-black text-2xl">⭐ Las más pedidas</h2>
                <p className="text-white/35 text-sm mt-1">Las que nunca decepcionan</p>
              </div>
              <span className="text-[#FFBC0D] text-xs font-bold">{popularBurgers.length} burgers</span>
            </div>

            {/* Featured grid — bigger cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularBurgers.map((burger) => (
                <BurgerCardFeatured key={burger.slug} burger={burger} />
              ))}
            </div>
          </div>
        </section>

        {/* ── FULL CATALOG ─────────────────────────────── */}
        <section className="bg-[#27251F] pt-10 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-baseline justify-between mb-8 border-t border-white/5 pt-10">
              <div>
                <h2 className="text-white font-black text-2xl">Toda la carta</h2>
                <p className="text-white/35 text-sm mt-1">{burgers.length} opciones disponibles</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {burgers.map((burger) => (
                <BurgerCard key={burger.slug} burger={burger} />
              ))}
            </div>
          </div>
        </section>

        {/* ── DELIVERY CTA ─────────────────────────────── */}
        <section className="bg-[#DA291C] py-16 px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-white font-black text-3xl md:text-4xl leading-tight">
                ¿Te apetece ahora?
                <br />
                <span className="text-[#FFBC0D]">Pídelo en minutos.</span>
              </h2>
              <p className="text-white/80 text-base mt-3">
                Delivery disponible en más de 500 restaurantes. Sin coste mínimo en la BL App.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href="/delivery" className="min-h-[48px] flex items-center justify-center bg-white text-[#DA291C] font-black text-sm px-8 rounded-full hover:scale-105 transition-all duration-200 whitespace-nowrap">
                Pedir a domicilio
              </a>
              <a href="/mymcdonalds" className="min-h-[48px] flex items-center justify-center bg-[#27251F] text-white font-bold text-sm px-8 rounded-full hover:scale-105 transition-all duration-200 whitespace-nowrap">
                Abrir BL App
              </a>
            </div>
          </div>
        </section>

        {/* ── NUTRITION BAND ───────────────────────────── */}
        <section className="bg-[#1a1917] py-12 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
            <div className="text-4xl">🥗</div>
            <div>
              <h2 className="text-white font-bold text-lg">Información nutricional completa</h2>
              <p className="text-white/40 text-sm mt-1">Consulta calorías, alérgenos y valores nutricionales de todos nuestros productos.</p>
            </div>
            <a href="/alergenos" className="min-h-[44px] flex items-center md:ml-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-6 rounded-full transition-all whitespace-nowrap">
              Ver alérgenos y nutrición
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ─── Featured Card (más pedidas — imagen grande) ──────────── */
function BurgerCardFeatured({ burger }: { burger: (typeof burgers)[0] }) {
  return (
    <article className="group relative bg-[#1a1917] border border-white/8 rounded-3xl overflow-hidden hover:border-[#FFBC0D]/50 transition-all duration-400 hover:shadow-2xl hover:shadow-[#FFBC0D]/10">
      {/* Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span
          className="inline-block text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider"
          style={{
            backgroundColor: burger.badgeColor + "22",
            color: burger.badgeColor === "#27251F" ? "#FFBC0D" : burger.badgeColor,
            border: `1px solid ${burger.badgeColor}44`,
          }}
        >
          {burger.badge}
        </span>
      </div>
      {burger.isNew && (
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-[#DA291C] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">NUEVO</span>
        </div>
      )}

      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={burger.image}
          alt={`${burger.name} — Burger Lovers España`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-600"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Gradient overlay bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1917] via-transparent to-transparent" />
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-white font-black text-xl leading-tight group-hover:text-[#FFBC0D] transition-colors duration-200">
          {burger.name}
        </h3>
        <p className="text-white/45 text-sm leading-relaxed mt-2 line-clamp-2">{burger.description}</p>

        {/* Ingredients tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {burger.ingredients.slice(0, 3).map((ing) => (
            <span key={ing} className="text-[10px] text-white/35 bg-white/5 px-2 py-0.5 rounded-full border border-white/8">
              {ing}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-5">
          <div>
            <span className="text-[#FFBC0D] font-black text-2xl">{burger.price}€</span>
            <span className="text-white/30 text-xs ml-2">{burger.calories}</span>
          </div>
          <a
            href={`/hamburguesas/${burger.slug}`}
            className="min-h-[40px] flex items-center bg-[#FFBC0D] hover:bg-[#e5a800] text-[#27251F] font-black text-xs px-5 rounded-full transition-all duration-200 hover:scale-105"
            aria-label={`Pedir ${burger.name}`}
          >
            Pedir →
          </a>
        </div>
      </div>
    </article>
  );
}

/* ─── Regular Card ─────────────────────────────────────────── */
function BurgerCard({ burger }: { burger: (typeof burgers)[0] }) {
  return (
    <article className="group relative bg-[#1a1917] border border-white/8 rounded-2xl overflow-hidden hover:border-[#FFBC0D]/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/40">
      {/* Badge */}
      <div className="absolute top-3 left-3 z-20">
        <span
          className="inline-block text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider"
          style={{
            backgroundColor: burger.badgeColor + "22",
            color: burger.badgeColor === "#27251F" ? "#FFBC0D" : burger.badgeColor,
            border: `1px solid ${burger.badgeColor}40`,
          }}
        >
          {burger.badge}
        </span>
      </div>
      {burger.isNew && (
        <div className="absolute top-3 right-3 z-20">
          <span className="bg-[#DA291C] text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase">NEW</span>
        </div>
      )}

      {/* Image */}
      <div className="relative w-full h-44 overflow-hidden">
        <Image
          src={burger.image}
          alt={`${burger.name} — Burger Lovers`}
          fill
          className="object-cover group-hover:scale-108 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1917]/80 via-transparent to-transparent" />
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="text-white font-black text-base leading-tight group-hover:text-[#FFBC0D] transition-colors duration-200">
          {burger.name}
        </h3>
        <p className="text-white/40 text-xs leading-relaxed mt-1.5 line-clamp-2">{burger.description}</p>

        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-[#FFBC0D] font-black text-lg">{burger.price}€</span>
            <span className="text-white/25 text-[11px] ml-1.5">{burger.calories}</span>
          </div>
          <a
            href={`/hamburguesas/${burger.slug}`}
            className="min-h-[36px] flex items-center bg-[#FFBC0D] hover:bg-[#e5a800] text-[#27251F] font-bold text-xs px-4 rounded-full transition-all duration-200 hover:scale-105"
            aria-label={`Pedir ${burger.name}`}
          >
            Pedir
          </a>
        </div>
      </div>
    </article>
  );
}
