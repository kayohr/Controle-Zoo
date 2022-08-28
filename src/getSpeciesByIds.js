const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  /*if (ids !== '') {
    return [];
  }*/
  const vazio = [];
  const especie = species.filter((element) => element.id === ids);
  return especie;

  /* const animals = [species];

  const animalId = animals.map((elemento) => elemento.ID);
  return animalId; */
}
// console.log(animalId);
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
