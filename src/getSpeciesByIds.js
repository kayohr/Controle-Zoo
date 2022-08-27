const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  const vazio = []
  const animals = [
    { ID: '123', Type: 'Iena' },
    { ID: '456', Type: 'Leao' },
  ];
  const animalId = animals.map((elemento) => elemento.ID);
  return animalId;
}
console.log(animalId);
module.exports = getSpeciesByIds;
