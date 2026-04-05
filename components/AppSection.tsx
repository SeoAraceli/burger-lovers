"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const appFeatures = [
  { icon: "⭐", title: "Puntos BL Rewards", desc: "Gana puntos en cada pedido y canjéalos por tus favoritos gratis." },
  { icon: "🎁", title: "Ofertas exclusivas", desc: "Accede a descuentos y promociones solo para usuarios de la app." },
  { icon: "⚡", title: "Pedido express", desc: "Pide antes de llegar. Tu combo listo en el momento exacto." },
  { icon: "📍", title: "Restaurantes cercanos", desc: "Encuentra el Burger Lovers más próximo con horarios en tiempo real." },
];

export default function AppSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="app"
      className="bg-[#FFBC0D] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#27251F] text-sm font-bold tracking-[0.3em] uppercase">
              Burger Lovers App
            </span>
            <h2 className="text-[#27251F] font-black text-4xl md:text-5xl mt-3 leading-tight">
              Más ventajas.
              <br />
              Más sabor.
              <br />
              Siempre.
            </h2>
            <p className="text-[#27251F]/70 text-lg mt-6 leading-relaxed max-w-lg">
              Descarga la app gratuita de Burger Lovers y desbloquea un mundo de ofertas, puntos y pedidos express.
              La hamburguesa que amas, ahora en tu bolsillo.
            </p>

            {/* Store buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#"
                className="flex items-center gap-3 bg-[#27251F] text-white px-5 py-3 rounded-xl hover:bg-[#27251F]/80 transition-all duration-200 hover:scale-105"
              >
                <span className="text-2xl">📱</span>
                <div>
                  <div className="text-xs text-white/60">Disponible en</div>
                  <div className="font-bold text-sm">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-[#27251F] text-white px-5 py-3 rounded-xl hover:bg-[#27251F]/80 transition-all duration-200 hover:scale-105"
              >
                <span className="text-2xl">🤖</span>
                <div>
                  <div className="text-xs text-white/60">Disponible en</div>
                  <div className="font-bold text-sm">Google Play</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {appFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-[#27251F] rounded-2xl p-6 group hover:bg-[#DA291C] transition-all duration-300"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-white font-bold text-base mb-1">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
