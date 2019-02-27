import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieComponent } from './pie/pie.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { Contenido1Component } from './contenido1/contenido1.component';
import { Contenido2Component } from './contenido2/contenido2.component';
import { Contenido3Component } from './contenido3/contenido3.component';
import { VistaLibroComponent } from './vista-libro/vista-libro.component';
import { PrincipalComponent } from './principal/principal.component';
import { ApiService } from './api.service';
import {TruncatePipe} from '../truncate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    CabeceraComponent,
    Contenido1Component,
    Contenido2Component,
    Contenido3Component,
    VistaLibroComponent,
    PrincipalComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot(),
    
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
