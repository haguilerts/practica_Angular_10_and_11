interface Perfil1{
    id:number;
    nombre:string;
    apellido:string;
    img:string;
    edad:number;
    sexo:boolean;
    pais:string
    profecion:string
    
}

export class Perfil implements  Perfil1{
    id:number;
    nombre:string;
    apellido:string;
    img:string;
    edad:number;
    sexo:boolean;
    pais:string
    profecion:string
   
    constructor(pid:number, nombre:string, apellido:string, img:string,edad:number, sexo:boolean, pais:string, profecion:string ) {
        this.nombre=nombre;
        this.id=pid
        this.apellido=apellido
        this.img=img
        this.edad=edad
        this.sexo=sexo
        this.pais=pais
        this.profecion=profecion
    }
    
}
interface Musicas{
    id:number
    titulo:string
    añoPublicado:number
    img:string
    perfonaje:number
}
interface Trofeos_logros{
    id:number
    img:string
    perfonaje:number
}
export class Detalles_sub_perfil implements Musicas,Trofeos_logros {
    id:number
    titulo:string
    añoPublicado:number
    img:string
    perfonaje:number
    constructor() {
        this.id=-1
        this.titulo=''
        this.añoPublicado=0
        this.img=''
        this.perfonaje=-1        
    }
}