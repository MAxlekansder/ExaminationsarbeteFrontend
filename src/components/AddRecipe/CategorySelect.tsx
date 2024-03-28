//Alexander

import Select from "react-select";
import { StylesConfig } from "react-select";

// const proteinCategories = [  // need to revisit
//   {
//     label: "Kött",
//     options: [
//       { value: "Nötkött", label: "Nötkött" },
//       { value: "Fläskkött", label: "Fläskkött" },
//       { value: "Lamm", label: "Lamm" },
//       { value: "Viltkött", label: "Viltkött" }
//     ]
//   },
//   {
//     label: "Fågel",
//     options: [
//       { value: "Kyckling", label: "Kyckling" },
//       { value: "Anka", label: "Anka" },
//       { value: "Kalkon", label: "Kalkon" }
//     ]
//   },

//   {
//     label: "Mejeriprodukter",
//     options: [
//       { value: "Mjölk", label: "Mjölk" },
//       { value: "Ost", label: "Ost" },
//       { value: "Yoghurt", label: "Yoghurt" }
//     ]
//   }
// ];

const proteinCategories = [
  "Meat",
  "Poultry",
  "Fish",
  "Seafood",
  "Candy",
  "Pork",
  "Soy",
  "Tofu",
  "Vegetarian",
  "Diary",
];


const nationalitiesOption = [
  "Italian",
  "Chinese",
  "Indian",
  "Mexican",
  "Japanese",
  "Mediterranean",
  "Scandinavian",
  "American",
  "Thai",
];


const mealOptions = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snack",
  "Dessert",
  "Appetizer",
];



interface CategorySelectProps {
  selectedCategories: string[];
  onChange: (selectedCategories: string[]) => void;
}

const customStyle: StylesConfig = {
  control: (provided) => ({
    ...provided,
    width: "100%", 
    fontFamily: "monospace",
  }),

  group: (provided) => ({
    ...provided,
    paddingTop: "5px",

  }),

  menu: (provided) => ({
    ...provided, 
    maxWidth: "400px",
    whiteSpace: "normal",
    fontFamily: "monospace",
  })
};


function CategorySelected({ selectedCategories, onChange }: CategorySelectProps) {
  const groupedOptions = [
    { label: "Måltider", options: mealOptions.map((option) => ({ value: option, label: option, group: "mealtype" })) },
    { label: "Nationaliteter", options: nationalitiesOption.map((option) => ({ value: option, label: option, group: "nationality" })) },
    { label: "Protein", options: proteinCategories.map((option) => ({ value: option, label: option, group: "proteinCategories" })) },
  ];

  
  return (
    <Select
      id ="category-select"
      placeholder ="välj..."
      styles={customStyle}
      isMulti
      options={groupedOptions}
      value={selectedCategories.map((category) => ({ value: category, label: category }))}
      onChange={(selectedOptions) => onChange((selectedOptions as { value: string; label: string }[]).map((option) => option.value))}
    />
  );
}

export default CategorySelected;
