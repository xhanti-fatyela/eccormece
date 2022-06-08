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
  // items :any
  cart = JSON.parse(`${localStorage.getItem('cart')}`) ? JSON.parse(`${localStorage.getItem('cart')}`) : []
 
  // value: number = 1
  total =  0
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

   deleteItem(i: number): void{

    this.cart.splice(i, 1)
    this.totalPrice()

   }

  totalPrice(){
    let total =  0
    this.cart.forEach((element: any) => {
      this.total += element.price*element.quantity
      
    });
    console.log(this.total)
  }

  increment(index: number){

    ++this.cart[index].quantity
    this.cart.splice(index, 1, this.cart[index])
    console.log(this.cart[index])
    this.total = 0
    this.totalPrice()
    console.log(this.cart)
  }

  
  decrement(quantity: any, index: number){
    
    const items = JSON.parse(`${localStorage.getItem('cart')}`) ? JSON.parse(`${localStorage.getItem('cart')}`) : []
  if(quantity > 1)
    quantity--
    items[index].quantity = quantity
    console.log(quantity)
    
    this.totalPrice()
   
  }



  // increment(index: number){
  
  //   console.log(this.value)
  //   let q = this.cart[index].quantity++
  //   let sneaker = {
  //     quantity: q,
  //     ...this.cart[index]
  //   }
  //   this.cart.splice(index,1,sneaker)
  //   localStorage.setItem('cart', JSON.stringify(this.cart))
  //    console.log(this.cart)
  //    this.totalPrice()
  // }

  // decrement(index: number){
  //   this.value--
  //   console.log(this.value)
  //   let sneaker = {
  //     quantity: this.value,
  //     ...this.cart[index]
  //   }
  //   this.cart.splice(index,1,sneaker)
  //   localStorage.setItem('cart', JSON.stringify(this.cart))
  //    console.log(this.cart)
  //    this.totalPrice()
  // }

 
  

}
