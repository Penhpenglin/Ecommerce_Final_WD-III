import {
  Slide,
  init_slide
} from "./chunk-4EVHZDCD.js";
import {
  BrandImage,
  init_brand_image
} from "./chunk-O3GSHT6P.js";
import {
  Card,
  init_card
} from "./chunk-EOJ63BBN.js";
import "./chunk-K7EADEYF.js";
import "./chunk-UEVFAQY7.js";
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
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-MMRMA2V2.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\home\home.html
var home_default;
var init_home = __esm({
  "angular:jit:template:src\\app\\home\\home.html"() {
    home_default = '<app-slide></app-slide>\r\n\r\n<app-brand-image></app-brand-image>\r\n\r\n<div class="container">\r\n    <h2 style="font-weight: 700;"\r\n    >ZANDO 10 Years, Infinite Style \u2728</h2>\r\n</div>\r\n<div class="container">\r\n    <div class="row">\r\n        @for (item of productService.getProducts(); track item.id) {\r\n        <app-card \r\n        class="col-md-3 mt-2" \r\n        [product]="item" \r\n        (onAddToCard)="addToCard($event)">\r\n\r\n        </app-card>\r\n\r\n        }\r\n    </div>\r\n</div>\r\n\r\n';
  }
});

// angular:jit:style:src\app\home\home.css
var home_default2;
var init_home2 = __esm({
  "angular:jit:style:src\\app\\home\\home.css"() {
    home_default2 = "/* src/app/home/home.css */\n/*# sourceMappingURL=home.css.map */\n";
  }
});

// src/app/service/product-service.ts
var ProductService;
var init_product_service = __esm({
  "src/app/service/product-service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    ProductService = class ProductService2 {
      products = [];
      constructor() {
        let ng_this = this;
        $.LoadingOverlay("show");
        axios.get("https://fakestoreapi.com/products").then(function(response) {
          ng_this.products = response.data;
          $.LoadingOverlay("hide");
        }).catch(function(error) {
          console.log(error);
        }).finally(function() {
        });
      }
      getProducts() {
        return this.products;
      }
      static ctorParameters = () => [];
    };
    ProductService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], ProductService);
  }
});

// src/app/home/home.ts
var Home;
var init_home3 = __esm({
  "src/app/home/home.ts"() {
    "use strict";
    init_tslib_es6();
    init_home();
    init_home2();
    init_core();
    init_slide();
    init_card();
    init_cart_service();
    init_product_service();
    init_brand_image();
    Home = class Home2 {
      cartService;
      productService;
      constructor(cartService, productService) {
        this.cartService = cartService;
        this.productService = productService;
      }
      title = "lap5";
      card_item = [];
      addToCard(product) {
        this.cartService.addToCard(product);
        console.log(this.card_item);
      }
      static ctorParameters = () => [
        { type: CartService },
        { type: ProductService }
      ];
    };
    Home = __decorate([
      Component({
        selector: "app-home",
        imports: [Slide, Card, BrandImage],
        template: home_default,
        styles: [home_default2]
      })
    ], Home);
  }
});

// src/app/home/home.spec.ts
var require_home_spec = __commonJS({
  "src/app/home/home.spec.ts"(exports) {
    init_testing();
    init_home3();
    describe("Home", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Home]
        }).compileComponents();
        fixture = TestBed.createComponent(Home);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_home_spec();
//# sourceMappingURL=spec-home.spec.js.map
