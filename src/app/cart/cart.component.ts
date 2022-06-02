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
  cart = JSON.parse(`${localStorage.getItem('cart')}`) ? JSON.parse(`${localStorage.getItem('cart')}`) : []
  value: number = 1
  total: number = 0
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.totalPrice()
  //  this.getItems()

  }

  // getItems(){
  //   this.items = this.cartService.getItems()
  // }

  totalPrice(){
    
    this.cart.forEach((element: { price: number, quantity: number }) => {
      this.total += element.price*element.quantity
    });
  }

  

  increment(index: number){
  
    console.log(this.value)
    let q = this.cart[index].quantity++
    let sneaker = {
      quantity: q,
      ...this.cart[index]
    }
    this.cart.splice(index,1,sneaker)
    localStorage.setItem('cart', JSON.stringify(this.cart))
     console.log(this.cart)
     this.totalPrice()
  }

  decrement(index: number){
    this.value--
    console.log(this.value)
    let sneaker = {
      quantity: this.value,
      ...this.cart[index]
    }
    this.cart.splice(index,1,sneaker)
    localStorage.setItem('cart', JSON.stringify(this.cart))
     console.log(this.cart)
     this.totalPrice()
  }

 
  

}
