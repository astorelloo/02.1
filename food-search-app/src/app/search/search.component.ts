import { Component } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';
  products: any[] = [];

  constructor(private foodService: FoodService) {}
  //metodo on search per visualizzare seguendo il nome di quello che abbiamo cercato 
  onSearch() {
    if (this.searchTerm.length > 2) {
      this.foodService.searchProducts(this.searchTerm).subscribe(data => {
        this.products = data.products;
      });
    }
  }
}