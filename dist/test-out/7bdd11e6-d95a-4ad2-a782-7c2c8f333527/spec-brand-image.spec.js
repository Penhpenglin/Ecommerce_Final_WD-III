import {
  BrandImage,
  init_brand_image
} from "./chunk-O3GSHT6P.js";
import {
  TestBed,
  init_testing
} from "./chunk-N5UVEJXM.js";
import "./chunk-MMRMA2V2.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/brand-image/brand-image.spec.ts
var require_brand_image_spec = __commonJS({
  "src/app/brand-image/brand-image.spec.ts"(exports) {
    init_testing();
    init_brand_image();
    describe("BrandImage", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [BrandImage]
        }).compileComponents();
        fixture = TestBed.createComponent(BrandImage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_brand_image_spec();
//# sourceMappingURL=spec-brand-image.spec.js.map
