import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // products = [...products];
  products = [
    {
      name: 'iPhone',
      stock: 30,
      description: 'サンプルテキスト'
    }, {
      name: 'iPad',
      stock: 12,
      description: 'タブレットです'
    }, {
      name: 'Apple Watch',
      stock: 32,
      description: '時計です'
    }
  ];

  product2 = {
    name: 'iPad',
    stock: 12,
    description: 'タブレットです'
  };
  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
