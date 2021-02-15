import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';
import { style } from '@angular/animations';

@Directive({
  selector: '[appDirectiva]',//<p appDirectiva > </p> 
  // selector:'.appDirectiva'//en este caso se le accede como una  <p class='appDirectiva'> </p> 
})

export class SubrayadoDirective {
  myclass:string='bg.primary'
  mystyle:string[]=["color:blue; border:1px solid blue; background:yellow"]
  texto:string='Esta es mi directiva q puedo acceder como un class para cambiar su propiedades de dom. '
  //acceso de class
  @HostBinding('class') isHover:string;
  @Input() config:any;

  constructor(private elem:ElementRef, private render:Renderer2) {
    console.log('+++++++ usando directivas.. Elem hace referencia al al contenido q lo usa <p>')
    console.log(elem)
    console.log(elem.nativeElement)
    elem.nativeElement.style.textDecoration='underline';
    elem.nativeElement.style=this.mystyle;
    elem.nativeElement.class=this.myclass;
    elem.nativeElement.textContent=this.texto;
   
    render.setStyle(elem.nativeElement, 'border-radius','10px');
    this.config={
      colorHover:'blue',
      colorNoHover:'white'
    }
  }
   // Eventos 
  @HostListener('mouseover') onhover(){
    this.render.setStyle(this.elem.nativeElement, 'font-size','1em');
    this.render.setStyle(this.elem.nativeElement, 'background','white');
    this.render.setStyle(this.elem.nativeElement, 'color',this.config.colorHover);
    // this.isHover='siHover';
    console.log('___HostListener event (mouseover)_____');
  }
  @HostListener('mouseout') onMouseOut(){
    this.render.setStyle(this.elem.nativeElement, 'font-weight','1em');
    this.render.setStyle(this.elem.nativeElement, 'background','blue');
    this.render.setStyle(this.elem.nativeElement, 'color',this.config.colorNoHover);
    this.render.setStyle(this.elem.nativeElement, 'cursor','pointer');
    // this.isHover='noHover';
    console.log('___HostListener event (mouseout)_____')
  }
  @HostListener('mousedown') onClik(){
    this.isHover='siHover';
    console.log('sii onClik')
  }
  @HostListener('mouseup') ofClik(){
    this.isHover='noHover';
    console.log('noo ofClik')
  }
}
