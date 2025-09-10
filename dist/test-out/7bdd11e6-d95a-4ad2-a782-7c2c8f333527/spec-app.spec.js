import {
  ReactiveFormsModule,
  init_forms
} from "./chunk-UIPEYWDV.js";
import {
  Footer,
  init_footer
} from "./chunk-QIV4D4CC.js";
import {
  RouterLink,
  RouterOutlet,
  init_router
} from "./chunk-UEVFAQY7.js";
import "./chunk-IPXL6DNC.js";
import {
  CartService,
  init_cart_service
} from "./chunk-VSDPM33S.js";
import "./chunk-OI53BQJY.js";
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

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = '<!-- <app-navbar></app-navbar> -->\r\n<nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top" \r\nstyle="margin-top: 0;\r\n" \r\n>\r\n  <div class="container-fluid">\r\n    <a \r\n    style="margin-left: 300px;"\r\n    class="navbar-brand" href="#">Pedro</a>\r\n\r\n    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"\r\n      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\r\n      <span class="navbar-toggler-icon"></span>\r\n    </button>\r\n    <div class="collapse navbar-collapse" id="navbarSupportedContent">\r\n      <ul class="navbar-nav me-auto mb-2 mb-lg-0">\r\n        <li class="nav-item">\r\n          <a class="nav-link active" aria-current="page" href="#" routerLink="/">Home</a>\r\n        </li>\r\n        <li class="nav-item">\r\n          <a class="nav-link active" aria-current="page" href="#" routerLink="/product-page">Product</a>\r\n        </li>\r\n        <li class="nav-item">\r\n          <a class="nav-link" href="#" routerLink="/contact">Contact</a>\r\n        </li>\r\n      </ul>\r\n      <div \r\n      style="margin-right: 300px;"\r\n      class="d-flex" role="search">\r\n        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />\r\n        <a \r\n        style=" border: none;"\r\n        routerLink="/cart"\r\n        class="btn btn-outline-success">\r\n        Cart ({{ cartService.getCartItem().length}})\r\n      </a>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n\r\n  <!-- <app-contact></app-contact> -->\r\n  <router-outlet />\r\n\r\n\r\n\r\n\r\n<app-footer></app-footer>';
  }
});

// angular:jit:style:src\app\app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src\\app\\app.css"() {
    app_default2 = "/* src/app/app.css */\n.navbar {\n  background-color: white !important;\n}\n.navbar-brand,\n.nav-link {\n  color: rgba(0, 191, 255, 0.553) !important;\n  font-weight: 700;\n}\n.navbar-brand {\n  font-size: 2rem;\n}\n.nav-link {\n  margin-left: 30px;\n  font-size: 20px;\n}\n.nav-link:hover {\n  color: #008cff !important;\n}\n.btn-outline-success {\n  white-space: nowrap;\n  display: inline-flex;\n  align-items: center;\n  padding: 0.6rem 1.25rem;\n  font-weight: 600;\n}\n.form-control {\n  border-radius: 20px;\n}\n.btn {\n  background-color: rgb(255, 255, 255);\n}\n.btn-outline-success {\n  white-space: nowrap;\n  display: inline-flex;\n  align-items: center;\n  padding: 0.6rem 1.25rem;\n  font-weight: 600;\n  font-size: 1rem;\n  border-radius: 50px;\n  background-color: #ffffff;\n  color: #007bff;\n  transition: all 0.3s ease-in-out;\n  box-shadow: none;\n}\n.btn-outline-success:hover {\n  background-color: #00bbff;\n  color: #ffffff;\n  transform: translateY(-2px);\n}\n.btn-outline-success:active {\n  background-color: #00bbff;\n  color: #ffffff;\n  transform: translateY(0);\n  box-shadow: none;\n}\n.btn-outline-success:focus {\n  box-shadow: none;\n  outline: none;\n}\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/app.ts
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    init_forms();
    init_footer();
    init_cart_service();
    App = class App2 {
      cartService;
      // ngOnInit(): void {
      //   let card: any = localStorage.getItem('card_item') ?? '[]';
      //   this.card_item = JSON.parse(card);
      // }
      // card_item: any[] = [];
      constructor(cartService) {
        this.cartService = cartService;
      }
      static ctorParameters = () => [
        { type: CartService }
      ];
    };
    App = __decorate([
      Component({
        selector: "app-root",
        imports: [RouterOutlet, ReactiveFormsModule, Footer, RouterLink],
        template: app_default,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app3();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, lap5");
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
