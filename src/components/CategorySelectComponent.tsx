import React from "react";
import Select from "react-select";
import { StylesConfig } from "react-select";

const nationalitesOption = [
  "Italiensk",
  "Kinesisk",
  "Indisk",
  "Mexikansk",
  "Japansk",
  "Medelhavet",
  "Skandenaviskt",
  "Amerikanskt",
];

const mealOptions = [
  "Frukost",
  "Lunch",
  "Middag",
  "Mellanmål",
  "Efterrätt",
];

interface CategorySelectProps {
  selectedCategories: string[];
  onChange: (selectedCategories: string[]) => void;
}

const customStyle: StylesConfig = {
  control: (provided) => ({
    ...provided,
    width: "100%",
    display: "flex",
    justifyContent: "space-between", 
  }),
  option: (provided, state) => {
    const isMealType = (state.data as { group?: string })?.group === "mealtype";
    const isNationality = (state.data as { group?: string })?.group === "nationality";
  
    return {
      ...provided,
      borderLeft: isMealType ? "2px solid black" : "none",
      paddingLeft: isMealType ? "5px" : provided.paddingLeft,
      backgroundColor: isMealType ? "lightblue" : isNationality ? "lightgreen" : provided.backgroundColor,
      width: isMealType || isNationality ? "calc(50% - 1px)" : "100%", // Adjusted width for each group
      boxSizing: "border-box", // Include border in the width calculation
    };
  },
  group: (provided) => ({
    ...provided,
    paddingTop: "5px",
  }),
};

function CategorySelected({ selectedCategories, onChange }: CategorySelectProps) {
  const groupedOptions = [
    { label: "Meal Options", options: mealOptions.map((opt) => ({ value: opt, label: opt, group: "mealOptions" })) },
    { label: "Nationalities", options: nationalitesOption.map((opt) => ({ value: opt, label: opt, group: "nationalitesOption" })) },
  ];

  return (
    <Select
      styles={customStyle}
      isMulti
      options={groupedOptions}
      value={selectedCategories.map((category) => ({ value: category, label: category }))}
      onChange={(selectedOptions) => onChange((selectedOptions as { value: string; label: string }[]).map((option) => option.value))}
    />
  );
}

export default CategorySelected;




// import React from "react";
// import Select from "react-select";
// import {StylesConfig} from "react-select";

// const nationalitesOption = [
//     "Italiensk",
//     "Kinesisk",
//     "Indisk",
//     "Mexikansk",
//     "Japansk",
//     "Medelhavet",
//     "Skandenaviskt",
//     "Amerikanskt",
//   ];

// const mealOptions = [
//     "Frukost",
//     "Lunch",
//     "Middag",
//     "Mellanmål",
//     "Efterrätt",
// ]


// interface CategorySelectProps {
//     selectedCategories: string[];
//     onChange: (selectedCategories: string[]) => void;
//   }

// function CategorySelected({ selectedCategories, onChange }: CategorySelectProps)  {
    
    
//     const customStyle: StylesConfig = {
//         control: (provided) => ({
//             ...provided,
//             width:300,
//         }),
//         menuList: (provided) => ({
//             ...provided,
//             display: "flex",
//             flexDirection: "column",
//             gap: "4px",
//         }),
//         option: (provided, state) => {
//             return {
//                 ...provided,
//                 backgroundColor: state.isSelected ? "lightblue" : null,
      
//             };
//          },

//         group: (provided) => ({
//             ...provided,
//             borderBottom: "1px solid black",
//             marginBottom: "4px",
//         }),
//     } as StylesConfig;

//      const options = nationalitesOption.map((options) => ({
//          value: options,
//          label: options,
//          group: "nationality"
//      }));


//     const allOptions = [...options, ...mealOptions.map((options) => ({
//         value: options,
//         label: options,
//         group: "mealtype"
//     }))];

//     return (
//         <Select
//         styles={customStyle}
//         isMulti
//         options={allOptions}
//         value={selectedCategories.map((category) => ({value: category, label: category}))}
//         onChange={(selectedOptions) => onChange((selectedOptions as {value: string; label: string }[]).map((option => option.value)))}
//         // onChange={(selectedOptions) => onChange(selectedOptions as {value: string; label: string}[]).map((option) => option.value))}
//         />
//     )

    
// }

// export default CategorySelected
