import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  //serve per facilitare il passaggio dei dati fra i componenti 
  private apiUrl = 'https://world.openfoodfacts.org/cgi/search.pl';

  constructor(private http: HttpClient) { }
//metodi comuni per tutti 
  searchProducts(searchTerm: string): Observable<any> {
    //metodo che cerca nel link dell'api
    const url = `${this.apiUrl}?search_terms=${searchTerm}&page_size=5&json=true`;
    return this.http.get<any>(url);
  }

  getProductById(id: string): Observable<any> {
    //link dell'api che cerca per id
    const url = `https://world.openfoodfacts.org/api/v0/product/${id}.json`;
    return this.http.get<any>(url);
  }
}  