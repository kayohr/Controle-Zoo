const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const media = species.filter((element) => element.residents <= age);
  return media;
}
console.log((getAnimalsOlderThan('penguins', 7)));
module.exports = getAnimalsOlderThan;
