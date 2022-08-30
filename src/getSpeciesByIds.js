const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((animal) => ids.includes(animal.id));
}

console.log(getSpeciesByIds('ef3778eb-2844-4c7c-b66c-f432073e1c6b'));
module.exports = getSpeciesByIds;
