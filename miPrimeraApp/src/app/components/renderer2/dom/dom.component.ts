import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
//https://angular.io/api/core/Renderer2#setvalue
@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.scss']
})
export class DOMComponent implements OnInit {
  @ViewChild('asTilte') title:ElementRef;
  @ViewChild('asImg') img:ElementRef;
  @ViewChild('btntext') btntext:ElementRef;
  @ViewChild('btnimg') btnimg:ElementRef;
  @ViewChild('btncontainer') btncontainer:ElementRef;
  @ViewChild('container') container:ElementRef;
  @ViewChild('contenedor') contenedor:ElementRef;
  @ViewChild('div1', { static: false }) div1: ElementRef;
  @ViewChild('div2', { static: false }) div2: ElementRef;
  @ViewChild('div3', { static: false }) div3: ElementRef;
  @ViewChild('Pchild', { static: false }) child: ElementRef;
  @ViewChild('article') abuelo:ElementRef;
  @ViewChild('broder') broder:ElementRef;
  @ViewChild('hermano') hermano:ElementRef;
  constructor( private renderer2:Renderer2,private el:ElementRef) { }

  ngOnInit(): void {  
  }
  
  changeimg(){
    const myimg=this.img.nativeElement;
    this.renderer2.addClass(myimg,'border2')// añade una clase
    this.renderer2.setAttribute(myimg,'src','../../../../assets/productos/bebida1.jpg')

    this.renderer2.listen(myimg,'click',(e)=>{
      console.log('Hisiste click en la img!!')
      this.renderer2.removeClass(myimg, 'border2');
      this.renderer2.removeAttribute(this.btnimg.nativeElement, 'name');
      this.renderer2.setAttribute(myimg,'src','../../../../assets/productos/bebida2.jpg')
    })
    this.renderer2.setAttribute(this.btnimg.nativeElement, "type", "submit");
    this.renderer2.setAttribute(this.btnimg.nativeElement, "name", "enviar");
    this.renderer2.setValue(this.btntext.nativeElement,'textooooo')
  }
  change(){
    const mititle=this.title.nativeElement;
    this.renderer2.createText('soy giovanny')
    this.renderer2.setStyle(mititle,'color','blue')// cambia el color de texto
    this.renderer2.listen(mititle,'click',(e)=>{
      console.log('ok')
      
    })
    this.renderer2.setAttribute(this.btntext.nativeElement, "autofocus", "true");
    this.renderer2.setAttribute(this.btntext.nativeElement, "value", "presionado");
   
  }
  containerText(){
    this.renderer2.appendChild(this.btncontainer.nativeElement, this.renderer2.createText(" text. "));
    let text =this.renderer2.createText("hola Bienvenido a mi contenedor. ");
    this.renderer2.appendChild(this.container.nativeElement, text);
    this.renderer2.setStyle(this.container.nativeElement, 'color', 'blue');
    this.renderer2.listen(this.container.nativeElement,'click',(e)=>{
     console.log(e)
     this.renderer2.removeStyle(this.container.nativeElement, 'color');
    })
   
    this.escribir()
  }
  escribir(){
    this.renderer2.listen(this.contenedor.nativeElement,'click',(e)=>{
      console.log('ingresado')
        var nuevoElemento=this.renderer2.createElement("span");
        let text=this.renderer2.createText('como estas')
        this.renderer2.appendChild(nuevoElemento,text);
       //this.renderer2.setProperty(nuevoElemento,"innerHTML",text)
        
     this.renderer2.appendChild(this.contenedor.nativeElement,nuevoElemento);
       
     })
  }
  insertBeforeDiv1(){
    let div1=this.renderer2.parentNode(this.child.nativeElement);
    let divbroder = this.renderer2.createElement('div');  
    const text = this.renderer2.createText('div1 - div2 ');
    this.renderer2.setStyle(divbroder,'color','yellow')
    this.renderer2.appendChild(divbroder, text);
    this.renderer2.insertBefore(this.abuelo.nativeElement,divbroder,this.div2.nativeElement);
  }
  insertBeforeDiv2(){
      let div = this.renderer2.createElement('div');    
      const text = this.renderer2.createText('texto dentro de div2 antes del div3 ');
      this.renderer2.setStyle(div,'color','blue')
      this.renderer2.appendChild(div, text);
      const coment=this.renderer2.createComment('este es un comentario')
      this.renderer2.appendChild(div,coment)
    this.renderer2.insertBefore(this.div2.nativeElement,div,this.div3.nativeElement);
  }
  insertBeforeDiv3(){
    //this.hermano.nativeElement: es el hermano del medio
    let herm3=this.renderer2.nextSibling(this.hermano.nativeElement);// selecciona la siguiente hermano
    this.renderer2.setStyle(herm3,'color','yellow')
  }
  elimina(){
    //const ok = this.renderer2.selectRootElement('.st1',true);// no elimina su contenido
    const off = this.renderer2.selectRootElement('.st2',false);// si elimina su contenido o hijos q lleve
  }
}
