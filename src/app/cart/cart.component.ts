import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { Sneaker } from 'src/sneakers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  sneakers?: Sneaker;
  items = this.cartService.getItems();
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addToCart(product: Sneaker) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
