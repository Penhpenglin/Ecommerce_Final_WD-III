import {
  Pipe,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-MMRMA2V2.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/custom-pipes/tokhr-pipe.ts
var TokhrPipe;
var init_tokhr_pipe = __esm({
  "src/app/custom-pipes/tokhr-pipe.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    TokhrPipe = class TokhrPipe2 {
      transform(amount, rate, type = "out") {
        const res = amount * rate;
        if (type === "floor") {
          const rounded = Math.floor(res / 100) * 100;
          return rounded.toLocaleString() + " \u17DB";
        } else if (type === "in") {
          const rounded = Math.round(res / 100) * 100;
          return rounded.toLocaleString() + " \u17DB";
        }
        return res.toLocaleString() + " \u17DB";
      }
    };
    TokhrPipe = __decorate([
      Pipe({
        name: "tokhr"
      })
    ], TokhrPipe);
  }
});

export {
  TokhrPipe,
  init_tokhr_pipe
};
//# sourceMappingURL=chunk-K7EADEYF.js.map
