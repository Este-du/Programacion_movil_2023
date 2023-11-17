import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  latitud:number | undefined;
  longitud:number | undefined;

  constructor() {}

  async obtenerCordenadas(){
    const obtenerCordenadas=await Geolocation.getCurrentPosition();
    this.latitud=obtenerCordenadas.coords.latitude;
    this.longitud=obtenerCordenadas.coords.longitude;
  }

  ngOnInit() {
  }

}
