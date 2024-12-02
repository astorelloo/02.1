import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router){}

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
          this.foodData = data.products; // Assegna i prodotti a foodData
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
  ricerca(productId: String): void{
    const url = `https://world.openfoodfacts.org/api/v0/product/${productId}.json`;
    
    this.http.get<any>(url).subscribe(
      (data) => {
        if (data && data.product) {
          // Qui puoi navigare verso una pagina di dettagli o visualizzare i dettagli
          // Utilizzo di Router per navigare alla pagina dei dettagli, passando l'ID
          this.router.navigate(['/product-details', productId]);
        } else {
          console.log('Dettagli non trovati per questo prodotto');
        }
      },
      (error) => {
        console.error('Errore nel recupero dei dettagli', error);
      }
    );
  }
}