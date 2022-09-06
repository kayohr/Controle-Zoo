const data = require('../data/zoo_data');

const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const objeto = {};
  const child = entrants.filter((element) => element.age < 18).length;
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const senior = entrants.filter((element) => element.age >= 50).length;
  objeto.child = (child);
  objeto.adult = (adult);
  objeto.senior = (senior);
  return objeto;
}

function calculateEntry(entrants) {
  // https://programandosolucoes.dev.br/2021/03/02/objeto-vazio-javascript/#:~:text=O%20Javascript%20n%C3%A3o%20consegue%20comparar,comparar%20os%20dois%20retornar%C3%A1%20sucesso.
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const sum = countEntrants(entrants);
  const childs = sum.child * prices.child;
  const adults = sum.adult * prices.adult;
  const senior = sum.senior * prices.senior;
  const final = (childs + adults + senior);
  return final;
}

module.exports = { calculateEntry, countEntrants };
