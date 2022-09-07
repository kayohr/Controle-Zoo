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
it('O dia para funcionar tem que ser valido, como na segunda feira', () => {
  expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError('The day must be valid. Example: Monday');
});
it('Deve ser AM ou PM', () => {
  expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
});
it('A hora deve representar um número', () => {
  expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError('The hour should represent a number');
});
it('As atas devem representar um número', () => {
  expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError('The minutes should represent a number');
});
it('', () => {
  expect(() => getOpeningHours('Wednesday', '13:00-AM')).toThrowError('The hour must be between 0 and 12');
});
it('', () => {
  expect(() => getOpeningHours('Wednesday', '00:61-AM')).toThrowError('The minutes must be between 0 and 59');
});
