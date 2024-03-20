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
      id: 'pastaCarbonara',
      name: 'Pasta Carbonara',
      image: "https://mccormick.widen.net/content/vqhpgqv6r8/original/easy_spaghetti_carbo_637390546045230895_800x800.jpg",
      recipe: 'Länk till recept',
      description: 'Klassik italiensk pasta',
      ingredients: [],
    },
    {
      id: 'caesarSallad', 
      name: 'Caesar sallad',
      image: 'https://www.seriouseats.com/thmb/Fi_FEyVa3_-_uzfXh6OdLrzal2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg',
      recipe: 'Länk till recept',
      ingredients: [],
      description: 'En god och snabb sallad',
    },
    {
      id: 'lamspett', 
      name: 'Lamspett med ris',
      image: 'https://images.deliveryhero.io/image/fd-op/LH/v2rz-hero.jpg?width=512&height=384&quality=45',
      recipe: 'Länk till recept',
      ingredients: [],
      description:'lamspett med aromatisk ris'
    },

    {
      id: 'fisk', 
      name: 'Torsk med bacon',
      image: 'https://images.arla.com/recordid/508721D1-5311-495A-A42E85E50211EA01/torskrygg-med-bacon.jpg?format=jpg&width=1200&height=630&mode=crop',
      recipe: 'Länk till recept',
      ingredients: [],
      description:'Torsk i sås & knaprigt bacon'
    },
    {
      id: 'vego', 
      name: 'Avocado sallad',
      image: 'https://arke-images.aftonbladet.se/vegetarisk-mat[1000x667].jpg',
      recipe: 'Länk till recept',
      ingredients: [],
      description:'Avakado sallad med mango'
    },
    {
      id: 'kött', 
      name: 'Fläskfilé pasta',
      image: 'https://static.cdn-expressen.se/images/ba/4d/ba4dab1a9a7d4172a97021482d024e4e/4x3/1920@80.jpg',
      recipe: 'Länk till recept',
      ingredients: [],
      description:'Krämig pasta med fläskfilé'
    },
 
    
    // Lägg till fler maträtter här:
  ];
  
  export default dishes;