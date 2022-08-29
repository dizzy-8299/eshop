import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take, tap } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  abc = new BehaviorSubject<Product[]>([]);
  //newarr = [{ a: 'asd' }];
  selectedItemSubject = new BehaviorSubject<Product[]>([]);
  selectItems = this.selectedItemSubject.asObservable();

  constructor() {
    this.getSelectedProducts();
  }

  emitSelectProduct(products: Product[]) {
    this.selectedItemSubject.next(products);
  }

  addItemToCart(product: Product) {
    console.log(this.selectedItemSubject, this.abc);
    this.selectItems
      .pipe(
        tap((res) => console.log(res)),
        take(1),
        tap((res) => console.log(res)),
        map((products) => {
          products.push(product);
          let prodArr = JSON.stringify(products);
          localStorage.setItem('products', prodArr);
        })
      )
      .subscribe();
  }

  getSelectedProducts() {
    let productArr: any;
    productArr = localStorage.getItem('products');
    if (productArr) {
      productArr = JSON.parse(productArr);
      this.emitSelectProduct(productArr);
    }
  }
}
