import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent  implements OnInit {
  foodData: any;
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
    this.http.get(url).subscribe(
      (data)=> {
        this.foodData = data;
        this.loading = false;
      },
      (error) => {
        console.error('Errore nella ricerca della carta', error)
        this.loading = false;
      }
    )
  }
}