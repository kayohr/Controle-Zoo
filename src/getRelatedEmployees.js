const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  const gerente = employees.some((element) => element.managers.includes(id));
  return gerente;
}
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return employees.filter((element) => element.managers.includes(managerId))
      .reduce((acc, curr) => {
        acc.push(`${curr.firstName} ${curr.lastName}`);
        return acc;
      }, []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
