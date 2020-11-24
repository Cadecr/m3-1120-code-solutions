/* eslint-disable no-unused-vars */
const getWords = string => {
  if (string === '') {
    return [];
  } else {
    const getW = string.trim().split(" ");
    return getW;
  }
}
