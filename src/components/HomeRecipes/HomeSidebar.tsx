import React from 'react';

interface DropdownMenuProps {
  category: string;
  options: string[];
  categoryHandler: (category: string) => void;
}

function sidebarMenu({category, options, categoryHandler}: DropdownMenuProps) {




  return (
    <div>
      <button
        onClick={() => categoryHandler(category)}
        className="cursor-pointer w-full py-2 text-left focus:outline-none"
      >
        {category}
      </button>
      {options && (
        <ul className="left-0 mt-1 w-full z-10">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => categoryHandler(option)}
              className={`cursor-pointer py-2 px-4 ${
                category === option ? 'font-bold' : ''
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default sidebarMenu;
