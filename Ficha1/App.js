/*Ex1 Start

var A = 100;
var B = 9000;
var C = A+B;
console.log(C);

End*/

//Ex5 Start
/*
function notaFinal(notaP1, notaP2, notaP3) {
    var notaF = notaP1 * 0.3 + notaP2 * 0.3 + notaP3 * 0.4;
    return notaF;
}


// FUNCTION MAIN !!!

function main() {
    var notaP1 = 15;
    var notaP2 = 12;
    var notaP3 = 10;
    var notaF = notaFinal(notaP1, notaP2, notaP3);
   console.log("Nota Final:"+ notaF);
        if (notaF < 9.5) {
            console.log("O Aluno não passou, com: "+notaF);
        }
        else {
            console.log("O Aluno passou, com: "+notaF);
        }

}

//Inline
main();

//Ex5 End 
*/

//Ex6 Start
/*
function numeroMes(mes) {
    switch (mes) {
        case 1: 
        console.log("Janeiro");
            break;
        case 2:
        console.log("Fevereiro");
            break;
        case 3:
            return("Março");
            break;
        case 4: 
        console.log("Abril");
            break;
        case 5:
        console.log("Maio");
            break;
        case 6:
        console.log("Junho");
            break;
        case 7: 
        console.log("Julho");
            break;
        case 8:
        console.log("Agosto");
            break;
        case 9: 
        console.log("Setembro");
            break;
        case 10:
        console.log("Outubro");
            break;
        case 11:
        console.log("Novembro");
            break;
        case 12:
        console.log("Dezembro");     
            break;           
        default:
            break;
    }
}

function main (){
    var mes = 12;
    console.log(mes);
    var mostrar = numeroMes(mes);
    
}


*/
//Ex6 End

//Ex7 Start
/*
function calculadora(numero1,numero2) {
    var numero1 = 100;
    var numero2 = 10;

    var adicao = numero1+numero2;
    console.log(adicao);

    var subtracao = numero1-numero2;
    console.log(subtracao);

    var multiplicacao = numero1*numero2;
    console.log(multiplicacao);

    var divisao = numero1 / numero2;
    console.log(divisao);

    var potencia = Math.pow(numero1, 2) + Math.pow(numero2, 2)
    console.log(potencia);

}
calculadora();
//Ex 7 End */

/*Ex 8 Start

function main() {
    for ( index = 1; index*5 < 20; index++) {
        console.log(index*5);
    }
}

Ex 8 End */

/*Ex 9 Start

function main() {
    var soma = 0;
    var decremento = 100;
    for (incremento = 0; incremento <= 100; incremento++) {
        soma = soma+(decremento+incremento);
        console.log(soma);
        decremento--;
    }
}

Ex 9 End */

/* //Ex 10 Begin

function main() {
    var somaFactor = 0;
    for (factorial = 1; factorial < 100; factorial++) {
        somaFactor += factorial+somaFactor;
        console.log(somaFactor);
    }
}

//Ex 10 End */

/*Ex 11 Begin

function main() {
    var media = 0;
    var max = Number.NEGATIVE_INFINITY;
    var min = Number.POSITIVE_INFINITY;
    var sequencia = [1,2,3,4,5,6,7,8,9,10];
    for (i = 0; i != sequencia.length; i++){
        max = max > sequencia[i]? max : sequencia[i];
        min = min < sequencia[i]? min : sequencia[i];
        media += i;
            if (i == sequencia.length){return(max,min,media)}
    }
    console.log(max);
    console.log(min);
    console.log(media/2);
}

Ex 11 End */

//Inline Geral

//main();


//Termina a ficha.