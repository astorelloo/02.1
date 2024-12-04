import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService
  ) {}
//metodo on init che rende product = data importando cosi l'id
  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.foodService.getProductById(productId).subscribe(data => {
        this.product = data;
      });
    }
  }
}
