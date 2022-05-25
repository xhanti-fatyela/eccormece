import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { Sneaker } from '../../sneakers';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  sneakers?: Sneaker;
  items :any

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {

   this.getItems()

  }

  getItems(){
    this.items = this.cartService.getItems()
  }

  

  addToCart(product: Sneaker) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
