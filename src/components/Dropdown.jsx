import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Dropdown = ({ filterByRegion }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const options = [
    "All",
    "Africa",
    "Americas",
    "Antarctic",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const [seletedRegion, setSeletedRegion] = useState("Filter by Region");

  return (
    <div
      onClick={() => {
        setToggleDropdown(!toggleDropdown);
      }}
      className="d-flex align-items-center gap-5 shadow p-3 rounded-2 bg-elements custom-text-color position-relative 
      dropdown-display"
    >
      <p className="mb-0">{seletedRegion}</p>
      <RiArrowDownSLine
        style={{
          transform: toggleDropdown ? "rotate(180deg)" : "rotate(0deg)",
          transition: "0.3s ease-in-out",
        }}
      />
      {toggleDropdown && (
        <ul className="position-absolute dropdown-options bg-elements px-0 py-2 rounded-2 shadow">
          {options.map((option) => {
            return (
              <li
                onClick={() => {
                  setSeletedRegion(
                    option === "All" ? "Filter by Region" : option
                  );
                  filterByRegion(option);
                }}
                className="px-3 py-1"
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
