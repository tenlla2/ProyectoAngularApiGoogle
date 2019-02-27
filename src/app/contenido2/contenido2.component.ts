import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contenido2',
  templateUrl: './contenido2.component.html',
  styleUrls: ['./contenido2.component.css']
})
export class Contenido2Component implements OnInit {
  libros = [];
  pagina = 1;

  constructor(private res: ApiService) {

    this.Libros();
  }

  ngOnInit() {
  }

  Libros() {
  
    this.res.pageBooks(this.pagina)
      .subscribe(data => {
        this.libros.push(data);
        this.pagina += 20;

      });
  }


}