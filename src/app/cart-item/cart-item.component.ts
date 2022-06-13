import { Component, OnInit, Input } from '@angular/core';
import { Sneaker } from 'src/sneakers';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
@Input() product!: any
@Input() cart!: any[]
@Input() i!: number
@Input() totalPrice!: (() => void)
  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(i: number): void{

    this.cart.splice(i, 1)
    this.totalPrice()

   }

   increment(index: number){

    ++this.cart[index].quantity
    this.cart.splice(index, 1, this.cart[index])
    console.log(this.cart[index])

    this.totalPrice()
    console.log(this.cart)
  }

  
  decrement(quantity: any, index: number){
    const items = JSON.parse(`${localStorage.getItem('cart')}`) ? JSON.parse(`${localStorage.getItem('cart')}`) : []
  if(quantity > 1)
    quantity--
    items[index].quantity = quantity
    
    this.totalPrice()
   
  }

}
