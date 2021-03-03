export class Carrucel {
    posActual:number
    longitudMax:number
    posSiguiente:any;
    idPadre = 'idCarrucel'
    objs:any=document.getElementById(this.idPadre)?.children
    constructor(idPadre:string) {
        this.idPadre=idPadre
        this.posActual = 0;
        this.posSiguiente = 0;
        this.longitudMax = this.objs.length
        this.inicializandoDatos()
    }
    inicializandoDatos() {
        for (let j = 0; j < this.longitudMax; j++) {
            if (this.objs[j].classList.contains('cajaAzul')) {
                this.posActual = j
            }
        }
        console.log("Azul: " + this.posActual)
    }
    mostrar_Posicion_Actual() {
        console.log(this.posActual)
    }
    cambiarAdelante() {
        for (let i = this.posActual; i < this.longitudMax; i++) {
            if ((i + 1) == this.longitudMax) {
                this.posActual = 0
                this.posSiguiente = this.objs[(0)].classList.add('cajaAzul'); //1
                this.posSiguiente = this.objs[(i)].classList.replace('cajaAzul', 'cajaVerde');
                if ((this.objs[0].classList.item(1) === 'cajaVerde')) {
                    this.posSiguiente = this.objs[(0)].classList.replace('cajaVerde', 'cajaAzul');
                }
                break;
            } else if (this.objs[i].classList.contains('cajaAzul')) {
                this.posActual = (i + 1)
                if (this.objs[(i + 1)].classList.item(1) === 'cajaVerde') {
                    this.posSiguiente = this.objs[(i + 1)].classList.replace('cajaVerde', 'cajaAzul')
                } else {
                    this.posSiguiente = this.objs[(i + 1)].classList.add('cajaAzul')
                }
                this.objs[i].classList.replace('cajaAzul', 'cajaVerde')
                break;
            }
        }
        this.mostrar_Posicion_Actual()
    }
    cambiarAtras() {

        for (let i = this.posActual; i < this.longitudMax; i--) {
            this.posActual = (i - 1)
            if (this.posActual == -1) {
                this.posActual = 6
            }
            if (i == 0) {

                this.posSiguiente = this.objs[(i)].classList.replace('cajaAzul', 'cajaVerde')
                this.posSiguiente = this.objs[(this.longitudMax - 1)].classList.add('cajaAzul')
                if (this.objs[i].classList.item(1) === 'cajaVerde') {
                    this.posSiguiente = this.objs[(this.longitudMax - 1)].classList.replace('cajaVerde', 'cajaAzul')
                }
                break;
            } else if (this.objs[i].classList.contains('cajaAzul')) {
                if (this.objs[(i - 1)].classList.item(1) === 'cajaVerde') {
                    this.posSiguiente = this.objs[(i - 1)].classList.replace('cajaVerde', 'cajaAzul')
                } else {
                    this.posSiguiente = this.objs[(i - 1)].classList.add('cajaAzul')
                }
                this.objs[i].classList.replace('cajaAzul', 'cajaVerde')
                break;
            }
        }
        this.mostrar_Posicion_Actual()
    }
}
//var carrucel = new Carrucel('imgs')