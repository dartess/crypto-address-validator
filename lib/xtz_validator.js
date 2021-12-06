"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base58_1 = require("./crypto/base58");
function getDecoded(address) {
    try {
        return base58_1.base58.decode(address);
    }
    catch (e) {
        // if decoding fails, assume invalid address
        return null;
    }
}
module.exports = {
    isValidAddress: function (address) {
        var decoded = getDecoded(address);
        if (!decoded || !Array.isArray(decoded) || decoded.length !== 27) {
            return false;
        }
        return true;
    }
};
