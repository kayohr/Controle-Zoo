const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const colaboradores = employees.find((colab) => colab.id === id).responsibleFor[0];
  console.log(colaboradores);
  const animal = species.find((animals) => animals.id === colaboradores).residents;
  return animal;
}

console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
module.exports = getOldestFromFirstSpecies;
