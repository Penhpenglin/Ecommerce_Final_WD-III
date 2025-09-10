import {
  CartService,
  init_cart_service
} from "./chunk-VSDPM33S.js";
import {
  CurrencyPipe,
  NgForOf,
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

// angular:jit:template:src\app\check-out\check-out.html
var check_out_default;
var init_check_out = __esm({
  "angular:jit:template:src\\app\\check-out\\check-out.html"() {
    check_out_default = '<div class="container py-5">\r\n  <h2 class="text-center mb-4">Checkout</h2>\r\n\r\n  <div class="row g-5">\r\n    <!-- Left side: Form -->\r\n    <div class="col-md-7 col-lg-8">\r\n      <div class="card p-4">\r\n        <h4 class="mb-3">Shipping address</h4>\r\n        <form class="needs-validation" novalidate>\r\n          <div class="row g-3">\r\n            <!-- First Name -->\r\n            <div class="col-sm-6">\r\n              <label for="firstName" class="form-label">First name</label>\r\n              <input type="text" class="form-control" id="firstName" placeholder="" value="" required>\r\n              <div class="invalid-feedback">\r\n                Valid first name is required.\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Last Name -->\r\n            <div class="col-sm-6">\r\n              <label for="lastName" class="form-label">Last name</label>\r\n              <input type="text" class="form-control" id="lastName" placeholder="" value="" required>\r\n              <div class="invalid-feedback">\r\n                Valid last name is required.\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Email -->\r\n            <div class="col-12">\r\n              <label for="email" class="form-label">Email</label>\r\n              <input type="email" class="form-control" id="email" placeholder="you@example.com">\r\n              <div class="invalid-feedback">\r\n                Please enter a valid email address for shipping updates.\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Address -->\r\n            <div class="col-12">\r\n              <label for="address" class="form-label">Address</label>\r\n              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>\r\n              <div class="invalid-feedback">\r\n                Please enter your shipping address.\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Address 2 -->\r\n            <div class="col-12">\r\n              <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>\r\n              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">\r\n            </div>\r\n\r\n            <!-- Country -->\r\n            <div class="col-md-5">\r\n              <label for="country" class="form-label">Country</label>\r\n              <select class="form-select" id="country" required>\r\n                <option value="">Choose...</option>\r\n                <option>United States</option>\r\n                <option>Canada</option>\r\n                <option>United Kingdom</option>\r\n              </select>\r\n              <div class="invalid-feedback">\r\n                Please select a valid country.\r\n              </div>\r\n            </div>\r\n\r\n            <!-- State -->\r\n            <div class="col-md-4">\r\n              <label for="state" class="form-label">State</label>\r\n              <select class="form-select" id="state" required>\r\n                <option value="">Choose...</option>\r\n                <option>California</option>\r\n                <option>New York</option>\r\n                <option>Texas</option>\r\n              </select>\r\n              <div class="invalid-feedback">\r\n                Please provide a valid state.\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Zip -->\r\n            <div class="col-md-3">\r\n              <label for="zip" class="form-label">Zip</label>\r\n              <input type="text" class="form-control" id="zip" placeholder="" required>\r\n              <div class="invalid-feedback">\r\n                Zip code required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <hr class="my-4">\r\n\r\n          <!-- Payment section -->\r\n          <h4 class="mb-3">Payment</h4>\r\n          <div class="row gy-3">\r\n            <!-- Cardholder Name -->\r\n            <div class="col-md-4">\r\n              <label for="state" class="form-label">Select Payment</label>\r\n              <select class="form-select" id="state" required>\r\n                <option value="">Choose...</option>\r\n                <option>ABA</option>\r\n                <option>ACLEDA</option>\r\n                <option>CHIP MONG</option>\r\n                <option>WING</option>\r\n                <option>TRUE MONEY</option>\r\n                <option>WORI BANK</option>\r\n              </select>\r\n              <div class="invalid-feedback">\r\n                Please provide a valid state.\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Credit Card Number -->\r\n            <div class="col-md-6">\r\n              <label for="cc-number" class="form-label">Credit card number</label>\r\n              <input type="text" class="form-control" id="cc-number" placeholder="" required>\r\n              <div class="invalid-feedback">\r\n                Credit card number is required\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Expiration -->\r\n            <div class="col-md-3">\r\n              <label for="cc-expiration" class="form-label">Expiration</label>\r\n              <input type="text" class="form-control" id="cc-expiration" placeholder="" required>\r\n              <div class="invalid-feedback">\r\n                Expiration date required\r\n              </div>\r\n            </div>\r\n\r\n            <!-- CVV -->\r\n            <div class="col-md-3">\r\n              <label for="cc-cvv" class="form-label">CVV</label>\r\n              <input type="text" class="form-control" id="cc-cvv" placeholder="" required>\r\n              <div class="invalid-feedback">\r\n                Security code required\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <hr class="my-4">\r\n          <button class="w-100 btn btn-primary btn-lg"\r\n          type="button"\r\n          style="background-color: rgb(127, 210, 255); border: none;"\r\n          (click)="paynow()">\r\n          Please Pay Me Now\r\n          </button>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Right side: Order Summary -->\r\n    <div class="col-md-5 col-lg-4">\r\n      <div class="card p-4 order-summary-card">\r\n        <h4 class="d-flex justify-content-between align-items-center mb-3">\r\n          <span class="text-primary"\r\n          style="color: rgb(0, 0, 0);"\r\n          >This Is Your Cart</span>\r\n\r\n          <span class="badge bg-primary rounded-pill">{{cartItems.length}}</span>\r\n        </h4>\r\n\r\n        <ul class="list-group mb-3">\r\n          <!-- Iterate through cart items -->\r\n          <li *ngFor="let item of cartItems" class="list-group-item d-flex justify-content-between lh-sm">\r\n            <div>\r\n                <img [src]="item.image"\r\n                style="width: 100px; height: 100px; padding: 10px;border-radius: 10px;">>\r\n            </div>\r\n            <div>\r\n              <h6 class="my-0">{{item.title}}</h6>\r\n              <small class="text-muted">Qty: {{item.qty}}</small>\r\n            </div>\r\n            <span class="text-muted"\r\n            style="color: red;\r\n            font-weight: 600;"\r\n            >{{ item.price * item.qty | currency }}</span>\r\n          </li>\r\n\r\n          <li class="list-group-item d-flex justify-content-between">\r\n            <span>Grand_Total </span>\r\n            <strong>{{cartTotal | currency}}</strong>\r\n          </li>\r\n        </ul>\r\n\r\n        <form class="card p-2">\r\n          <div class="input-group">\r\n            <input type="text" class="form-control" placeholder="Promo code">\r\n            <button type="submit" class="btn btn-secondary">Enter   Redeem</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\check-out\check-out.css
var check_out_default2;
var init_check_out2 = __esm({
  "angular:jit:style:src\\app\\check-out\\check-out.css"() {
    check_out_default2 = "/* src/app/check-out/check-out.css */\n.container {\n  max-width: 960px;\n}\n.card {\n  border-radius: 1rem;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  border: none;\n}\n.form-check-input:checked {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-primary {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n  border-radius: 0.75rem;\n  transition: all 0.3s ease;\n}\n.btn-primary:hover {\n  background-color: #0b5ed7;\n  border-color: #0a58ca;\n  transform: translateY(-2px);\n}\n.list-group-item {\n  border-radius: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.form-control {\n  border-radius: 0.5rem;\n}\n.order-summary-card {\n  border-radius: 15px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  padding: 20px;\n}\n.order-summary-card h4 {\n  font-size: 1.2rem;\n  font-weight: 600;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 10px;\n}\n.list-group-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: none;\n  border-bottom: 1px solid #f1f1f1;\n  padding: 12px 0;\n}\n.list-group-item:last-child {\n  border-bottom: none;\n}\n.list-group-item img {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  margin-right: 12px;\n  border-radius: 10px;\n}\n.list-group-item h6 {\n  font-size: 0.95rem;\n  margin-bottom: 4px;\n  font-weight: 600;\n}\n.list-group-item small {\n  color: #666;\n  font-size: 0.85rem;\n}\n.price-box {\n  min-width: 100px;\n  text-align: right;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: red;\n  padding: 6px 10px;\n  background: #f9f9f9;\n  border-radius: 8px;\n}\n.price-box {\n  min-width: 100px;\n  text-align: right;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: red;\n  padding: 6px 10px;\n  background: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 2px 6px rgba(1, 1, 1, 0.2);\n}\n.price-box {\n  min-width: 100px;\n  text-align: right;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: red;\n  padding: 6px 10px;\n  background: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease;\n}\n.price-box:hover {\n  background: #ffecec;\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n/*# sourceMappingURL=check-out.css.map */\n";
  }
});

// src/app/check-out/check-out.ts
var CheckOut;
var init_check_out3 = __esm({
  "src/app/check-out/check-out.ts"() {
    "use strict";
    init_tslib_es6();
    init_check_out();
    init_check_out2();
    init_core();
    init_common();
    init_cart_service();
    CheckOut = class CheckOut2 {
      cartService;
      cartItems = [];
      cartTotal = 0;
      constructor(cartService) {
        this.cartService = cartService;
      }
      ngOnInit() {
        this.cartItems = this.cartService.getCartItem();
        this.cartTotal = this.cartService.getCartTotal();
        console.log(this.cartItems);
      }
      paynow() {
        Swal.fire({
          title: "Thanks You",
          text: "Your payment was successful!",
          imageUrl: "/image/emoji.jpg",
          // <-- your image here
          imageWidth: 250,
          imageHeight: 250,
          imageAlt: "Success",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
        });
      }
      static ctorParameters = () => [
        { type: CartService }
      ];
    };
    CheckOut = __decorate([
      Component({
        selector: "app-check-out",
        imports: [CurrencyPipe, NgForOf],
        template: check_out_default,
        styles: [check_out_default2]
      })
    ], CheckOut);
  }
});

// src/app/check-out/check-out.spec.ts
var require_check_out_spec = __commonJS({
  "src/app/check-out/check-out.spec.ts"(exports) {
    init_testing();
    init_check_out3();
    describe("CheckOut", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [CheckOut]
        }).compileComponents();
        fixture = TestBed.createComponent(CheckOut);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_check_out_spec();
//# sourceMappingURL=spec-check-out.spec.js.map
