/* eslint-disable no-unused-vars */
const reverse = array => {
  for (var i = 0; i <= Math.floor((array.length - 1) / 2); i++) {
    const ar = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = ar;
  }
  return array;
};
