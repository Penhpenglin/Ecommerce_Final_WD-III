import {
  Slide,
  init_slide
} from "./chunk-4EVHZDCD.js";
import {
  TestBed,
  init_testing
} from "./chunk-N5UVEJXM.js";
import "./chunk-MMRMA2V2.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/slide/slide.spec.ts
var require_slide_spec = __commonJS({
  "src/app/slide/slide.spec.ts"(exports) {
    init_testing();
    init_slide();
    describe("Slide", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Slide]
        }).compileComponents();
        fixture = TestBed.createComponent(Slide);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_slide_spec();
//# sourceMappingURL=spec-slide.spec.js.map
