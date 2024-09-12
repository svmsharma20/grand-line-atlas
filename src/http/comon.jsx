import axios from "axios";

const getUrlWithParams = (base_url, end_point, params) => {
  if (params !== undefined) {
    const queryParams = new URLSearchParams(params).toString();
    return `${base_url}${end_point}?${queryParams}`;
  }
  return `${base_url}${end_point}`;
};

export const apiGet = async (base_url, endpoint = "", params) => {
  try {
    const url = getUrlWithParams(base_url, endpoint, params);
    const response = await axios.get(url);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const apiPost = async (base_url, end_point = "", data = {}) => {
  try {
    const url = `${base_url}${end_point}`;
    const response = await axios.post(url, data);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

const handleResponse = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  throw new Error(`HTTP error! Status: ${response.status}`);
};

const handleError = (error) => {
  console.error("API call error:", error);
  throw error;
};
