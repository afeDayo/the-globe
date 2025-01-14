import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = ({ filterBySearch }) => {
  return (
    <form className="position-relative ">
      <BiSearchAlt2 className="fs-2 ms-4 position-absolute search-icon custom-text-color" />
      <input
        onChange={(event) => {
          filterBySearch(event.target.value.toLowerCase());
        }}
        className="py-3 border-0 shadow pe-2 rounded-2 bg-elements custom-text-color"
        type="text"
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default Search;
