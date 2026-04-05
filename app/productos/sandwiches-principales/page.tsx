import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

/* ─── SEO ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Hamburguesas y Sandwiches | Burger Lovers España",
  description:
    "Descubre toda la carta de hamburguesas de Burger Lovers España: Big BL, Extreme Lovers, Quarter Pounder y mucho más. Pide a domicilio o a través de la BL App.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://burgerlovers.es/productos/sandwiches-principales" },
  openGraph: {
    title: "Hamburguesas y Sandwiches | Burger Lovers España",
    description:
      "Big BL, Extreme Lovers, Quarter Pounder... Elige tu hamburguesa favorita y pídela ahora o en tu restaurante Burger Lovers más cercano.",
    url: "https://burgerlovers.es/productos/sandwiches-principales",
    type: "website",
    locale: "es_ES",
    siteName: "Burger Lovers España",
    images: [
      {
        url: "https://burgerlovers.es/og-hamburguesas.jpg",
        width: 1200,
        height: 630,
        alt: "Hamburguesas Burger Lovers España — Big BL, Extreme Lovers y más",
      },
    ],
  },
  other: { "content-language": "es-ES" },
};

/* ─── Catálogo de hamburguesas ────────────────────────────── */
const burgers = [
  {
    slug: "big-bl",
    name: "Big BL®",
    description:
      "El icónico. Dos filetes de ternera 100% pura, salsa especial Big BL, lechuga, queso cheddar, pepinillos y cebolla en pan de sésamo con tres capas.",
    price: "5,25",
    calories: "508 kcal",
    badge: "Clásico",
    badgeColor: "#FFBC0D",
    emoji: "🍔",
    isNew: false,
    isPopular: true,
  },
  {
    slug: "extreme-lovers",
    name: "Extreme Lovers®",
    description:
      "Intensidad máxima. Filete de ternera, queso cheddar doble, jalapeños, bacon ahumado y salsa barbacoa Extreme.",
    price: "6,10",
    calories: "612 kcal",
    badge: "Nuevo",
    badgeColor: "#DA291C",
    emoji: "🔥",
    isNew: true,
    isPopular: false,
  },
  {
    slug: "quarter-pounder",
    name: "Quarter Pounder® con queso",
    description:
      "Un cuarto de libra de ternera pura a la plancha, queso cheddar fundido, cebolla, mostaza y ketchup.",
    price: "5,75",
    calories: "530 kcal",
    badge: "Favorito",
    badgeColor: "#FFBC0D",
    emoji: "🥩",
    isNew: false,
    isPopular: true,
  },
  {
    slug: "the-superior",
    name: "The Superior®",
    description:
      "La hamburguesa premium. Filete de ternera en pan artesano, lechuga batavia, tomate fresco, mayonesa suave y cheddar blanco.",
    price: "6,45",
    calories: "575 kcal",
    badge: "Premium",
    badgeColor: "#27251F",
    emoji: "⭐",
    isNew: false,
    isPopular: false,
  },
  {
    slug: "crispy-chicken",
    name: "Crispy Chicken®",
    description:
      "Pollo crujiente estilo Burger Lovers, mayonesa y lechuga iceberg en pan suave. El clásico de pollo que nunca falla.",
    price: "4,50",
    calories: "395 kcal",
    badge: "Clásico",
    badgeColor: "#FFBC0D",
    emoji: "🐔",
    isNew: false,
    isPopular: true,
  },
  {
    slug: "chicken-deluxe",
    name: "Chicken Deluxe®",
    description:
      "Filete de pollo crujiente, queso cheddar, bacon, lechuga, tomate y salsa deluxe en pan brioche. Para quienes quieren más.",
    price: "5,90",
    calories: "552 kcal",
    badge: "Deluxe",
    badgeColor: "#DA291C",
    emoji: "🥪",
    isNew: false,
    isPopular: false,
  },
  {
    slug: "filet-o-fish",
    name: "Filet-O-Fish®",
    description:
      "Filete de pescado crujiente con queso cheddar y salsa tártara en pan suave al vapor. Ligero y delicioso.",
    price: "4,75",
    calories: "332 kcal",
    badge: "Mar",
    badgeColor: "#27251F",
    emoji: "🐟",
    isNew: false,
    isPopular: false,
  },
  {
    slug: "double-bl",
    name: "Double BL®",
    description:
      "Todo lo que amas del Big BL, multiplicado por dos. Cuatro filetes de ternera, doble salsa especial y el mismo pan de tres pisos.",
    price: "6,80",
    calories: "742 kcal",
    badge: "XL",
    badgeColor: "#DA291C",
    emoji: "💪",
    isNew: false,
    isPopular: false,
  },
];

/* ─── JSON-LD schemas ─────────────────────────────────────── */
const menuItemsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Hamburguesas y Sandwiches Burger Lovers España",
  description: "Carta completa de hamburguesas y sandwiches de Burger Lovers España",
  url: "https://burgerlovers.es/productos/sandwiches-principales",
  numberOfItems: burgers.length,
  itemListElement: burgers.map((b, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@context": "https://schema.org",
      "@type": "MenuItem",
      name: b.name,
      description: b.description,
      url: `https://burgerlovers.es/productos/sandwiches-principales/${b.slug}`,
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

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "FastFoodRestaurant",
  name: "Burger Lovers España",
  url: "https://burgerlovers.es",
  servesCuisine: "American",
  areaServed: "ES",
  priceRange: "€",
};

export default function HamburguesasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuItemsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />

      <Navbar />

      <div className="pt-[72px]">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Productos", href: "/productos" },
            { label: "Hamburguesas" },
          ]}
        />
      </div>

      <main>
        {/* ── HERO ─────────────────────────────────────── */}
        <section
          className="bg-[#27251F] pt-16 pb-20 px-6 relative overflow-hidden"
          aria-label="Hamburguesas Burger Lovers"
        >
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-5"
            style={{ background: "#FFBC0D" }}
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-2xl">
              <span className="text-[#FFBC0D] text-xs font-bold tracking-[0.3em] uppercase">
                Nuestra carta
              </span>
              <h1 className="text-white font-black text-5xl md:text-7xl mt-3 leading-tight">
                Hamburguesas
                <br />
                <span className="text-[#FFBC0D]">&amp; Sandwiches</span>
              </h1>
              <p className="text-white/60 text-lg mt-6 leading-relaxed max-w-lg">
                Desde el clásico Big BL hasta las últimas novedades. Todos elaborados
                con carne de ternera 100% pura, sin rellenos ni aditivos artificiales.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="/delivery"
                  className="min-h-[44px] flex items-center bg-[#DA291C] hover:bg-[#b82418] text-white font-bold text-sm px-6 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  🛵 Pedir a domicilio
                </a>
                <a
                  href="/mymcdonalds"
                  className="min-h-[44px] flex items-center bg-[#FFBC0D] hover:bg-[#e5a800] text-[#27251F] font-bold text-sm px-6 rounded-full transition-all duration-200 hover:scale-105"
                >
                  📱 Pedir por la App
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FILTER BAR ──────────────────────────────── */}
        <div className="bg-[#1a1917] border-b border-white/5 sticky top-[72px] z-40">
          <div className="max-w-7xl mx-auto px-6">
            <nav
              aria-label="Filtros de categoría"
              className="flex gap-1 overflow-x-auto pb-0 scrollbar-none"
            >
              {[
                { label: "Todas", active: true },
                { label: "Clásicos", active: false },
                { label: "Nuevos", active: false },
                { label: "Premium", active: false },
                { label: "Pollo", active: false },
              ].map((f) => (
                <button
                  key={f.label}
                  className={`min-h-[44px] whitespace-nowrap px-5 text-sm font-bold border-b-2 transition-all duration-200 ${
                    f.active
                      ? "border-[#FFBC0D] text-[#FFBC0D]"
                      : "border-transparent text-white/40 hover:text-white/70"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* ── PRODUCTS GRID ────────────────────────────── */}
        <section
          className="bg-[#27251F] py-16 px-6"
          aria-label="Catálogo de hamburguesas"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-white font-black text-2xl mb-2">
                ⭐ Los más pedidos
              </h2>
              <p className="text-white/40 text-sm mb-8">
                Los favoritos de España. Los que nunca fallan.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {burgers.filter((b) => b.isPopular).map((burger) => (
                  <BurgerCard key={burger.slug} burger={burger} featured />
                ))}
              </div>
            </div>

            <div className="border-t border-white/5 mb-12" />

            <div className="mb-6">
              <h2 className="text-white font-black text-2xl mb-2">
                Toda la carta
              </h2>
              <p className="text-white/40 text-sm">
                {burgers.length} hamburguesas y sandwiches disponibles
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {burgers.map((burger) => (
                <BurgerCard key={burger.slug} burger={burger} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BAND ─────────────────────────────────── */}
        <section className="bg-[#DA291C] py-16 px-6" aria-label="Pide ahora">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-white font-black text-3xl md:text-4xl leading-tight">
                ¿Te apetece ahora?
                <br />
                <span className="text-[#FFBC0D]">Pídelo en minutos.</span>
              </h2>
              <p className="text-white/80 text-base mt-3">
                Delivery disponible en más de 500 restaurantes. Sin coste mínimo adicional en la BL App.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="/delivery"
                className="min-h-[48px] flex items-center justify-center bg-white text-[#DA291C] font-black text-sm px-8 rounded-full hover:scale-105 transition-all duration-200 whitespace-nowrap"
              >
                Pide a domicilio
              </a>
              <a
                href="/mymcdonalds"
                className="min-h-[48px] flex items-center justify-center bg-[#27251F] text-white font-bold text-sm px-8 rounded-full hover:scale-105 transition-all duration-200 whitespace-nowrap"
              >
                Abrir BL App
              </a>
            </div>
          </div>
        </section>

        {/* ── NUTRITION BAND ───────────────────────────── */}
        <section className="bg-[#1a1917] py-12 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="text-4xl">🥗</div>
            <div>
              <h2 className="text-white font-bold text-lg">
                Información nutricional completa
              </h2>
              <p className="text-white/40 text-sm mt-1">
                Consulta calorías, alérgenos y valores nutricionales de todos nuestros productos.
              </p>
            </div>
            <a
              href="/alergenos"
              className="min-h-[44px] flex items-center md:ml-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-6 rounded-full transition-all whitespace-nowrap"
            >
              Ver alérgenos y nutrición
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ─── BurgerCard ───────────────────────────────────────────── */
function BurgerCard({
  burger,
  featured = false,
}: {
  burger: (typeof burgers)[0];
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#FFBC0D]/40 hover:bg-white/8 transition-all duration-300 ${
        featured ? "lg:col-span-1" : ""
      }`}
    >
      <div className="absolute top-3 left-3 z-10">
        <span
          className="inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
          style={{
            backgroundColor: burger.badgeColor + "25",
            color: burger.badgeColor === "#27251F" ? "#FFBC0D" : burger.badgeColor,
            border: `1px solid ${burger.badgeColor}40`,
          }}
        >
          {burger.badge}
        </span>
      </div>

      {burger.isNew && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-[#DA291C] text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
            NUEVO
          </span>
        </div>
      )}

      <div
        className={`w-full flex items-center justify-center bg-[#1a1917] ${
          featured ? "h-48" : "h-40"
        } text-7xl group-hover:scale-105 transition-transform duration-500`}
      >
        {burger.emoji}
      </div>

      <div className="p-5">
        <h3 className="text-white font-black text-lg leading-tight group-hover:text-[#FFBC0D] transition-colors duration-200">
          {burger.name}
        </h3>
        <p className="text-white/45 text-xs leading-relaxed mt-2 line-clamp-2">
          {burger.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-[#FFBC0D] font-black text-xl">
              {burger.price}€
            </span>
            <span className="text-white/30 text-xs ml-2">{burger.calories}</span>
          </div>
          <a
            href={`/productos/sandwiches-principales/${burger.slug}`}
            className="min-h-[36px] flex items-center bg-[#FFBC0D] hover:bg-[#e5a800] text-[#27251F] font-bold text-xs px-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label={`Pedir ${burger.name}`}
          >
            Pedir
          </a>
        </div>
      </div>
    </article>
  );
}
