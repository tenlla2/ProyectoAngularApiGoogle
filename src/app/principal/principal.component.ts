import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  recientes = [];
  relevantes = [];
  pagina = 1;


  constructor(private consulta: ApiService) {
    this.reciente();
    this.relevante();

  }


  ngOnInit() {

  }


  reciente() {
    this.consulta.nuevo(this.pagina)
      .subscribe(data => {
        this.recientes.push(data);
        this.pagina += 4;
      });
  }

  relevante() {
    this.consulta.famoso(this.pagina)
      .subscribe(data => {
        this.relevantes.push(data);
        this.pagina += 4;
      });
  }


}