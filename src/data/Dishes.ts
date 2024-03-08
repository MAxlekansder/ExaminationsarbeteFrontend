interface Dish {
    name: string;
    image: string;
    recipe: string;
    ingredients: string[];
  }
  
  const dishes: Dish[] = [
    {
      name: 'Pasta Carbonara',
      image: 'carbonara.jpg',
      recipe: 'Länk till recept',
      ingredients: ['pasta', 'bacon', 'ägg', 'grädde']
    },
    {
      name: 'Caesar sallad',
      image: 'caesar.jpg',
      recipe: 'Länk till recept',
      ingredients: ['sallad', 'kyckling', 'krutonger', 'Caesardressing']
    },
    // Lägg till fler maträtter här:
  ];
  
  export default dishes;
  