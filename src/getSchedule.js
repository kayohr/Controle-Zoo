const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

const diasDaSemana = Object.keys(hours);

function animais(xablau) {
  const allAnimal = species.filter((element) => element.availability.includes(xablau))
    .map((a) => a.name);
  return allAnimal;
}
// console.log(animais('penguins'));

function dias() {
  const objeto = {};
  const days = Object.keys(hours);
  days.forEach((element) => {
    objeto[element] = { officeHour:
        `Open from ${hours[element].open}am until ${hours[element].close}pm`,
    exhibition: animais(element) };
    if (element === 'Monday') {
      objeto[element] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
  });
  return objeto;
}

function filtreDayAnimal(scheduleTarget) {
  return species.filter((element) => element.name === scheduleTarget).map((e) => e.availability)[0];
}
// console.log(dias());

function verificaAnimal(scheduleTarget) {
  return species.some((element) => element.name === scheduleTarget);
}

function verificaDays(scheduleTarget) {
  return diasDaSemana.some((element) => element === scheduleTarget);
}

function retornDay(scheduleTarget) {
  const objeto = {};
  objeto[scheduleTarget] = { officeHour:
     `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm`,
  exhibition: animais(scheduleTarget) };
  if (scheduleTarget === 'Monday') {
    objeto[scheduleTarget] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  return objeto;
}

function getSchedule(scheduleTarget) {
  if (verificaAnimal(scheduleTarget)) {
    return filtreDayAnimal(scheduleTarget);
  }
  if (!scheduleTarget) {
    return dias();
  }
  if (verificaDays(scheduleTarget)) {
    return retornDay(scheduleTarget);
  }
  return dias();
}
console.log(getSchedule('penguins'));
module.exports = getSchedule;

// 'Tuesday', 'Wednesday', 'Sunday', 'Saturday' ]
