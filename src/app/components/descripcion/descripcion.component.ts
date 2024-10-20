import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/Models/personaje.model';


@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent  {

  @Input() id_personaje: Personaje | undefined;
  
}
