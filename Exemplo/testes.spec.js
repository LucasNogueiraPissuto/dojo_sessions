// Importe a função que queremos testar
const { getCount } = require('./problema'); // Substitua pelo caminho correto do seu arquivo

describe('Testes para a função getCount', () => {
    it('Deve retornar 0 para uma string vazia', () => {
        expect(getCount('')).toBe(0);
    });

    it('Deve retornar 3 para a string "hello world"', () => {
        expect(getCount('hello world')).toBe(3);
    });

    it('Deve retornar 5 para a string "aeiou"', () => {
        expect(getCount('aeiou')).toBe(5);
    });

    it('Deve retornar 0 para a string "xyz"', () => {
        expect(getCount('xyz')).toBe(0);
    });
});
