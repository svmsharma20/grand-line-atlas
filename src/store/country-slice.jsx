import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countryList: {},
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  redcers: {
    // setCountryList(countryList) {
    //   countryList = { ...countryList };
    // },
    addCountry(country) {
      const countryCode = country.cca3;
      countryList[countryCode] = country;
    },
  },
});

export default countrySlice;
