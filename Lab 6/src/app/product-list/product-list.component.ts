import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { products } from '../products';
import { CategoryService } from '../category.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
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

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/