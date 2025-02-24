import { Component } from '@angular/core';

import { products } from '../products';
import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // 「...」というのは配列形式の複数のオブジェクトで入ってくるということ
  products: Product[] = [...products];
  number: any = 5;

  share() {
    window.alert('この商品はシェアされました');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
