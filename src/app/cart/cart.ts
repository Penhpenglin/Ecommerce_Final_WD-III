import { Component } from '@angular/core';
import { CartService } from '../service/cart-service';
import { JsonPipe, CurrencyPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from '@angular/router';
import { CheckOut } from '../check-out/check-out';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, FormsModule,RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
 constructor(public cartService: CartService){
  
 }
}
