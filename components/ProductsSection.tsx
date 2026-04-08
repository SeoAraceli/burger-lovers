"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Big Mac",
    description: "El icónico doble, doble sabor. Dos filetes de ternera, salsa especial y lechuga crujiente.",
    tag: "Clásico",
    tagColor: "#FFBC0D",
    image: "/assets/images/big-mac.png",
  },
  {
    name: "McExtreme",
    description: "Para los que quieren más. Jalapeños, bacon ahumado y salsa barbacoa con doble cheddar.",
    tag: "Intenso",
    tagColor: "#DA291C",
    image: "/assets/images/mcextreme.png",
  },
  {
    name: "McFlurry",
    description: "El postre favorito. Cremoso helado con tus extras preferidos, ahora en edición limitada.",
    tag: "Nuevo",
    tagColor: "#27251F",
    image: "/assets/images/mcflurry.png",
  },
  {
    name: "Happy Meal",
    description: "La magia de la infancia en cada caja. Incluye sorpresa coleccionable de la temporada.",
    tag: "Familiar",
    tagColor: "#FFBC0D",
    image: "/assets/images/happy-meal.png",
  },
];

export default function ProductsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="carta"
      className="bg-[#27251F] py-12 md:py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#FFBC0D] text-sm font-bold tracking-[0.3em] uppercase">
            Nuestros favoritos
          </span>
          <h2 className="text-white font-black text-4xl md:text-6xl mt-3 leading-tight">
            La Carta que
            <br />
            <span className="text-[#FFBC0D]">te Enamora</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
            Sabores que han conquistado España. Icónicos, intensos, inolvidables.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#FFBC0D]/30 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-radial from-[#FFBC0D]/5 via-transparent to-transparent" />

              {/* Image */}
              <div className="relative w-full h-40 mb-4 drop-shadow-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Tag */}
              <span
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider"
                style={{
                  backgroundColor: product.tagColor + "22",
                  color: product.tagColor,
                }}
              >
                {product.tag}
              </span>

              {/* Name */}
              <h3 className="text-white font-black text-xl mb-2 group-hover:text-[#FFBC0D] transition-colors duration-200">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Hover arrow */}
              <div className="mt-4 flex items-center gap-2 text-[#FFBC0D] text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                Ver más
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
