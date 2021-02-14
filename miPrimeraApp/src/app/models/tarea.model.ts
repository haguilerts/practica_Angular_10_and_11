 export class Tarea{
     producto:string;
     precio:number;
     stock:boolean;
     constructor(Tproducto='',Tprecio=0,Tstock=false){
        this.producto=Tproducto;
        this.precio=Tprecio;
        this.stock=Tstock;
     }
 }