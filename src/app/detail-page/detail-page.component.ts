import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

import { SNEAKERS } from '../mock-data';
import { Sneaker } from 'src/sneakers';



@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  sneakers?: Sneaker;
  product = JSON.parse(`${localStorage.getItem('products')}`) ? JSON.parse(`${localStorage.getItem('products')}`) : null
  cart: any[] = []
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private location: Location,
    private cartService: CartService
   
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

 

  getProducts(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id)
    .subscribe(sneakers => {
      this.sneakers = sneakers 
      localStorage.setItem('products', JSON.stringify(this.sneakers))
    });
  }

  
  addToCart() {
   this.cart.push(this.product)
    localStorage.setItem('cart', JSON.stringify(this.cart))
    
    
    window.alert('Your product has been added to the cart!');
  }
  

}
