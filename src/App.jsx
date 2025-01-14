import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetail from "./pages/CountryDetail";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  // ============== REACT HOOKS ==================
  // useState(): it is used to add state to a founctional component... its a way to store and update values (like variables) inside your component

  // useEffect(): To handle side effects in your component... Side effects are things like fetching data, updating the UI... it runs after the component renders

  // ========== FETCHING API =================

  useEffect(() => {
    const getData = async () => {
      const fetchAPI = await fetch("https://restcountries.com/v3.1/all");

      const jsonAPI = await fetchAPI.json();

      console.log(jsonAPI);
      setAllCountries(jsonAPI);
      setLoading(false);
    };

    setTimeout(() => {
      getData();
    }, 3000);
  }, []);

  // ================== FILTER BY SEARCH ==============
  const filterBySearch = (input) => {
    const searchedCountry = allCountries.filter((country) => {
      return country.name.common.toLowerCase().includes(input);
    });
    setFilteredCountries(searchedCountry);
  };

  // ============== FILTER BY REGION ==================
  const filterByRegion = (continent) => {
    const seletedRegion = allCountries.filter((eachCountry) => {
      return eachCountry.region === continent;
    });

    setFilteredCountries(seletedRegion);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                allCountries={
                  filteredCountries.length > 0
                    ? filteredCountries
                    : allCountries
                }
                filterBySearch={filterBySearch}
                filterByRegion={filterByRegion}
                loading={loading}
              />
            }
          />
          <Route path="/:countryName" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
