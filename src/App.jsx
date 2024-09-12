import { useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { getAllCountries, getAllCountriesSpecifics } from "./http/country";

// https://restcountries.com/#endpoints-all
// https://gitlab.com/restcountries/restcountries/-/blob/master/FIELDS.md

function App() {
  useEffect(() => {
    // console.log(getAllCountries());
    // getAllCountries().then((data) => {
    //   console.log(data);
    // });
    const countryName = [];
    getAllCountriesSpecifics(["name"]);
    // .then((countries) => {
    //   countries.forEach((country) => countryName.push(country.name.official));
    //   countryName.sort();
    //   console.log(countryName);
    // });
  }, []);

  return (
    <>
      <Navigation />
    </>
  );
}

export default App;
