import BTCValidator = require("./bitcoin_validator");
import ADAValidator = require("./cardano_validator");
import XMRValidator = require("./monero_validator");
export const CURRENCIES: ({
    name: string;
    symbol: string;
    addressTypes: {
        prod: string[];
        testnet: string[];
    };
    validator: typeof BTCValidator;
    expectedLength?: undefined;
    hashFunction?: undefined;
    regex?: undefined;
    iAddressTypes?: undefined;
} | {
    name: string;
    symbol: string;
    addressTypes: {
        prod: string[];
        testnet?: undefined;
    };
    validator: typeof BTCValidator;
    expectedLength?: undefined;
    hashFunction?: undefined;
    regex?: undefined;
    iAddressTypes?: undefined;
} | {
    name: string;
    symbol: string;
    expectedLength: number;
    addressTypes: {
        prod: string[];
        testnet: string[];
    };
    validator: typeof BTCValidator;
    hashFunction?: undefined;
    regex?: undefined;
    iAddressTypes?: undefined;
} | {
    name: string;
    symbol: string;
    addressTypes: {
        prod: string[];
        testnet: string[];
    };
    hashFunction: string;
    expectedLength: number;
    validator: typeof BTCValidator;
    regex?: undefined;
    iAddressTypes?: undefined;
} | {
    name: string;
    symbol: string;
    addressTypes: {
        prod: string[];
        testnet: string[];
    };
    expectedLength: number;
    hashFunction: string;
    regex: RegExp;
    validator: typeof BTCValidator;
    iAddressTypes?: undefined;
} | {
    name: string;
    symbol: string;
    validator: typeof ADAValidator;
    addressTypes?: undefined;
    expectedLength?: undefined;
    hashFunction?: undefined;
    regex?: undefined;
    iAddressTypes?: undefined;
} | {
    name: string;
    symbol: string;
    addressTypes: {
        prod: string[];
        testnet: string[];
    };
    iAddressTypes: {
        prod: string[];
        testnet: string[];
    };
    validator: typeof XMRValidator;
    expectedLength?: undefined;
    hashFunction?: undefined;
    regex?: undefined;
})[];
export declare function getByNameOrSymbol(currencyNameOrSymbol: any): {
    name: string;
    symbol: string;
    addressTypes: {
        prod: string[];
        testnet: string[];
    };
    validator: typeof BTCValidator;
    expectedLength?: undefined;
    hashFunction?: undefined;
    regex?: undefined;
    iAddressTypes?: undefined;
} | {
    name: string;
    symbol: string;
    addressTypes: {
        prod: string[];
        testnet?: undefined;
    };
    validator: typeof BTCValidator;
    expectedLength?: undefined;
    hashFunction?: undefined;
    regex?: undefined;
    iAddressTypes?: undefined;
} | {
    name: string;
    symbol: string;
    expectedLength: number;
    addressTypes: {
        prod: string[];
        testnet: string[];
    };
    validator: typeof BTCValidator;
    hashFunction?: undefined;
    regex?: undefined;
    iAddressTypes?: undefined;
} | {
    name: string;
    symbol: string;
    addressTypes: {
        prod: string[];
        testnet: string[];
    };
    hashFunction: string;
    expectedLength: number;
    validator: typeof BTCValidator;
    regex?: undefined;
    iAddressTypes?: undefined;
} | {
    name: string;
    symbol: string;
    addressTypes: {
        prod: string[];
        testnet: string[];
    };
    expectedLength: number;
    hashFunction: string;
    regex: RegExp;
    validator: typeof BTCValidator;
    iAddressTypes?: undefined;
} | {
    name: string;
    symbol: string;
    validator: typeof ADAValidator;
    addressTypes?: undefined;
    expectedLength?: undefined;
    hashFunction?: undefined;
    regex?: undefined;
    iAddressTypes?: undefined;
} | {
    name: string;
    symbol: string;
    addressTypes: {
        prod: string[];
        testnet: string[];
    };
    iAddressTypes: {
        prod: string[];
        testnet: string[];
    };
    validator: typeof XMRValidator;
    expectedLength?: undefined;
    hashFunction?: undefined;
    regex?: undefined;
} | undefined;
