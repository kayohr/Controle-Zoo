const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const colaboradores = employees.find((colab) => colab.id === id).responsibleFor[0];
  // console.log(colaboradores);
  const animal = species.find((animals) => animals.id === colaboradores).residents;
  const newAnimal = animal.reduce((a, b) => ((a.age > b.age) ? a : b));
  return Object.values(newAnimal);

  // animal.map((g) => g.age.employees[0]).sort((a, b) => b - a);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;

// var elMaximo = [4,3,6,9].sort(function(a, b){return b - a;})[0];
/* const higherAge = users.reduce(function(prev, current) {
  return (prev.age > current.age) ? prev : current
}) */
