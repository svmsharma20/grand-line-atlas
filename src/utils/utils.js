export const formatString = (str, params = []) => {
  params.forEach((param, index) => {
    // Replace each placeholder {index} with the corresponding value
    str = str.replace(`{${index}}`, param);
  });
  return str;
};
