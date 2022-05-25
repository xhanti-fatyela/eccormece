import { Injectable } from '@angular/core';
import { Sneaker } from '../sneakers';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Sneaker[] = [];

  addToCart(product: Sneaker) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor( ) {}
}
