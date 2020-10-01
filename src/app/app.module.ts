import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LAutorComponent } from './lautor/lautor.component';
import { LibroTituloComponent } from './libro-titulo/libro-titulo.component';
import { AutoresComponent } from './autores/autores.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { OrientacionComponent } from './orientacion/orientacion.component';
//import {DataService} from './data.service'
//import {HttpClient, HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    LAutorComponent,
    LibroTituloComponent,
    AutoresComponent,
    PresentacionComponent,
    OrientacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
