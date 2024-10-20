import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionPersonajeComponent } from './components/seleccion-personaje/seleccion-personaje.component';
import { SeleccionMapaComponent } from './components/seleccion-mapa/seleccion-mapa.component';

const routes: Routes = [
  {path: '', component: SeleccionPersonajeComponent},
  {path: 'mapas', component: SeleccionMapaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
