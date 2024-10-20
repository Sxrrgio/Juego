import { Component } from '@angular/core';
import { Mapa } from 'src/app/Models/mapa.model';

@Component({
  selector: 'app-seleccion-mapa',
  templateUrl: './seleccion-mapa.component.html',
  styleUrls: ['./seleccion-mapa.component.css']
})
export class SeleccionMapaComponent {

  id_mapa:number=1;

  mapas:Mapa[]=[];

  ngOnInit(): void {
    for(let i=0; i<6; i++){
      this.mapas[i] = new Mapa(i);
    }
  }

  siguienteMapa(){
    if(this.id_mapa<5){
      this.id_mapa++;
    }else{
      this.id_mapa=1;
    }
  }

  anteriorMapa(){
    if(this.id_mapa>1){
      this.id_mapa--;
    }else{
      this.id_mapa=5;
    }
  }
}
