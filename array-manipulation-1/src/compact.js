/* eslint-disable no-unused-vars */
const compact = array => {
  let i = -1;
  const arrayLength = array ? array.length : 0;
  let resultIndex = -1;
  const result = [];

  while (++i < arrayLength) {
    const v = array[i];
    if (v) {
      result[++resultIndex] = v;
    }
  }
  return result;
};
