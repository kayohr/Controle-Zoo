const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Neste hórario o zoo está fechado.', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
});
it('Neste dia e hora, o zoo está aberto.', () => {
  expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
});

it('Neste dia e hora, o zoo se encontra fechado.', () => {
  expect(getOpeningHours('Wednesday', '09:00-AM')).not.toBe('The zoo is closed');
});
