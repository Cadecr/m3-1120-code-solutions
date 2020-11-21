/* eslint-disable no-unused-vars */
const capitalize = word => {
  const lower = word.toLowerCase();
  const cap = word.charAt(0).toUpperCase() + lower.slice(1);
  return cap;
}
