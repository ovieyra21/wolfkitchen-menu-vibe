import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import bufaloBacon from "@/assets/Bufalo-Bacon.png";
import carnivoro from "@/assets/Carnivoro.png";
import chickenBBQ from "@/assets/Chicken-BBQ.png";
import mexican from "@/assets/Mexican.png";
import wolf from "@/assets/Wolf.png";
import fondo from "@/assets/fondo.jpg";
import garra from "@/assets/garra.png";

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
    image: chickenBBQ,
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

export const MenuSlider = () => {
  return (
    <section
      className="relative w-full min-h-[700px] flex items-center justify-center py-16 px-2 md:px-0 overflow-hidden"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Garra decorativa en fondo superior derecha */}
      <img
        src={garra}
        alt="garra lobo"
        className="pointer-events-none select-none absolute z-10 opacity-60 md:opacity-80 top-0 right-0 w-40 md:w-72 rotate-12"
        style={{ filter: "drop-shadow(0 4px 24px #0008)" }}
      />
      <div className="relative z-20 w-full max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-wolf-orange mb-10 drop-shadow-lg tracking-tight uppercase bg-black/40 py-2 rounded-xl">
          Baguettes
        </h2>
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {baguettes.map((item, idx) => (
              <CarouselItem key={idx} className="flex justify-center">
                <div className="bg-white/90 rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row items-center gap-8 max-w-3xl w-full border-4 border-wolf-orange/60 hover:scale-105 transition-transform duration-300 backdrop-blur-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-56 h-56 object-contain rounded-2xl border-2 border-wolf-orange shadow-lg bg-white"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold text-wolf-orange mb-2 drop-shadow-md">
                      {item.name}
                    </h3>
                    <p className="text-lg text-gray-700 mb-4 font-medium">
                      {item.description}
                    </p>
                    <span className="inline-block text-2xl font-extrabold text-wolf-orange bg-wolf-orange/10 px-6 py-2 rounded-full shadow">
                      {item.price}
                    </span>
                  </div>
                </div>
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
