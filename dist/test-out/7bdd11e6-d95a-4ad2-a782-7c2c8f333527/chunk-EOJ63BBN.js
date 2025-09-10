import {
  TokhrPipe,
  init_tokhr_pipe
} from "./chunk-K7EADEYF.js";
import {
  RouterLink,
  init_router
} from "./chunk-UEVFAQY7.js";
import {
  CommonModule,
  CurrencyPipe,
  init_common
} from "./chunk-OI53BQJY.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-MMRMA2V2.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\card\card.html
var card_default;
var init_card = __esm({
  "angular:jit:template:src\\app\\card\\card.html"() {
    card_default = `\r
<div class="container">\r
  \r
  <div class="card h-100">\r
\r
     <div class="image-wrapper">\r
      <span class="discount-badge">{{product.category}}</span>\r
       <img [src]="product.image" \r
       class="card-img-top pro-img" \r
       alt="Product Image" />\r
     </div>\r
 \r
  <div class="card-body">\r
    <h5 class="card-title product-title">{{ product.title }}</h5>\r
\r
    <p \r
    class="card-text product-description"\r
    style="cursor: pointer;"\r
    [routerLink] = "['/product-detail']"\r
    [queryParams]="{ product_id: product.id}"\r
    >\r
      \r
      {{ product.description }}\r
    </p>\r
\r
    <p class="card-text text-primary fw-bold">{{ product.price | currency}}</p>\r
    \r
\r
    \r
    <!-- <p class="card-text text-primary fw-bold">out: {{ product.price | tokhr:4100:'floor'}}</p> -->\r
    <p style="color: red;"\r
    class="card-text text-primary fw-bold"> {{ product.price | tokhr:4100:'in'}}</p>\r
\r
    <a \r
     class="btn btn-primary"\r
     (click)="addToCard(product)"\r
    >Add to Cart</a>\r
  </div>\r
</div>\r
\r
\r
</div>`;
  }
});

// angular:jit:style:src\app\card\card.css
var card_default2;
var init_card2 = __esm({
  "angular:jit:style:src\\app\\card\\card.css"() {
    card_default2 = "/* src/app/card/card.css */\n.card {\n  float: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin: 20px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  border: none;\n  border-radius: 8px;\n}\n.card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);\n}\n.pro-img {\n  height: 200px;\n  width: 100%;\n  object-fit: contain;\n  padding: 10px;\n}\n.product-title {\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.product-description {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card .card-text.text-primary {\n  font-weight: 600;\n  color: red !important;\n}\n.btn.btn-primary {\n  padding: 12px 20px;\n  background-color: rgb(162, 236, 251) !important;\n  color: black !important;\n  border: none;\n  font-weight: 700;\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n}\n.btn.btn-primary:hover {\n  background-color: rgb(0, 213, 255) !important;\n  color: white;\n}\n.image-wrapper {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 300px;\n  object-fit: contain;\n  padding: 10px;\n  display: block;\n}\n.discount-badge {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background-color: red;\n  color: white;\n  padding: 6px 12px;\n  font-size: 0.85rem;\n  font-weight: bold;\n  border-radius: 4px;\n  z-index: 1;\n}\n.card-text:hover {\n  color: rgb(90, 255, 255);\n}\n.product-card {\n  border-radius: 8px;\n  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;\n}\n.product-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);\n}\n.image-wrapper {\n  position: relative;\n  overflow: hidden;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n.pro-img {\n  max-height: 100%;\n  max-width: 100%;\n  object-fit: contain;\n}\n.discount-badge {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background-color: #dc3545;\n  color: white;\n  padding: 5px 10px;\n  border-radius: 5px;\n  font-weight: bold;\n  font-size: 0.85rem;\n  z-index: 1;\n}\n.product-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.product-description {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: #6c757d;\n}\n.price-text {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #ff4500 !important;\n}\n.btn-primary {\n  background-color: #28a745 !important;\n  border-color: #28a745 !important;\n  font-weight: bold;\n  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;\n}\n.btn-primary:hover {\n  background-color: #218838 !important;\n  border-color: #1e7e34 !important;\n}\n/*# sourceMappingURL=card.css.map */\n";
  }
});

// src/app/card/card.ts
var Card;
var init_card3 = __esm({
  "src/app/card/card.ts"() {
    "use strict";
    init_tslib_es6();
    init_card();
    init_card2();
    init_core();
    init_common();
    init_tokhr_pipe();
    init_router();
    Card = class Card2 {
      product;
      onAddToCard = new EventEmitter();
      image = "assets/images/card1.jpg";
      addToCard(product) {
        this.onAddToCard.emit(product);
        console.log("log from child", product);
      }
      static propDecorators = {
        product: [{ type: Input }],
        onAddToCard: [{ type: Output }]
      };
    };
    Card = __decorate([
      Component({
        selector: "app-card",
        standalone: true,
        template: card_default,
        imports: [CurrencyPipe, TokhrPipe, CommonModule, RouterLink],
        styles: [card_default2]
      })
    ], Card);
  }
});

export {
  Card,
  init_card3 as init_card
};
//# sourceMappingURL=chunk-EOJ63BBN.js.map
