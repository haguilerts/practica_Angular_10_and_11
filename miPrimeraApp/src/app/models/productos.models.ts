export class Producto{
    producto:string;
    precio:number;
    cantidad:number;
    descripcion:string    
    img?:string;
    constructor(pName:string='Spiedo',pQuantity:number=2,pPrecio:number=150,pdescripcion:string=' Esquiso y sabroso',pImg:string='../../../assets/productos/comida1.jpg'){
        this.producto=pName;
        this.cantidad=pQuantity;
        this.precio=pPrecio;
        this.descripcion=pdescripcion;
        this.img=pImg;
    }
}