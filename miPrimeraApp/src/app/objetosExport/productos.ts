export class Productos{
    nombre:string;
    imgUrl:string;
    precio:number;
    descripcion:string;
    cantidad?:number;
    constructor(pName:string,pImg:string,pPrecio:number,pDescrip:string){
        this.imgUrl=pImg;
        this.nombre=pName;
        this.precio=pPrecio;
        this.descripcion=pDescrip;
        this.cantidad=0;
    }
}