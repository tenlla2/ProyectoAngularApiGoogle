import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contenido1',
  templateUrl: './contenido1.component.html',
  styleUrls: ['./contenido1.component.css']
})
export class Contenido1Component implements OnInit {
  libros= [];
  pagina = 1;
  constructor(private res: ApiService) {
    this.Libros();
  }

  ngOnInit() {
  }

  Libros() {
    this.res.pageAll(this.pagina)
      .subscribe(data => {
        this.libros.push(data);
        this.pagina += 20;
      });
  }

}