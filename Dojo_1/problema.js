/*
Este problema foi utilizado em 1584 Dojo(s).

Apesar de o volume de cheques emitidos tenha diminuído drásticamente nos últimos anos, principalmente devido a popularização dos cartões de crédito e débito, 
eles ainda são utilizados em muitas compras, especialmente a de valores altos. E para auxiliar no seu preenchimento, vários estabelecimentos possuem máquinas que dado o valor 
da compra, preenchem o cheque com o seu valor por extenso.

Desenvolva um programa que dado um valor monetário, seja retornado o valor em reais por extenso.

Exemplo:

15415,16 -> quinze mil quatrocentos e quinze reais e dezesseis centavos
0,05 -> cinco centavos
2,25 -> dois reais e vinte e cinco centavos

const numeroPorExtensoBR = require('numero-por-extenso-br');
console.log(numeroPorExtensoBR(123)); // "cento e vinte e três"

*/

let numero = 15;

function extenso(numero) {
    let unidades = ["um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove"];
    let dezenas = ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa", "cem"];
    let stringNumero = String(numero).split(".");
    return(stringNumero + " reias" + " e centavos")
};

console.log(extenso(numero));