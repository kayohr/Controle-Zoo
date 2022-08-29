const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const res = employees.find((element) => element.firstName === employeeName || element.lastName === employeeName);
  if (res) {
    return res;
  }
  return {};
}
// employees dados

console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
