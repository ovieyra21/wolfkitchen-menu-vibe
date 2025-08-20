import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import bufaloBacon from "@/assets/Bufalo-Bacon.png";
import carnivoro from "@/assets/Carnivoro.png";

import mexican from "@/assets/Mexican.png";
import wolf from "@/assets/Wolf.png";
import fondo from "@/assets/fondo.jpg";
import garra from "@/assets/garra.png";

export const MenuSlider = () => {
  const baguettes = [
  {
    name: "Búfalo Bacon",
    price: "$95",
    description: "Pechuga de pollo empanizada, salsa búfalo, tocino, queso manchego, lechuga y aderezo ranch.",
    image: bufaloBacon,
  },
  {
    name: "Carnívoro",
    price: "$105",
    description: "Carne de res, jamón, pepperoni, tocino, queso manchego, lechuga y aderezo especial.",
    image: carnivoro,
  },
  {
  name: "Chicken BBQ",
  price: "$95",
  description: "Pechuga de pollo a la plancha, salsa BBQ, queso manchego, lechuga y aderezo ranch.",
  image: bufaloBacon, // Imagen temporal, reemplazar si se agrega la correcta
  },
  {
    name: "Mexican",
    price: "$90",
    description: "Chorizo, frijoles refritos, queso manchego, pico de gallo y guacamole.",
    image: mexican,
  },
  {
    name: "Wolf",
    price: "$110",
    description: "Carne de res, pollo, tocino, queso manchego, lechuga, jitomate y aderezo especial.",
    image: wolf,
  },
];

  const drinks = [
    {
      name: "Agua Fresca",
      price: "$30",
      description: "Refrescante agua del día (Jamaica, Horchata, Tamarindo).",
      image: null,
    },
    {
      name: "Refresco",
      price: "$25",
      description: "Variedad de refrescos embotellados.",
      image: null,
    },
    {
      name: "Cerveza Artesanal",
      price: "$70",
      description: "Selección de cervezas artesanales locales.",
      image: null,
    },
  ];

  // Configuración de autoplay y animaciones
  const autoplay = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );
  return (
    <section
      className="relative w-full flex items-center justify-center py-16 px-2 md:px-0 overflow-hidden"
    >
      {/* Garra decorativa en fondo superior derecha */}
      <motion.img
        src={garra}
        alt="garra lobo"
        className="pointer-events-none select-none absolute z-10 opacity-60 md:opacity-80 top-0 right-0 w-40 md:w-72 rotate-12"
        style={{ filter: "drop-shadow(0 4px 24px #0008)" }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
      <div className="relative z-20 w-full max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center text-wolf-orange mb-10 drop-shadow-lg tracking-tight uppercase bg-black/40 py-2 rounded-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Baguettes
        </motion.h2>
        <Carousel opts={{ loop: true }} plugins={[autoplay.current]}>
          <CarouselContent>
            {baguettes.map((item, idx) => (
              <CarouselItem key={idx} className="flex justify-center">
                <motion.div
                  className="bg-white/90 rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full border-4 border-wolf-orange/60 hover:scale-105 transition-transform duration-300 backdrop-blur-md"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ staggerChildren: 0.2 }}
                >
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-56 h-56 object-contain rounded-2xl border-2 border-wolf-orange shadow-lg bg-white"
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
                    }}
                  />
                  <div className="flex-1 text-center md:text-left">
                    <motion.h3
                      className="text-3xl font-bold text-wolf-orange mb-2 drop-shadow-md"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
                      }}
                    >
                      {item.name}
                    </motion.h3>
                    <motion.p
                      className="text-lg text-gray-700 mb-4"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
                      }}
                    >{item.description}</motion.p>
                    <motion.p
                      className="text-2xl font-extrabold text-wolf-orange"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.6 } },
                      }}
                    >{item.price}</motion.p>
                    </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="!static !translate-y-0 !left-0" />
            <CarouselNext className="!static !translate-y-0 !right-0" />
          </div>
        </Carousel>
        <motion.h2 
          className="text-4xl font-extrabold text-center text-wolf-orange mb-10 drop-shadow-lg tracking-tight uppercase bg-black/40 py-2 rounded-xl mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Bebidas
        </motion.h2>
        <Carousel opts={{ loop: true }} plugins={[autoplay.current]}>
          <CarouselContent>
            {drinks.map((item, idx) => (
              <CarouselItem key={idx} className="flex justify-center">
                <motion.div
                  className="bg-white/90 rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full border-4 border-wolf-orange/60 hover:scale-105 transition-transform duration-300 backdrop-blur-md"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ staggerChildren: 0.2 }}
                >
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-56 h-56 object-contain rounded-2xl border-2 border-wolf-orange shadow-lg bg-white"
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
                    }}
                  />
                  <div className="flex-1 text-center md:text-left">
                    <motion.h3
                      className="text-3xl font-bold text-wolf-orange mb-2 drop-shadow-md"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
                      }}
                    >
                      {item.name}
                    </motion.h3>
                    <motion.p
                      className="text-lg text-gray-700 mb-4"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
                      }}
                    >{item.description}</motion.p>
                    <motion.p
                      className="text-2xl font-extrabold text-wolf-orange"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.6 } },
                      }}
                    >{item.price}</motion.p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="!static !translate-y-0 !left-0" />
            <CarouselNext className="!static !translate-y-0 !right-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
