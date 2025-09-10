import {
  Card,
  init_card
} from "./chunk-EOJ63BBN.js";
import "./chunk-K7EADEYF.js";
import "./chunk-UEVFAQY7.js";
import "./chunk-IPXL6DNC.js";
import "./chunk-OI53BQJY.js";
import {
  TestBed,
  init_testing
} from "./chunk-N5UVEJXM.js";
import "./chunk-MMRMA2V2.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/card/card.spec.ts
var require_card_spec = __commonJS({
  "src/app/card/card.spec.ts"(exports) {
    init_testing();
    init_card();
    describe("Card", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Card]
        }).compileComponents();
        fixture = TestBed.createComponent(Card);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_card_spec();
//# sourceMappingURL=spec-card.spec.js.map
