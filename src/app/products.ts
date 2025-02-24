export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 77000,
    stock: 50,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 88000,
    stock: 45,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 99000,
    stock: 34,
    description: ''
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/