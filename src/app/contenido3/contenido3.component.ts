import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contenido3',
  templateUrl: './contenido3.component.html',
  styleUrls: ['./contenido3.component.css']
})
export class Contenido3Component implements OnInit {

  libros = [];
  pagina = 1;

  constructor(private res: ApiService) {

    this.Libros();
  }

  ngOnInit() {
  }

  Libros() {
    this.res.pageMagazines(this.pagina)
      .subscribe(data => {
        this.libros.push(data);
        this.pagina += 20;
      });
  }

}