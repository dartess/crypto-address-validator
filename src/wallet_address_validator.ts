const currencies = require('./currencies');

const DEFAULT_CURRENCY_NAME = 'bitcoin';

export default {
  /**
   * Checks if a given address is valid for the given currency
   *
   * @param address The target address
   * @param currencyNameOrSymbol The name or the symbol/ticker of the currency
   * @param networkType Network Type. Could be 'prod', 'both' and 'testnet'
   * @param addressFormats Array of formats. For example ['legacy', 'slp ', 'cash']
   *
   * @returns is valid
   */
  validate(
    address: string,
    currencyNameOrSymbol: string,
    networkType: string,
    addressFormats: string[] = [],
  ): boolean {
    const currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME);

    if (currency && currency.validator) {
      return currency.validator.isValidAddress(address, currency, networkType, addressFormats);
    }

    throw new Error(`Missing validator for currency: ${currencyNameOrSymbol}`);
  },

  CURRENCIES: currencies.CURRENCIES,
};
