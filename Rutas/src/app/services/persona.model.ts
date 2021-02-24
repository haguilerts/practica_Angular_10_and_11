export class Persona{
    nombre:string;
    apellido:string;
    edad:number;
    activo:boolean;
    constructor(pNombre:string,pApellido:string,pEdad:number,pActive:boolean){
        this.nombre=pNombre;
        this.apellido=pApellido;
        this.edad=pEdad;
        this.activo=pActive;
    }
}