import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Slide } from './slide/slide';
import { Card } from './card/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NgClass, JsonPipe } from '@angular/common';
import { Footer } from './footer/footer';
import { CartService } from './service/cart-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, Footer,RouterLink, ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  
  // ngOnInit(): void {
  //   let card: any = localStorage.getItem('card_item') ?? '[]';
  //   this.card_item = JSON.parse(card);
  // }
    // card_item: any[] = [];
  

    constructor(public cartService: CartService){
       
    }



}

