import React from "react";
import Search from "../components/Search";
import Dropdown from "../components/Dropdown";
import Countries from "../components/Countries";

const HomePage = ({
  allCountries,
  filterBySearch,
  filterByRegion,
  loading,
}) => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between m-5 ">
        <Search filterBySearch={filterBySearch} />
        <Dropdown filterByRegion={filterByRegion} />
      </div>
      {loading && <div className="loader">🌎🎈</div>}
      {!loading && <Countries allCountries={allCountries} />}
    </div>
  );
};

export default HomePage;
