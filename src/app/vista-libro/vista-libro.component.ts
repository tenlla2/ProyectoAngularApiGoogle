import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-vista-libro',
  templateUrl: './vista-libro.component.html',
  styleUrls: ['./vista-libro.component.css']
})
export class VistaLibroComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private res: ApiService) { }
  elegido : any ={volumeInfo:{title:'',description:'',imageLinks:{small:''},authors:''}};
  ngOnInit() {
    this.Detalle();
  }

  Detalle() {
    const id = this.route.snapshot.paramMap.get('id');
    this.res.seleccionado(id).subscribe(data => {
      this.elegido = data;
    });
  }
}