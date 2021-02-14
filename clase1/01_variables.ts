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
let esValido: boolean=true;
esValido=false;

// numbre
let edad:number=12;
let sueldo:number=20.2;
// String
let nombre:string='Giovanny';
let apellido: string='Aguilar Rojas';
let nombreCompleto:string= `mi name es:${nombre} y ${apellido}`;
console.log(nombreCompleto)
//Array
let numero1:number[]=[1,2,4,5,7,8,3,6,9,2.2];
let numero2:Array<number>=[1,2,4,5,7,8,3,6,9,12.2];

let producto1:string[]=['frutilla','pera','banana','limon','manzana'];
let producto2:Array<string>=['frutilla','pera','banana','limon','manzana'];

let nota1:boolean[]=[true,false,true,true,false];
let nota2:Array<boolean>=[true,false,true,true,false];
console.log(numero1+"------"+numero2)
console.log(producto1+"------"+producto2)
console.log(nota1+"------"+nota2)
//tupla
let direcion:[string, number]=['av.libertador',258];
console.log(direcion)
enum Estado{
    Offline,    // 0
    Indefinido, // 1
    online,      // 2

}
enum MyEstado{
    Offline=-1,     // -1
    Indefinido=0,   // 0
    online=1,       // 1

}
let star:Estado=Estado.online;
console.log("enum1: "+star) // 2

let star1:Estado=Estado.online;
console.log("Enum2: "+star1) // 1
// se copila y se ejecuta

//unknown ( no tiene tipo)
let sinTipo:unknown=true;
sinTipo=32;
sinTipo=12.5;
sinTipo='hola';

// no acepta asignacion de tipos distintos
let nuevaCadena: string=' como estas? '
// nuevaCadena=sinTipo // no se le puede asignar aun variable de tipos diferentes

//any (acepta todo los tipos)
let tipoIndefinido:any='un gusto';
tipoIndefinido=sinTipo;
nuevaCadena=tipoIndefinido;

// void 
function saludar():void{
    console.log('hola mundo');

}










