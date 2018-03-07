 /*//Ex1 Begin

function main() {
    var peso = 40;
    var altura = 1.40;
    var imc = peso/Math.sqrt(altura);
    switch (imc) {
        case (imc<18.5):
            console.log('Abaixo do peso')
            return('Abaixo do peso')
            break;
        case (imc >= 18.5 && imc < 25 ):
            console.log('Normal')
            return('Normal')
        case (imc >= 25 && imc < 30):
            console.log('Pesado')
            return('Pesado')
        case (imc > 30):
            console.log('Demasiado Pesado')
            return('Demasiado Pesado')
        default:
            break;
    } 
}

//Ex1 End */

 /*//Ex2 Begin
function main() {
    var original = 'Hoje e Domingo';
    var decremento = original.length;
    var ultimaLetra = decremento;
    var primeiraLetra = 0;
    for(incremento = 0; incremento != decremento; (incremento++, decremento--)){
        ultimaLetra = original.charAt(decremento);
        primeiraLetra = original.charAt(incremento);
        original.replace(ultimaLetra, primeiraLetra);
        console.log(original.replace(ultimaLetra, primeiraLetra));
    }

}



//Ex2 End */

/* //Ex 3 Begin 

function main() {
    frase = "Bom dia";
    numeroDeVogais = 0;
    posicaoFrase = 0;
    for (index = frase.lenght; index == 0; index--){
        posicaoFrase = index;
        if (posicaoFrase == 'a' || 'e' ||'i' || 'o' || 'u') {
            numeroDeVogais = numeroDeVogais + 1;
            console.log(numeroDeVogais);
        }
        else{
            return numeroDeVogais;
        }
    }
}

//Ex 3 End */

//Ex 4 Begin /*

function main(){
    var letra = 'h';
    var frase = 'Hoi';
    frase = frase.toLowerCase(frase);
    for (posicaoFrase = frase.length; posicaoFrase != 0; posicaoFrase--){
        if (letra == frase[posicaoFrase]) { console.log(letra); }
    }
}

//Ex 4 End */
/*//Ex 5 Begin 

function main() {
    var horaEntrada = 8;
    var horaSaida = 18;
    console.log(horaSaida-horaEntrada);
    return(horaSaida-horaEntrada);
}

//Ex 5 End */
 /*//Ex 6 Begin

function main() {
    console.log('Desenha rectangulos');
    largura = 20;
    x = largura;
    for(altura = 10; altura != 0; altura--){

        for(x = largura; x != 0; x--) {
            console.log('*'*largura)
        }
    }
}


//Ex 6 End */


//Inline Geral
main();