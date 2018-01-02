/**
 * Function parses float point numbers from string
 * @param {String} str - The string to parse
 * @returns The parsed floating number
 */

const weeblyFloat =  (str = '') => {
  const regexPattern = "^[+-]?([0-9]*[.])?[0-9]+";
  const result = str.match(regexPattern) || [];
  return result[0] || NaN;
};


