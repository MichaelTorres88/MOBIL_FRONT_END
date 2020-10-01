import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { mainModule } from 'process';
import { AutoresComponent } from './autores/autores.component';
import { LAutorComponent } from './lautor/lautor.component';
import { LibroTituloComponent } from './libro-titulo/libro-titulo.component';
import { MainComponent } from './main/main.component';
import { OrientacionComponent } from './orientacion/orientacion.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
//import {HttpClient, HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: 'home', component: MainComponent},
  {path: 'libro', component: LibroTituloComponent},
  {path: 'autor', component: LAutorComponent},
  {path: 'autores', component: AutoresComponent},
  {path: 'presentacion', component: PresentacionComponent},
  {path: 'orientacion', component: OrientacionComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
