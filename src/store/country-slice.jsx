import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country_list: [],
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  redcers: {
    setCountryList(countryList) {
      countryList = [...countryList];
    },
  },
});

export default countrySlice;
