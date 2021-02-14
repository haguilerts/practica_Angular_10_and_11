console.log('hola mundo');
/*
- se complica y se cra un js con:
    tsc archivo.ts
- se ejecuta con:
    node archivo.js  o node carpeta/archivo.js
*/
/*
- para usar las configuracions de tsconfig.json, ejecutamos:
    tsc
    69po
*/
// Booleasn
let esValido = true;
esValido = false;
// numbre
let edad = 12;
let sueldo = 20.2;
// String
let nombre = 'Giovanny';
let apellido = 'Aguilar Rojas';
let nombreCompleto = `mi name es:${nombre} y ${apellido}`;
console.log(nombreCompleto);
//Array
let numero1 = [1, 2, 4, 5, 7, 8, 3, 6, 9, 2.2];
let numero2 = [1, 2, 4, 5, 7, 8, 3, 6, 9, 12.2];
let producto1 = ['frutilla', 'pera', 'banana', 'limon', 'manzana'];
let producto2 = ['frutilla', 'pera', 'banana', 'limon', 'manzana'];
let nota1 = [true, false, true, true, false];
let nota2 = [true, false, true, true, false];
console.log(numero1 + "------" + numero2);
console.log(producto1 + "------" + producto2);
console.log(nota1 + "------" + nota2);
//tupla
let direcion = ['av.libertador', 258];
console.log(direcion);
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = 0] = "Offline";
    Estado[Estado["Indefinido"] = 1] = "Indefinido";
    Estado[Estado["online"] = 2] = "online";
})(Estado || (Estado = {}));
var MyEstado;
(function (MyEstado) {
    MyEstado[MyEstado["Offline"] = -1] = "Offline";
    MyEstado[MyEstado["Indefinido"] = 0] = "Indefinido";
    MyEstado[MyEstado["online"] = 1] = "online";
})(MyEstado || (MyEstado = {}));
let star = Estado.online;
console.log("enum1: " + star); // 2
let star1 = Estado.online;
console.log("Enum2: " + star1); // 1
// se copila y se ejecuta
//unknown ( no tiene tipo)
let sinTipo = true;
sinTipo = 32;
sinTipo = 12.5;
sinTipo = 'hola';
// no acepta asignacion de tipos distintos
let nuevaCadena = ' como estas? ';
// nuevaCadena=sinTipo // no se le puede asignar aun variable de tipos diferentes
//any (acepta todo los tipos)
let tipoIndefinido = 'un gusto';
tipoIndefinido = sinTipo;
nuevaCadena = tipoIndefinido;
// void 
function saludar() {
    console.log('hola mundo');
}
