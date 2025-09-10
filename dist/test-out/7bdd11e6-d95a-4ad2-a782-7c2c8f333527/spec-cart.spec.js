import {
  FormsModule,
  init_forms
} from "./chunk-UIPEYWDV.js";
import {
  RouterLink,
  init_router
} from "./chunk-UEVFAQY7.js";
import "./chunk-IPXL6DNC.js";
import {
  CartService,
  init_cart_service
} from "./chunk-VSDPM33S.js";
import {
  CurrencyPipe,
  init_common
} from "./chunk-OI53BQJY.js";
import {
  TestBed,
  init_testing
} from "./chunk-N5UVEJXM.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-MMRMA2V2.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\cart\cart.html
var cart_default;
var init_cart = __esm({
  "angular:jit:template:src\\app\\cart\\cart.html"() {
    cart_default = `<div class="container my-5">\r
  <h2 class="mb-4">Your Cart \u{1FAAA}</h2>\r
\r
  <div class="card p-3">\r
    @if (cartService.getCartItem().length == 0){\r
            <div class="col-12 text-center">\r
                <h4 style="color: rgb(141, 139, 139);">Your cart is empty</h4>\r
                <a routerLink="/" style="color: blue;cursor: pointer;"> Continue Shopping</a>\r
            </div>\r
        }\r
\r
        <!-- cart_item -->\r
    @for (item of cartService.getCartItem(); track item.id) {\r
    <div class="cart-item d-flex align-items-center border-bottom py-3">\r
        \r
      <!-- check -->\r
       <div class="ckeck-box" style="margin-right: 10px;">\r
        <input \r
        [checked]="item.is_select"\r
        (change)="cartService.selectCartItem(item)"\r
        type="checkbox" \r
        class="form-control form-check-input">\r
       </div>\r
\r
\r
      <!-- Product Image -->\r
      <img style="width: 130px; height: 130px; padding: 10px;border-radius: 10px;"\r
      [src]="item.image" class="product-img me-3" [alt]="item.title" />\r
\r
      \r
      <!-- Title + Category -->\r
      <div class="flex-grow-1">\r
        <h6 style="font-size: 20px; font-weight: 700;"\r
        class="mb-1">{{ item.title }}</h6>\r
\r
        <small class="text-muted">{{ item.category }}</small>\r
      </div>\r
\r
      <!-- Price -->\r
      <div class="text-nowrap me-4 fw-semibold">\r
        {{ item.price | currency }}\r
      </div> \r
\r
      <!-- Quantity -->\r
      <div class="me-4">\r
        <input \r
          type="number" \r
          class="form-control " \r
          value="-"\r
            type="button"\r
            (click)="cartService.decrementQty(item)"\r
        />\r
         <!-- error -->\r
        <strong class="btn btn-sm" style="font-size: 18px; font-weight: 600;">{{ item.qty }}</strong>\r
\r
        <input \r
          type="number" \r
          class="form-control " \r
          value="+"\r
            type="button"\r
            (click)="cartService.incrementQty(item)"\r
        />\r
      </div>\r
\r
      <!-- Total -->\r
      <div class="me-4 fw-bold text-nowrap">\r
        {{ item.price * item.qty | currency }}\r
      </div>\r
\r
      <!-- Remove -->\r
      <div>\r
        <button \r
        style="text-decoration: none; font-weight: 600; "\r
        (click)="cartService.removeCartItem(item)"\r
        class="btn btn-link text-danger p-0">\r
          Remove\r
        </button>\r
      </div>\r
    </div>\r
}\r
  </div>\r
\r
   @if (cartService.getCartItem().length > 0){\r
  <div class="row justify-content-end mt-4">\r
    <div class="col-md">\r
      <div class="cart-summary p-3 border rounded shadow-sm">\r
        <h5>Summary</h5>\r
        <hr />\r
        <p class="d-flex justify-content-between">\r
          <span>Total :</span>\r
          <span style="background-color: rgb(68, 202, 255);\r
          border: none;\r
          font-size: 16px;\r
          font-weight: 700;\r
          padding: 5px;\r
          border-radius: 5px;">{{ cartService.getCartTotal() | currency}}</span>\r
\r
        </p>\r
        <hr />\r
        <p class="d-flex justify-content-between fw-bold">\r
          <!-- <span>Total</span>\r
          <span>{{ getSubtotal() + 5 | currency }}</span> -->\r
        </p>\r
        <button style="background-color: rgb(68, 202, 255);\r
          border: none;\r
          font-size: 16px;\r
          font-weight: 700;"\r
        [routerLink]="['/check-out']"\r
        class="btn btn-success w-100 mt-2">\r
        Checkout\r
      </button>\r
\r
      </div>\r
    </div>\r
  </div>\r
   }\r
  \r
\r
 \r
</div>\r
`;
  }
});

// angular:jit:style:src\app\cart\cart.css
var cart_default2;
var init_cart2 = __esm({
  "angular:jit:style:src\\app\\cart\\cart.css"() {
    cart_default2 = "/* src/app/cart/cart.css */\n.container {\n  max-width: 1000px;\n  margin: auto;\n  animation: fadeIn 0.6s ease-in-out;\n}\n.card {\n  border-radius: 16px;\n  border: 1px solid #e5e7eb;\n  background: #fff;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);\n  animation: slideUp 0.5s ease;\n}\n.card h4 {\n  font-size: 18px;\n  color: #9ca3af;\n  font-weight: 500;\n  animation: fadeIn 1s ease;\n}\n.cart-item {\n  transition: transform 0.25s ease, background 0.25s ease;\n}\n.cart-item:hover {\n  background: #f9fafb;\n  border-radius: 12px;\n  transform: scale(1.01);\n}\n.product-img {\n  object-fit: cover;\n  border: 1px solid #f3f4f6;\n  border-radius: 12px;\n  transition: transform 0.3s ease;\n}\n.product-img:hover {\n  transform: scale(1.08) rotate(1deg);\n}\n.cart-item h6 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 4px;\n  transition: color 0.2s ease;\n}\n.cart-item h6:hover {\n  color: #2563eb;\n}\n.cart-item small {\n  font-size: 14px;\n  color: #6b7280;\n}\n.cart-item .fw-semibold {\n  font-size: 16px;\n  color: #111827;\n  transition: color 0.3s ease;\n}\n.cart-item .fw-semibold:hover {\n  color: #10b981;\n}\n.cart-item input[type=button] {\n  min-width: 36px;\n  height: 36px;\n  padding: 0;\n  font-size: 18px;\n  font-weight: bold;\n  border-radius: 8px;\n  border: 1px solid #d1d5db;\n  background: #f3f4f6;\n  transition: all 0.25s ease;\n  cursor: pointer;\n}\n.cart-item input[type=button]:hover {\n  background: #e5e7eb;\n  transform: scale(1.1);\n}\n.cart-item strong {\n  margin: 0 10px;\n  font-size: 18px;\n  color: #374151;\n  display: inline-block;\n  animation: pulse 1.5s infinite;\n}\n.cart-item .fw-bold {\n  font-size: 17px;\n  color: #10b981;\n  animation: fadeIn 0.5s ease;\n}\n.cart-item .btn-link {\n  font-size: 14px;\n  font-weight: 600;\n  color: #ef4444;\n  transition: color 0.2s ease;\n}\n.cart-item .btn-link:hover {\n  text-decoration: underline;\n  color: #dc2626;\n  transform: scale(1.05);\n}\n.cart-summary {\n  background: #f9fafb;\n  border-radius: 12px;\n  animation: slideUp 0.7s ease;\n}\n.cart-summary h5 {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 12px;\n  animation: fadeIn 0.6s ease-in;\n}\n.cart-summary span {\n  font-size: 16px;\n}\n.cart-summary .btn-success {\n  background: #10b981 !important;\n  border: none;\n  border-radius: 10px;\n  font-weight: 700;\n  transition: transform 0.3s ease, background 0.3s ease;\n}\n.cart-summary .btn-success:hover {\n  background: #059669 !important;\n  transform: translateY(-2px) scale(1.03);\n  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.3);\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n    color: #111827;\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=cart.css.map */\n";
  }
});

// src/app/cart/cart.ts
var Cart;
var init_cart3 = __esm({
  "src/app/cart/cart.ts"() {
    "use strict";
    init_tslib_es6();
    init_cart();
    init_cart2();
    init_core();
    init_cart_service();
    init_common();
    init_forms();
    init_router();
    Cart = class Cart2 {
      cartService;
      constructor(cartService) {
        this.cartService = cartService;
      }
      static ctorParameters = () => [
        { type: CartService }
      ];
    };
    Cart = __decorate([
      Component({
        selector: "app-cart",
        imports: [CurrencyPipe, FormsModule, RouterLink],
        template: cart_default,
        styles: [cart_default2]
      })
    ], Cart);
  }
});

// src/app/cart/cart.spec.ts
var require_cart_spec = __commonJS({
  "src/app/cart/cart.spec.ts"(exports) {
    init_testing();
    init_cart3();
    describe("Cart", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Cart]
        }).compileComponents();
        fixture = TestBed.createComponent(Cart);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_cart_spec();
//# sourceMappingURL=spec-cart.spec.js.map
