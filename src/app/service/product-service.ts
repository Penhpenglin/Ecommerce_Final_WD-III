import { Injectable } from '@angular/core';

declare const axios: any;
declare const $: any;
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: any[] = [];

  constructor() {
    let ng_this = this;

    $.LoadingOverlay('show');

    axios
      .get('https://fakestoreapi.com/products')
      .then(function (response: any) {
        ng_this.products = response.data;
        $.LoadingOverlay('hide');
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .finally(function () {});
  }

  getProducts(): any[] {
    return this.products;
  }
}
