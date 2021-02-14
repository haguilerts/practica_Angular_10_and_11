function suma(a,b){
    return a+b;
}

const sumar1:(a:number, b:number) => number = function (a:number, b:number):number{
    return a+ b;
}
const sumar2:(a:number, b:number) => number = function (a,b){
    return a+ b;
}
const sumar3 = function (a:number, b:number):number{
    return a+ b;
}

// parametros opcionales y valores por defectos
function nombre_Completo(nombre:string, apellido?:string, edad:number=0):string{
    if (apellido) return nombre+" "+apellido;
    else return nombre +' edad: '+edad;
}

console.log( nombre_Completo('Giovanny') );         //Giovanny edad: 0
console.log( nombre_Completo('Rhonny','Aguilar') ); //Rhonny Aguilar
console.log( nombre_Completo('brandon','',123 ) );  //brandon edad: 123

// parametros infinitos o rest ()
function nombre_completo2(nombre:string , ...cantidad_nombres:string[]):string{
    return nombre +" | string[]=" + cantidad_nombres
}
console.log( nombre_completo2('kevin','Dolores', 'Garcia', 'Santos') ); // kevin | string[]=Dolores,Garcia,Santos

