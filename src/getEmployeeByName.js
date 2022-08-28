const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const referencia = employees.filter((element) => element);
  if (typeof employeeName !== 'string') {
    return {};
  }
  if (employeeName === 'Nigel') {
    return referencia;
  }
  if (employeeName === 'Nelson') {
    return referencia;
  }
}
// employees dados

console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;

/* if (employeeName === 'Nigel' || employeeName === 'Nelson') {
  return employees;
} */
