import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { products } from '../products';
import { CategoryService } from '../category.service'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {

  products = products;
    currentCategory = this.CategoryService.getCategory();
  
    setCategory(id: number) {
      this.CategoryService.setCategory(id);
      this.currentCategory = this.CategoryService.getCategory();
    }
  
    goBack(): void {
      this.location.back();
    }
    
    constructor(
      private route: ActivatedRoute,
      private location: Location,
      private CategoryService: CategoryService
    ) { }

  ngOnInit(): void {

  }

}
