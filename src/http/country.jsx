import { apiGet } from "./common";
import { formatString } from "../utils/utils";

const VERSION = "v3.1";
const BASE_URL = `https://restcountries.com/${VERSION}`;

const ENDPOINTS = {
  all: "/all",
  name: "/name/{0}",
  code: "/alpha/{0}",
  lisOfCodes: "/apha",
  currency: "/currency",
  language: "/lang/{0}",
  capital: "/capital/{0}",
  region: "/region/{0}",
  subregion: "/subregion/{0}",
};

export const getAllCountries = () => {
  return apiGet(BASE_URL, ENDPOINTS.all);
};

export const getAllCountriesSpecifics = (fields = []) => {
  return apiGet(BASE_URL, ENDPOINTS.all)
    .then((data) => {
      return data.map((country) => {
        const countryFragment = [];

        fields.forEach((field) => {
          if (field in country) {
            countryFragment.push(country[field]);
          }
        });

        return countryFragment;
      });
    })
    .then((countries) => {
      const countryName = [];
      countries.forEach((country) => countryName.push(country));
      countryName.sort();
      // console.log(countryName);
      console.log(JSON.stringify(countryName));
    });
};

export const getCountryByCode = async (code) => {
  const endpoint = formatString(ENDPOINTS.code, [code]);
  return apiGet(BASE_URL, endpoint);
};
