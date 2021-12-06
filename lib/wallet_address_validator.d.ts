declare const _default: {
    /**
     * Checks if a given address is valid for the given currency
     *
     * @param address The target address
     * @param currencyNameOrSymbol The name or the symbol/ticker of the currency
     * @param networkType Network Type. Could be 'prod', 'both' and 'testnet'
     * @param {Array} addressFormats Array of formats. For example ['legacy', 'slp ', 'cash']
     * @returns {Error|Boolean}
     */
    validate: (address: string, currencyNameOrSymbol: string, networkType: string, addressFormats: any) => any;
    CURRENCIES: any;
};
export default _default;
