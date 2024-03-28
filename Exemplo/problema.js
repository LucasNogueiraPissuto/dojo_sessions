/*
Retorne o número (contagem) de vogais na string fornecida.

Consideraremos a, e, i, o, u como vogais para este exercício (mas não o y).

A string de entrada conterá apenas letras minúsculas e/ou espaços.
*/

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;

    for (const char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}

module.exports = { getCount };