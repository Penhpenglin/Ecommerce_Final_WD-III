import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-MMRMA2V2.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\slide\slide.html
var slide_default;
var init_slide = __esm({
  "angular:jit:template:src\\app\\slide\\slide.html"() {
    slide_default = '<div class="container">\r\n    <div id="carouselExample" class="carousel slide " data-bs-ride="carousel">\r\n  <div class="carousel-inner" style="width: 100%; height: 500px;">\r\n    <div class="carousel-item active">\r\n      <img src="./image/number2.jpg" class="d-block w-100" alt="...">\r\n    </div>\r\n    <div class="carousel-item">\r\n      <img src="./image/number4.jpg" class="d-block w-100" alt="...">\r\n    </div>\r\n    <div class="carousel-item">\r\n      <img src="./image/number3.jpg" class="d-block w-100" alt="...">\r\n    </div>\r\n  </div>\r\n  <div><br>\r\n      <h1 class="main-h1" style="text-align: center; color: rgb(0, 149, 255); ">The One Card</h1>\r\n  </div><br>\r\n  <div class= "carousel-inner">\r\n       <img src="./image/Pedro.jpg" class="d-block w-100" alt="...">\r\n  </div>\r\n  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">\r\n    <span class="carousel-control-prev-icon" aria-hidden="true"></span>\r\n    <span class="visually-hidden">Previous</span>\r\n  </button>\r\n  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">\r\n    <span class="carousel-control-next-icon" aria-hidden="true"></span>\r\n    <span class="visually-hidden">Next</span>\r\n  </button>\r\n</div>\r\n\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\slide\slide.css
var slide_default2;
var init_slide2 = __esm({
  "angular:jit:style:src\\app\\slide\\slide.css"() {
    slide_default2 = "/* src/app/slide/slide.css */\n/*# sourceMappingURL=slide.css.map */\n";
  }
});

// src/app/slide/slide.ts
var Slide;
var init_slide3 = __esm({
  "src/app/slide/slide.ts"() {
    "use strict";
    init_tslib_es6();
    init_slide();
    init_slide2();
    init_core();
    Slide = class Slide2 {
    };
    Slide = __decorate([
      Component({
        selector: "app-slide",
        imports: [],
        template: slide_default,
        styles: [slide_default2]
      })
    ], Slide);
  }
});

export {
  Slide,
  init_slide3 as init_slide
};
//# sourceMappingURL=chunk-4EVHZDCD.js.map
