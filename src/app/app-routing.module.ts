import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';

import { Contenido1Component } from './contenido1/contenido1.component';
import { Contenido2Component } from './contenido2/contenido2.component';
import { Contenido3Component } from './contenido3/contenido3.component';

import { VistaLibroComponent } from './vista-libro/vista-libro.component';

const routes: Routes = [
  { path: 'home', component: PrincipalComponent },
  { path: 'all', component: Contenido1Component },
  { path: 'books', component: Contenido2Component },
  { path: 'magazines', component: Contenido3Component },
  { path: 'vista/:id', component: VistaLibroComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
