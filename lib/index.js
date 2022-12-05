"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const one_1 = require("./Dayz/One/one");
const two_1 = require("./Dayz/two");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const text = yield (0, one_1.run)();
    console.log((0, util_1.inspect)(text));
    const two = yield (0, two_1.runTwo)();
    console.log('Two is ' + (0, util_1.inspect)(two));
}))().catch((e) => {
    // Deal with the fact the chain failed
    throw new Error(e);
});
//# sourceMappingURL=index.js.map