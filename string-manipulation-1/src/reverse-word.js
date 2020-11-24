/* eslint-disable no-unused-vars */
const reverseWord = word => {
  let reverse = '';
  for (const c of word) {
    reverse = c + reverse;
  }
  return reverse;
};
