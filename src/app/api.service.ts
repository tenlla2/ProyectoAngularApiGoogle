import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  
  constructor(private http: HttpClient) {}

  seleccionado(id){
    return this.http.get('https://www.googleapis.com/books/v1/volumes/'+id);
  }
  
  pageAll(pagina){
    console.log("hola");
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=all&startIndex=' + pagina + '&maxResults=20');
  }

  pageBooks(pagina){
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=books&startIndex=' + pagina + '&maxResults=20');
  }

  pageMagazines(pagina){
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=magazines&startIndex=' + pagina + '&maxResults=20');
  }

  nuevo(pagina){
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=newest&startIndex=' + pagina + '&maxResults=4');
  }

  famoso(pagina){
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=relevance&startIndex=' + pagina + '&maxResults=4');
  }


}