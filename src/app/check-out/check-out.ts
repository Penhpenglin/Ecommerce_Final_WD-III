import { Component } from '@angular/core';
import { CurrencyPipe, NgForOf } from '@angular/common';
import { CartService } from '../service/cart-service';

declare const Swal: any;
@Component({
  selector: 'app-check-out',
  imports: [CurrencyPipe, NgForOf],
  templateUrl: './check-out.html',
  styleUrl: './check-out.css',
})
export class CheckOut {
  cartItems: any[] = [];
  cartTotal = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItem();
    this.cartTotal = this.cartService.getCartTotal();
    console.log(this.cartItems);
  }

  paynow() {
  Swal.fire({
    title: 'Thanks You',
    text: 'Your payment was successful!',
    imageUrl: '/image/Kilua.jpg', // <-- your image here
    imageWidth: 250,
    imageHeight: 250,
    imageAlt: 'Success',
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  });
}

}
