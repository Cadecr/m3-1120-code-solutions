/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const myName = takeAChance('Cade');

myName.then(value => {
  console.log(value);
});

myName.catch(error => {
  console.log(error);
});
