// Almacena los números que salgan impares en un array impares

var arrayImpares = [];

// Almacena los números que salgan pares en un array pares

var arrayPares = [];

// Saca 50 números al azar entre 1 y 100

for(var i = 1; i <= 50; i++) {
    var numeroRandom = Math.floor((Math.random() * 100) + 1);
    if (numeroRandom % 2 !== 0) {
        arrayImpares.push(numeroRandom);
    } else {
        arrayPares.push(numeroRandom);
    };
};

// test array numeros random pares

console.log(arrayPares);

// test array numeros random impares

console.log(arrayImpares);


