import { Component } from '@angular/core';
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';
import { Card } from "../card/card";

@Component({
  selector: 'app-product-page',
  imports: [Card],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css'
})
export class ProductPage {

  constructor(public cartService: CartService, public productService:ProductService){
  
    }
  
    card_item: any[] = [];
  
   
  
    addToCard(product: any){
      this.cartService.addToCard(product);
      console.log(this.card_item);
    }

    ngOnInit() {
    let Cart = localStorage.getItem('cart') ?? '[]';
    this.card_item = JSON.parse(Cart);
  }

  
}
