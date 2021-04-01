/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />
import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-mapas-google',
  templateUrl: './mapas-google.component.html',
  styleUrls: ['./mapas-google.component.scss']
})
export class MapasGoogleComponent implements OnInit {

  @ViewChild('divMap') divMap:ElementRef;

  //libreria de google map
  mapa:google.maps.Map;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    this.cargarMapa();
  }
  cargarMapa(){
    const options= {
      center:new google.maps.LatLng(-34.709614,-58.482582),
      zoom:17,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }
    this.mapa=new google.maps.Map(this.divMap.nativeElement, options)
    const icon= {
      url:'http://static.thenounproject.com/png/236773-200.png',
      scaledSize: new google.maps.Size(100,100)
    }
    const marcador=new google.maps.Marker({
      position:this.mapa.getCenter(),
      animation: google.maps.Animation.BOUNCE, // DROP: fijo | BOUNCE: en movimiento
      icon:icon
    })
    marcador.setMap(this.mapa)

   /* google.maps.event.addDomListener( this.mapa, 'click', (latLng: google.maps.LatLng) => {
      const marker= new google.maps.Marker({        
        position:latLng,
        animation: google.maps.Animation.DROP
      });
      marker.setDraggable(true)
      marker.setMap(this.mapa);

    }) */
  }
}
