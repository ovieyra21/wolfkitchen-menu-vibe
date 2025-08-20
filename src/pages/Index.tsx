import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";

const sandwichesAndPaninis = [
  {
    name: "Wolf",
    price: 75,
    description: "Jamón de pavo con queso manchego, tomate, lechuga y mayostaza."
  },
  {
    name: "Ranchero", 
    price: 75,
    description: "Jamón de pechuga de pavo, jamón de pavo, queso gouda, lechuga, germen de alfalfa y tomate con aderezo ranch."
  },
  {
    name: "Spicy wolf",
    price: 75,
    description: "Salami, jamón de pavo, chorizo, jalapeño, cebollín, queso gouda mayostaza."
  },
  {
    name: "Bacon chiken",
    price: 75,
    description: "Pechuga de pollo sazonada, tocino, queso americano blanco y aderezo de mayonesa chipotle."
  },
  {
    name: "Carnívoro",
    price: 75,
    description: "Carne de res con pimiento rojo y verde, queso gouda champiñones y mayostaza."
  }
];

const baguettes = [
  {
    name: "Wolf",
    price: 85,
    description: "Jamón de pavo con queso manchego."
  },
  {
    name: "Fit",
    price: 85,
    description: "Jamón de pavo y queso panela."
  },
  {
    name: "Chicken BBQ",
    price: 90,
    description: "Pollo empanizado de la casa."
  },
  {
    name: "Chicken crunch",
    price: 90,
    description: "Pollo empanizado de la casa."
  },
  {
    name: "Carnívoro",
    price: 95,
    description: "Carne de res, pimiento verde y rojo, queso gouda, champiñones y mayostaza."
  },
  {
    name: "Mexican",
    price: 95,
    description: "Jamón de pavo y queso panela a la plancha con pico de gallo, tocino, guacamole y mayostaza."
  },
  {
    name: "Bacon Chicken",
    price: 95,
    description: "Pechuga de pollo sazonada, tocino, queso americano blanco y aderezo de mayonesa chipotle."
  },
  {
    name: "Buffalo Bacon",
    price: 95,
    description: "Pollo buffalo con tocino, mix de queso cheddar y queso gouda en pan Blue cheese."
  }
];

const beveragesAndTreats = [
  {
    name: "Protein Iron Wolf",
    price: 47,
    description: "Proteína, nuez, almendra, pasas, plátano o fresa y leche deslactosada light."
  },
  {
    name: "Power Iron",
    price: 25,
    description: "Café + Leche + Chocolate."
  },
  {
    name: "Aguas del día 1/2 L.",
    price: 20,
    description: "Jamaica. | Fresa. | Mango. | Limón con chía. Horchata. | Pepino. | (Fruta disponible por temporada.)"
  },
  {
    name: "Aguas del día Jarra de 2 L.",
    price: 70,
    description: "Jamaica. | Fresa. | Mango. | Limón con chía. Horchata. | Pepino. | (Fruta disponible por temporada.)"
  },
  {
    name: "Brushettas",
    price: 45,
    description: "Plátano y fresa. | Crema de cacahuate. | Mermelada."
  },
  {
    name: "Galletas",
    price: 20,
    description: "Chispas de chocolate. | Caramelo. Arándano y chocolate blanco."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-wolf-dark">
      <Hero />
      
      <main className="py-16 px-4">
        <MenuSection 
          title="Sándwiches & Paninis"
          items={sandwichesAndPaninis}
        />
        
        <MenuSection 
          title="Baguettes"
          items={baguettes}
        />
        
        <MenuSection 
          title="Bebidas & Snacks"
          items={beveragesAndTreats}
        />
      </main>
    </div>
  );
};

export default Index;