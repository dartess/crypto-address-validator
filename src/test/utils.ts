/* eslint-disable import/no-extraneous-dependencies */

import isNode from 'detect-node';

import walletAddressValidator from '../wallet_address_validator';
import {
  Address, AddressFormats, CurrencyNameOrSymbol, NetworkType,
} from '../types';

declare global {
  interface Window {
    chai: Chai.ChaiStatic;
    WAValidator: typeof walletAddressValidator;
  }
}

const chai: Chai.ChaiStatic = isNode ? require('chai') : window.chai;

const { expect } = chai;

const WAValidator = isNode ? walletAddressValidator : window.WAValidator;

function valid(
  address: Address,
  currency: CurrencyNameOrSymbol,
  networkType?: NetworkType,
  addressFormats?: AddressFormats,
) {
  const result = WAValidator.validate(address, currency, networkType, addressFormats);
  expect(result).to.equal(true);
}

function invalid(
  address: Address,
  currency: CurrencyNameOrSymbol,
  networkType?: NetworkType,
  addressFormats?: AddressFormats,
) {
  const result = WAValidator.validate(address, currency, networkType, addressFormats);
  expect(result).to.equal(false);
}

function commonInvalidTests(currency: CurrencyNameOrSymbol) {
  invalid('', currency); // reject blank
  invalid('%%@', currency); // reject invalid base58 string
  invalid('1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', currency); // reject invalid address
  invalid('bd839e4f6fadb293ba580df5dea7814399989983', currency); // reject transaction id's
  // testnet
  invalid('', currency, 'testnet'); // reject blank
  invalid('%%@', currency, 'testnet'); // reject invalid base58 string
  invalid('1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', currency, 'testnet'); // reject invalid address
  invalid('bd839e4f6fadb293ba580df5dea7814399989983', currency, 'testnet'); // reject transaction id's
}

export {
  valid,
  invalid,
  commonInvalidTests,
};
