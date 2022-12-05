"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.computeTotalCalory = exports.extractElfData = void 0;
const fs = __importStar(require("fs"));
const readline = __importStar(require("readline"));
const path_1 = __importDefault(require("path"));
// A Generator function that returns line of file
function extractElfData() {
    return __awaiter(this, void 0, void 0, function* () {
        const stream = fs.createReadStream(path_1.default.resolve(__dirname, 'input.txt'), {
            encoding: 'utf8',
        });
        const rl = readline.createInterface({
            input: stream,
            crlfDelay: Infinity,
        });
        return new Promise((resolve, reject) => {
            stream.once('error', (_) => reject(new Error(`Error in stream`)));
            const data = [];
            let elf = [];
            rl.on('line', (line) => {
                if (line === ``) {
                    data.push(elf);
                    elf = [];
                }
                else {
                    elf.push(parseInt(line, 10));
                }
            });
            rl.on('close', () => resolve(data));
        });
    });
}
exports.extractElfData = extractElfData;
function computeTotalCalory(elfData) {
    return elfData.map((elfCalory) => elfCalory.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
}
exports.computeTotalCalory = computeTotalCalory;
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield extractElfData();
        const total = computeTotalCalory(data);
        return Math.max(...total);
        // console.log(data);
    });
}
exports.run = run;
//# sourceMappingURL=one.js.map