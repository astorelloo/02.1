import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '02.1';
  searchTerm: string ='';
  constructor(private router: Router){}

  search(): void{
    if (this.searchTerm){
      this.router.navigate([`/food/${this.searchTerm}`]);
    }
  }
}
