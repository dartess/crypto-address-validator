export type Address = string;
export type CurrencyNameOrSymbol = string;
export type NetworkType = string;
export type AddressFormats = string[];

export type IsValidAddress = (
  address: Address,
  currencyNameOrSymbol: CurrencyNameOrSymbol,
  networkType?: NetworkType,
  addressFormats?: AddressFormats,
) => boolean;

type ValidatorSimple = {
  isValidAddress: IsValidAddress;
};

type ValidatorSimpleWithVerifyChecksum = ValidatorSimple & {
  verifyChecksum: (address: string) => boolean;
};

export type Validator<TWithVerifyChecksum extends boolean = false> =
  TWithVerifyChecksum extends true ? ValidatorSimpleWithVerifyChecksum : ValidatorSimple;
