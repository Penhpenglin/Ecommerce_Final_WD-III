// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CartService } from '../service/cart-service';
// import { NgIf } from "@angular/common";

// declare const axios: any;
// declare const $ : any;
// @Component({
//   selector: 'app-product-datail',
//   imports: [NgIf],
//   templateUrl: './product-datail.html',
//   styleUrl: './product-datail.css'
// })
// export class ProductDatail {
//   constructor (private route: ActivatedRoute){

//   }

//   product : any = {};

//   ngOnit(): void{
//     const product_id = this.route.snapshot.queryParamMap.get('product_id');
//     console.log('proId:', product_id);
//       let ng_this = this;

//     $.LoadingOverlay("show");

//     axios
//       .get(`https://fakestoreapi.com/products/${product_id}`)
//       .then(function (response: any) {
//         ng_this.product = response.data;
//         console.log(ng_this.product);
//         $.LoadingOverlay('hide');
//       })
//       .catch(function (error: any) {
//         console.log(error);
//       })
    
      
    
//   }

  
// }



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf, CurrencyPipe } from "@angular/common";

declare const axios: any;
declare const $: any;

@Component({
  selector: 'app-product-datail',
  imports: [NgIf, CurrencyPipe],
  templateUrl: './product-datail.html',
  styleUrl: './product-datail.css'
})
export class ProductDatail implements OnInit {
  product: any = {};
cartService: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const product_id = this.route.snapshot.queryParamMap.get('product_id');
    console.log('proId:', product_id);

    $.LoadingOverlay("show");

    axios
      .get(`https://fakestoreapi.com/products/${product_id}`)
      .then((response: any) => {
        this.product = response.data;
        console.log(this.product);
        $.LoadingOverlay('hide');
      })
      .catch((error: any) => {
        console.log(error);
        $.LoadingOverlay('hide');
      });
  }
}
