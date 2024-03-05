
import Select from "react-select";
import { StylesConfig } from "react-select";

const nationalitiesOption = [
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
    width: "20%", 
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
