import { Component } from '@angular/core';
import { Slide } from "../slide/slide";
import { Card } from "../card/card";
import { RouterLink } from '@angular/router';
import { CartService } from '../service/cart-service';
import { ProductService } from '../service/product-service';
import { BrandImage } from '../brand-image/brand-image';

@Component({
  selector: 'app-home',
  imports: [Slide, Card , BrandImage],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(public cartService: CartService, public productService:ProductService){

  }

  protected title = 'lap5';
  card_item: any[] = [];

 

  addToCard(product: any){
    this.cartService.addToCard(product);
    console.log(this.card_item);
  }


 



}
