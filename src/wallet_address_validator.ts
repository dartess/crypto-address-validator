import type { IsValidAddress } from './types';

const currencies = require('./currencies');

const DEFAULT_CURRENCY_NAME = 'bitcoin';

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
const validate: IsValidAddress = (
  address,
  currencyNameOrSymbol,
  networkType,
  addressFormats = [],
) => {
  const currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME);

  if (currency && currency.validator) {
    return currency.validator.isValidAddress(address, currency, networkType, addressFormats);
  }

  throw new Error(`Missing validator for currency: ${currencyNameOrSymbol}`);
};

const walletAddressValidator = {
  validate,
  CURRENCIES: currencies.CURRENCIES,
};

export default walletAddressValidator;
