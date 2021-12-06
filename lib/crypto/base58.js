"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.base58 = void 0;
const base_x_1 = __importDefault(require("base-x"));
const BASE58_ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const bs58 = (0, base_x_1.default)(BASE58_ALPHABET);
const base58 = {
    decode(string) {
        return [...bs58.decode(string)];
    },
};
exports.base58 = base58;
