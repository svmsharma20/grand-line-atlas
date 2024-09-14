import { COUNTRY_CAPITALS } from "../assets/data/country_capitals";
import { COUNTRY_NAMES } from "../assets/data/country_names";
import { getCountryByCode } from "../http/country";

export const getCountryDetailsByCode = async (countryCode) => {
  const localData = localStorage.getItem(countryCode);
  if (localData !== null) {
    return JSON.parse(localData);
  }

  const data = await getCountryByCode(countryCode);

  const cleanData = extractReleventData(data[0]);

  localStorage.setItem(countryCode, JSON.stringify(cleanData));

  return cleanData;
};

const extractReleventData = (data) => {
  const relevantData = {};

  relevantData.name = data.name.common;
  relevantData.oficialName = data.name.official;
  relevantData.countryCode = data.cca3;

  // const currencyInfoKey = Object.keys(data.currencies)[0];
  // relevantData.currency = {};
  // relevantData.currency.code = currencyInfoKey;
  // relevantData.currency.name = data.currencies[currencyInfoKey].name;
  // relevantData.currency.symbol = data.currencies[currencyInfoKey].symbol;

  relevantData.capital = data.capital;

  relevantData.region = data.region;
  relevantData.subregion = data.subregion;

  relevantData.borders = data.borders;
  relevantData.area = data.area;

  // relevantData.flag = data.flags;

  // relevantData.maps = data.maps;

  return relevantData;
};

export const getCodeFromCountryName = (countryName) => {
  return (
    Object.keys(COUNTRY_NAMES).find(
      (key) => COUNTRY_NAMES[key] === countryName
    ) || null
  );
};

export const getCodeFromCapitalName = (capitalName) => {
  return (
    Object.keys(COUNTRY_CAPITALS).find(
      (key) => COUNTRY_CAPITALS[key] === capitalName
    ) || null
  );
};
