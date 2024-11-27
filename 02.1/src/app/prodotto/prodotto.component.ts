import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product, ProductList } from '../models/product.model';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent  implements OnInit {
  foodData!: Product[];
  loading = false;
  
  constructor(private route: ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const foodName = params.get('name')!;
      this.fetchCardData(foodName);
    })
  }
  fetchCardData(foodName: string): void {
    this.loading = true;
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${foodName}&page_size=2&json=true`;
    this.http.get<any>(url).subscribe(
      (data: ProductList)=> {
        if (data && data.products) {
          this.foodData = data.products; // Assegna l'array di prodotti a foodData
        } else {
          this.foodData = []; // Se non ci sono prodotti, assicurati che foodData sia vuoto
        }
        this.loading = false;
      },
      (error) => {
        console.error('Errore nella ricerca della carta', error)
        this.loading = false;
      }
    )
  }
}