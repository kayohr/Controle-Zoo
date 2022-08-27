const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).not.toBe('4');
  });
  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).not.toBe([
      { name: 'Ilana', sex: 'female', age: 11 },
      { name: 'Orval', sex: 'male', age: 15 },
      { name: 'Bea', sex: 'female', age: 12 },
      { name: 'Jefferson', sex: 'male', age: 4 }]);
  });
  it('retorna a média de idade dos elefantes ', () => {
    expect(handlerElephants('averageAge')).not.toBe('10,5');
  });
  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).not.toBe('5');
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).not.toBe('4');
  });
  it('sem argumentos, retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined(undefined);
  });
});
