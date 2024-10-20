import { Component, Input } from '@angular/core';
import { Mapa } from 'src/app/Models/mapa.model';

@Component({
  selector: 'app-descripcion-mapa',
  templateUrl: './descripcion-mapa.component.html',
  styleUrls: ['./descripcion-mapa.component.css']
})
export class DescripcionMapaComponent {

  @Input() mapas: Mapa | undefined;
}
