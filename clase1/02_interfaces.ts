
interface Persona{
    nombre:string;
    apellido:string;
    edad:number;
    sexoMasculino:boolean;
}

function mostraPersona(p:Persona){
    console.log(p)
}
mostraPersona({ nombre:'maria', apellido:'garcia', edad:23, sexoMasculino:false })

interface Coche{
    marca:string;
    modelo:string;
    color?:string; // no es necesario inicializarlo
    patente?:string
    // humano:object
}
 
function mostraCoche(c:Coche){
    console.log(`marca: ${c.marca} | modelo: ${c.modelo} | color: ${c.color} | patente: ${c.patente}`);
}
mostraCoche({ marca:'for',modelo:'c123', patente:'abc-123'})

// propiedades de solo lectura
interface Punto{
    readonly x:number;
    readonly y:number;
}
let p1:Punto={x:123, y:321}
console.log(`cordenadas: ${p1.x} : ${p1.y} `)
// p1.x=456; // no me permite modificar una ves asignado el valor 


interface Busqueda{
    (valor:string, buscar:string):boolean
}
const miBusqueda:Busqueda=(v:string, b:string): boolean=>{
    const result=v.search(b)
    return result > -1;
}
console.log(miBusqueda('hola','ola')) // true

interface Humano{
    nombre:string
    edad:number
}
class Adulto implements Humano{
    nombre:string // necesariamnet tiene q tener los atributos implemntados 
    edad:number
    coche:boolean

    constructor(name:string,age:number,car:boolean){
        this.nombre=name
        this.edad=age
        this.coche=car
    }

}
class Nene implements Humano{
    nombre:string // necesariamnet tiene q tener los atributos implemntados 
    edad:number
    sexo:boolean    
}