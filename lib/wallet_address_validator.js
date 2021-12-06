"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var currencies = require('./currencies');
var DEFAULT_CURRENCY_NAME = 'bitcoin';
exports.default = {
    /**
     * Checks if a given address is valid for the given currency
     *
     * @param address The target address
     * @param currencyNameOrSymbol The name or the symbol/ticker of the currency
     * @param networkType Network Type. Could be 'prod', 'both' and 'testnet'
     * @param {Array} addressFormats Array of formats. For example ['legacy', 'slp ', 'cash']
     * @returns {Error|Boolean}
     */
    validate: function (address, currencyNameOrSymbol, networkType, addressFormats) {
        var currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME);
        if (currency && currency.validator) {
            if (!Array.isArray(addressFormats)) {
                addressFormats = [];
            }
            return currency.validator.isValidAddress(address, currency, networkType, addressFormats);
        }
        throw new Error('Missing validator for currency: ' + currencyNameOrSymbol);
    },
    CURRENCIES: currencies.CURRENCIES
};
