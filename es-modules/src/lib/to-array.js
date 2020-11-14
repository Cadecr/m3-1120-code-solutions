function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

// module.exports = toArray;

// This is the best way to export default functions.
export default toArray;
