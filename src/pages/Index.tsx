import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";

const beverages = [
  {
    name: "Aguas del Día",
    price: "1/2 L: $35 | 1 L: $50 | Jarra 2L: $90",
    description: "Jamaica, Fresa, Mango, Limón con chía, Horchata, Pepino (fruta disponible por temporada)."
  },
  {
    name: "Licuados",
    price: "1/2 L: $35 | 1 L: $70 | Jarra 2L: $140",
    description: "Fresa, Plátano con chocolate. Preguntar por disposición de frutas."
  },
  {
    name: "Jugo a tu Elección",
    price: "$25",
    description: "Zanaranja, Verde, Desinflama abdomen, Digestión y energía, Colon limpio, Desinflamante, Quema grasa, Adiós grasa. Tamaños: 250ml, 1/2L, 1L."
  },
  {
    name: "Protein Iron Wolf",
    price: "$47",
    description: "Proteína, nuez, almendra, pasas, plátano o fresa y leche deslactosada light. Máximo 3 complementos."
  },
  {
    name: "Power Iron",
    price: "$25",
    description: "Café + Leche + Chocolate."
  }
];

const breakfast = [
  {
    name: "Brushettas",
    price: "$45",
    description: "3 piezas. Toppings: Plátano y fresa, Crema de cacahuate, Mermelada."
  },
  {
    name: "Galletas",
    price: "$20",
    description: "Chispas de chocolate, Caramelo, Arándano y chocolate blanco."
  },
  {
    name: "Hot Cakes & Waffles",
    price: "$60",
    description: "3 piezas + toppings. Frutos secos, Avena, Proteína, Plátano, Fresa, Frambuesa, Manzana."
  },
  {
    name: "Huevos",
    price: "$70",
    description: "Revueltos, estrellados u omelette. Ingredientes: Jamón, Salchicha, Chorizo, Machaca, Espinacas, Pico de gallo. Con frijoles y tortilla o pan."
  },
  {
    name: "Bowl Parridge (Tazón de avena)",
    price: "$45",
    description: "Toppings: Plátano, Fresa, Manzana, Frambuesa, Blue berry."
  },
  {
    name: "Con yogurt griego y fruta",
    price: "$50",
    description: "Agrega extra proteína: $22."
  },
  {
    name: "Chilaquiles rojos o verdes",
    price: "Sencillos: $75 | Con carne: $89 | Con pollo: $85 | Con huevo: $80",
    description: "Acompañados con frijoles y queso."
  }
];

const baguettes = [
  {
    name: "Wolf",
    price: "15cm: $45 | 30cm: $90",
    description: "Jamón de pavo con queso manchego."
  },
  {
    name: "Fit",
    price: "15cm: $45 | 30cm: $90",
    description: "Jamón de pavo y queso panela."
  },
  {
    name: "Chicken BBQ",
    price: "15cm: $50 | 30cm: $100",
    description: "Pollo BBQ de la casa."
  },
  {
    name: "Chicken Crunch",
    price: "15cm: $50 | 30cm: $100",
    description: "Pollo empanizado de la casa."
  },
  {
    name: "Carnívoro",
    price: "15cm: $50 | 30cm: $100",
    description: "Carne de res, queso gouda, champiñones y mayostaza."
  },
  {
    name: "Mexican",
    price: "15cm: $50 | 30cm: $100",
    description: "Jamón de pavo y queso panela a la plancha con pico de gallo, tocino, guacamole y mayostaza."
  },
  {
    name: "Bacon Chicken",
    price: "15cm: $50 | 30cm: $100",
    description: "Pechuga de pollo sazonada, tocino, queso americano blanco y aderezo de mayopotle."
  },
  {
    name: "Buffalo Bacon",
    price: "15cm: $50 | 30cm: $100",
    description: "Pollo buffalo con tocino, mix de queso cheddar y queso gouda."
  }
];

const sandwichesAndPaninis = [
  {
    name: "Wolf",
    price: "$75",
    description: "Jamón de pavo con queso manchego, tomate, lechuga y mayostaza. Con puré de papa o ensalada de zanahoria."
  },
  {
    name: "Ranchero",
    price: "$75",
    description: "Jamón de pechuga de pavo, jamón de pavo, queso gouda, lechuga, germen de alfalfa y tomate con aderezo ranch."
  },
  {
    name: "Spicy Wolf",
    price: "$75",
    description: "Salami, jamón de pavo, chorizo, jalapeño, cebollín, queso gouda mayostaza."
  },
  {
    name: "Chicken Bacon",
    price: "$75",
    description: "Pechuga de pollo sazonada, tocino, queso americano blanco y aderezo de mayopotle."
  },
  {
    name: "Carnívoro",
    price: "$75",
    description: "Carne de res con pimiento rojo y verde, queso gouda, champiñones y mayostaza."
  },
  {
    name: "Club Sandwich",
    price: "$100",
    description: "Sándwich club especial de la casa."
  }
];

const wraps = [
  {
    name: "Pollo",
    price: "$80",
    description: "Pechuga de pavo sazonada, lechuga, jitomate, cebolla y aderezo ranch o césar."
  },
  {
    name: "Jamones",
    price: "$80",
    description: "Jamón de pavo, jamón de pierna, queso manchego, lechuga, jitomate y cebolla."
  },
  {
    name: "Chicken Crunch",
    price: "$85",
    description: "Pechuga de pollo empanizada, queso cheddar, lechuga, jitomate, mayostaza y aderezo o búffalo."
  },
  {
    name: "Beef and Guacamole",
    price: "$85",
    description: "Tiras de res con pico de gallo y guacamole."
  }
];

const salads = [
  {
    name: "Clásica",
    price: "Grande: $90 | Mediana: $45",
    description: "Pollo, lechuga mixta, zanahoria, col morada, frituras, queso cheddar y aderezo ranch."
  },
  {
    name: "César Pollo",
    price: "Grande: $90 | Mediana: $45",
    description: "Pollo, lechuga orejona, queso parmesano, croutones y aderezo César."
  },
  {
    name: "Buffalo",
    price: "Grande: $100 | Mediana: $50",
    description: "Pechuga empanizada, salsa búffalo, lechuga, zanahoria, queso cheddar, tocino, frituras y aderezo ranch."
  },
  {
    name: "Wolf César",
    price: "Grande: $100 | Mediana: $50",
    description: "Pollo marinado, chipotle, lechuga orejona, champiñones, tomate, croutones, queso parmesano y aderezo César."
  },
  {
    name: "Pasta con Atún",
    price: "Grande: $100 | Mediana: $50",
    description: "Atún, pasta, jamón y queso cheddar con aderezo chipotle."
  }
];

const diets = [
  {
    name: "Pollo",
    price: "$42/100g",
    description: "Pollo natural a granel."
  },
  {
    name: "Pollo Crunch",
    price: "$48/100g",
    description: "Pollo empanizado a granel."
  },
  {
    name: "Res",
    price: "$45/100g",
    description: "Carne de res a granel."
  },
  {
    name: "Acompañamientos",
    price: "Desde $15/100g",
    description: "Puré papa ($30), Huevo cocido ($15), Pasta ($20), Arroz ($20), Guacamole ($25), Verduras ($18), Salsa BBQ ($15)."
  }
];

const fruits = [
  {
    name: "Bowl de Frutas",
    price: "$55",
    description: "Plátano, fresa, piña, papaya, melón, naranja, mango y manzana."
  },
  {
    name: "Complementos Extra",
    price: "$10",
    description: "Frutos secos: Nuez, almendras, pasas, arándano y cacahuate."
  }
];

const tacos = [
  {
    name: "Bisteck o Pollo",
    price: "$60",
    description: "3 piezas de tortilla grande con cama de guacamole. Añade huevo duro por $15."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-wolf-dark">
      <Hero />
      
      <main className="py-16 px-4">
        <MenuSection 
          title="Bebidas"
          items={beverages}
        />
        
        <MenuSection 
          title="Desayunos y Platos Ligeros"
          items={breakfast}
        />
        
        <MenuSection 
          title="Baguettes"
          items={baguettes}
        />
        
        <MenuSection 
          title="Sándwiches & Paninis"
          items={sandwichesAndPaninis}
        />
        
        <MenuSection 
          title="Wraps"
          items={wraps}
        />
        
        <MenuSection 
          title="Ensaladas"
          items={salads}
        />
        
        <MenuSection 
          title="Dietas a Granel"
          items={diets}
        />
        
        <MenuSection 
          title="Frutas"
          items={fruits}
        />
        
        <MenuSection 
          title="Tacos"
          items={tacos}
        />
      </main>
    </div>
  );
};

export default Index;