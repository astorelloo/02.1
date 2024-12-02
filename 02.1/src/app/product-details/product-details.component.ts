import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId!: string;
  productDetails: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.fetchProductDetails(this.productId);
  }

  fetchProductDetails(productId: string): void {
    const url = `https://world.openfoodfacts.org/api/v0/product/${productId}.json`;
    
    this.http.get<any>(url).subscribe(
      (data) => {
        this.productDetails = data.product;
        this.loading = false;
      },
      (error) => {
        console.error('Errore nel recupero dei dettagli', error);
        this.loading = false;
      }
    );
  }
}
