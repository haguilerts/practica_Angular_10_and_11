import { Component, OnInit,OnDestroy ,Input, SimpleChange } from '@angular/core';
@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.scss']
})
export class CicloVidaComponent implements OnInit ,OnDestroy{
  @Input() texto:string;
  texto2:string;
  constructor() { 
    console.log(`*** i) constructor() *** / Texto Constructor: ${this.texto}`) //undefined
    // es lo primero q se ejecuta en este componente 
  }
  ngOnChanges(changes:SimpleChange){
    console.log('--------------- star ------------')
    console.log(`*** ii) ngOnChanges() *** / Texto ngOnChanges: ${this.texto}`)
    console.log(`# el 1° valor fue: ${changes.currentValue}/, luego se cambio por: ${changes.previousValue}`)
    console.log(changes)
    this.texto2=`el 1° valor fue: ${changes['texto'].previousValue}, luego se cambio por: ${changes['texto'].currentValue} `
    console.log('--------------- end ------------')
    // se ejecuta cada ves q la variable va cambiando su valor 
  }
  ngOnInit(): void {
    console.log(`*** iii) ngOnInit() *** / Texto ngOnInit: ${this.texto}`) //giovanny
    // es lo segundo q se ejecutaa 
  }
  ngAfterViewInit(){
    console.log(`*** iv) ngAfterViewInit() *** / Texto ngAfterViewInit: ${this.texto}`)

    // es el ultimo q se ejecuta para verificar q termino de cargar la pagina
  }

  // 
  ngOnDestroy(){
    //solo se ejecuta cuando: deja de estar visible en la panatlla, desaparece o  lo modificamos y en animaciones de salida
    console.log('fin del componente!!!')
  }
}
