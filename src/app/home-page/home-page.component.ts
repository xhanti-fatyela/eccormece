import { Component, OnInit } from '@angular/core';

import { SNEAKERS } from '../mock-data';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 
  sneakers = SNEAKERS

  // product = JSON.parse(`${localStorage.getItem('products')}`) ? JSON.parse(`${localStorage.getItem('products')}`) : null
  cart: any[] = []
  value: number = 1
  display: any
  constructor( private productService: ProductsService) { }

  ngOnInit(): void {
    // this.getProducts()
  }

  // getProducts(){
  //   this.productService.getProducts().subscribe(
  //     elem => this.sneakers = elem
  //   )
  // }

  addToCart(index: number) {
    let sneaker = {
      quantity: this.value,
      ...this.sneakers[index]
    }
    this.cart.push(sneaker)
    localStorage.setItem('cart', JSON.stringify(this.cart))
     console.log(this.cart)
     
    this.display = JSON.parse(`${localStorage.getItem('cart')}`).length
   }

}
