interface Dish {
  id: string;
  name: string;
  image: string;
  recipe: string;
  ingredients: string[];
  description: string;
}

  const dishes: Dish[] = [
    {
      id: 'pasta-carbonara',
      name: 'Pasta Carbonara',
      image: "https://mccormick.widen.net/content/vqhpgqv6r8/original/easy_spaghetti_carbo_637390546045230895_800x800.jpg",
      recipe: 'Länk till recept',
      description: 'Klassik italiensk pasta',
      ingredients: [],
    },
    {
      id: 'caesar-sallad', 
      name: 'Caesar sallad',
      image: 'https://www.seriouseats.com/thmb/Fi_FEyVa3_-_uzfXh6OdLrzal2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg',
      recipe: 'Länk till recept',
      ingredients: [],
      description: 'En god och snabb sallad',
    },
    {
      id: 'Lamspett med ris', 
      name: 'Lamspett med ris',
      image: 'https://images.deliveryhero.io/image/fd-op/LH/v2rz-hero.jpg?width=512&height=384&quality=45',
      recipe: 'Länk till recept',
      ingredients: [],
      description:'Saftig lamspett med gott aromatisk ris'
    },
    
    // Lägg till fler maträtter här:
  ];
  
  export default dishes;