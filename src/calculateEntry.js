const data = require('../data/zoo_data');
const { species, prices, entrants } = require('../data/zoo_data');

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
  if (entrants === '') {
    return 0;
  }
  return countEntrants(entrants).child;
//fazer forEach e smando e retornar em um

  //(.child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
  //countEntrants(entrants).child * entrants.child +  countEntrants(entrants).adult * entrants.adult + countEntrants(entrants).senior * entrants.senior

}
console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };

/* const entrants = [
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
]; */
