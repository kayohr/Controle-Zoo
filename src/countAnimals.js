const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const animaisOrde = species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
    return animaisOrde;
  } if (animal.specie && animal.sex) {
    return species.filter((element) => element.name === animal.specie)[0].residents
      .filter((a) => a.sex === animal.sex).length;
    // animais.residents.filter((filterSex) => filterSex.sex === animal.sex).length;
  } if (animal.specie) {
    return species.find((element) => element.name === animal.specie).residents.length;
  }
}
console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;

/* A função countAnimals, caso não receba nenhum parâmetro, deve retornar todas as espécies e a quantidade de residentes de cada uma;

A função countAnimals, caso receba como parâmetro um objeto com a chave specie, deve retornar a quantidade de animais
daquela espécie;

A função countAnimals, caso receba como parâmetro um objeto com as chaves specie e sex, deve retornar a quantidade de
animais daquela espécie, no sexo selecionado. */

/* if (animal === '') {
  return species.map((element) => ({ [element.name]: element.residents.length }));
}
if (animal) {
  const animais = species.find((element) => element.name === animal.specie);

  return animais.residents.length;
}
if (animal && animal.sex) {
  const animais = species.filter((element) => element.name === animal.specie);

  return animais.map((element) => element.residents.length);
  //animais.residents.filter((filterSex) => filterSex.sex === animal.sex).length;
}

console.log(countAnimals({ specie: 'penguins', sex: 'male' })); */

/* const animais = species.find((element) => element.name === animal.specie);
  if (animal.specie && animal.sex) {
    return animais.residents.filter((filterSex) => filterSex.sex === animal.sex).length;
  }
  if (animal.specie) {
    return animais.residents.length;
  }
  return species.map((element) => ({ [element.name]: element.residents.length })); */
