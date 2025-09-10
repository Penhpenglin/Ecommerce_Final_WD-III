import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-MMRMA2V2.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/service/cart-service.ts
var CartService;
var init_cart_service = __esm({
  "src/app/service/cart-service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    CartService = class CartService2 {
      cart_item = [];
      constructor() {
        let cart = localStorage.getItem("cart_item") ?? "[]";
        this.cart_item = JSON.parse(cart);
        this.cart_item = this.cart_item.map((item) => {
          if (!item.qty) {
            item.qty = 1;
          }
          return item;
        });
      }
      addToCard(product) {
        let dpl_index = this.cart_item.findIndex((x) => x.id == product.id);
        if (dpl_index > -1) {
          this.cart_item[dpl_index].qty++;
          return;
        } else {
          product.qty = 1;
          product.is_select = true;
          this.cart_item.push(product);
        }
        console.log(this.cart_item);
        localStorage.setItem("cart_item", JSON.stringify(this.cart_item));
      }
      getCartItem() {
        return this.cart_item;
      }
      incrementQty(item) {
        let index = this.cart_item.findIndex((x) => x.id === item.id);
        this.cart_item[index].qty++;
        localStorage.setItem("cart_item", JSON.stringify(this.cart_item));
      }
      decrementQty(item) {
        if (item.qty > 1) {
          let index = this.cart_item.findIndex((x) => x.id === item.id);
          this.cart_item[index].qty--;
          localStorage.setItem("cart_item", JSON.stringify(this.cart_item));
        }
      }
      removeCartItem(item) {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, remove it!"
        }).then((result) => {
          if (result.isConfirmed) {
            let index = this.cart_item.findIndex((x) => x.id === item.id);
            this.cart_item.splice(index, 1);
            localStorage.setItem("cart_item", JSON.stringify(this.cart_item));
          }
        });
      }
      getCartTotal() {
        let total = 0;
        this.cart_item.forEach((x) => {
          if (x.is_select) {
            total += x.price * x.qty;
          }
        });
        return total;
      }
      selectCartItem(item) {
        let index = this.cart_item.findIndex((x) => x.id === item.id);
        console.log(this.cart_item[index]);
        this.cart_item[index].is_select = !this.cart_item[index].is_select;
        localStorage.setItem("cart_item", JSON.stringify(this.cart_item));
      }
      static ctorParameters = () => [];
    };
    CartService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], CartService);
  }
});

export {
  CartService,
  init_cart_service
};
//# sourceMappingURL=chunk-VSDPM33S.js.map
