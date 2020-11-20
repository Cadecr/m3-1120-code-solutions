/* eslint-disable no-unused-vars */
const getValues = object => {
  const values = [];
  for (var v in object) {
    values.push(object[v]);
  }
  return values;
};
