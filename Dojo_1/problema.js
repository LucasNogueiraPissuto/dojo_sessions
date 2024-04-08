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

let numero = 199;

function extenso(numero) {
    let stringNumero = String(numero).split(".");
    let reais = stringNumero[0];

    let numeroExtenso = "";

    let unidade = {
        1: "um",
        2: "dois",
        3: "tres",
        4: "quatro",
        5: "cinco",
        6: "seis",
        7: "sete",
        8: "oito",
        9: "nove"
    };

    let dezena = {
        10: "dez",
        11: "onze",
        12: "doze",
        13: "treze",
        14: "quatorze",
        15: "quinze",
        16: "dezesseis",
        17: "dezessete",
        18: "dezoito",
        19: "dezenove",
        2: "vinte",
        3: "trinta",
        4: "quarenta",
        5: "cinquenta",
        6: "sessenta",
        7: "setenta",
        8: "oitenta",
        9: "noventa"
    };

    let centana = {
        100: "cem",
        1: "cento",
        2: "duzentos",
        3: "trezentos",
        4: "quatrocentos",
        5: "quinhentos",
        6: "seiscentos",
        7: "setessentos",
        8: "oitocentos",
        9: "novecentos"
    };

    //Codigo para unidades
    if(reais.length == 1) {
        numeroExtenso = numeroExtenso + unidade[reais];
        return numeroExtenso;
    };

    //Codigo para dezenas
    if(reais.length == 2 && reais[0] == "1") {
        numeroExtenso = numeroExtenso + dezena[reais];
    }
    
    if (reais.length == 2 && reais[0] != "1") {
        numeroExtenso = numeroExtenso + dezena[reais[0]];
        if (reais[1] != "0"){
            numeroExtenso = numeroExtenso + " e " + unidade[reais[1]];
        };
    }

    //Codigo para centenas
    if (reais == "100") {
        numeroExtenso = numeroExtenso + centana[reais];
    }
    else if (reais.length == 3){
        if (reais[1] == "0" && reais[2] == "0") {
            numeroExtenso = numeroExtenso + centana[reais[0]];
        }
        else if (reais[1] != "0" && reais[1] != "1" && reais[2] == "0") {
            numeroExtenso = numeroExtenso + centana[reais[0]] + " e " + dezena[reais[1]];
        }
        else if (reais[1] == "0" && reais[2] != "0") {
            numeroExtenso = numeroExtenso + centana[reais[0]] + " e " + unidade[reais[2]];
        }
        else if (reais[1] != "0" && reais[1] != "1" && reais[2] != "0") {
            numeroExtenso = numeroExtenso + centana[reais[0]] + " e " + dezena[reais[1]] + " e " + unidade[reais[2]];
        }
        else {
            let dezenaAgregado = reais[1] + reais[2];
            numeroExtenso = numeroExtenso + centana[reais[0]] + " e " + dezena[dezenaAgregado]
        }
    }

    return numeroExtenso;
};

console.log(extenso(numero));