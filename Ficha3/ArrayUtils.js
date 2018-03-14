
var arrayutils = {
    //4.a Vazio/ñ vazio
    isEmpty: function (array) {
        array == 0 ? resposta = true : resposta = false;
        return resposta;
    },
    //4.b Maximo
    numberMax: function (array) {
        var max = 0;
        for (i = 0; i != array.length; i++) {
            max = max > array[i] ? max : array[i];
        }
        return max;
    },
    //4.c Minimo
    numberMin: function (array) {
        var min = 0;
        for (i = 0; i != array.length; i++) {
            min = min < array[i] ? min : array[i];
        }
        return min;
    },
    //4.d Media
    numberAverage: function (array) {
        var media = 0;
        for (i = 0; i != array.length; i++) {
            media += array[i];
        }
        return (media / array.length);
    },
    //4.e Index Of
    indexOf: function (array, valor) {
        var index = -1;
        for (i = 0; i != array.length; i++) {
            if (valor == array[i]) {
                index = i;
            }
        }
        return index;
    },
    //4.f Sub Array
    subArray: function(array,start,end){
        var subArray = [];
        while (array[start] != array[end]) {
            subArray += array[start];
            start++; 
        }
        return subArray;

    }
}


module.exports = arrayutils;