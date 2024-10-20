import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/Models/personaje.model';

@Component({
  selector: 'app-seleccion-personaje',
  templateUrl: './seleccion-personaje.component.html',
  styleUrls: ['./seleccion-personaje.component.css']
})
export class SeleccionPersonajeComponent {

constructor(private router:Router){}

  id_personaje:number=1;


  personajes:Personaje[]=[];

  ngOnInit(): void {
    for(let i=0; i<6; i++){
      this.personajes[i] = new Personaje(i);
    }
  }

  siguienteId(){
    if(this.id_personaje<5){
      this.id_personaje++;
    }else{
      this.id_personaje=1;
    }
  }

  anteriorId(){
    if(this.id_personaje>1){
      this.id_personaje--;
    }else{
      this.id_personaje=5;
    }
  }

  mapas(){
    this.router.navigate(['/seleccion-mapa.component.html']);
  }
    
}