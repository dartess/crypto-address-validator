import XMRValidator = require("./monero_validator");
export const CURRENCIES: ({
    name: string;
    symbol: string;
    addressTypes: {
        prod: string[];
        testnet: string[];
    };
    validator: {
        isValidAddress: (address: string, currency: Object, networkType: string, addressFormats: any[]) => boolean | Error;
    };
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
    validator: {
        isValidAddress: (address: any, currency: any, networkType: any) => boolean;
    };
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
    validator: {
        isValidAddress: (address: any, currency: any, networkType: any) => boolean;
    };
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
    validator: {
        isValidAddress: (address: any, currency: any, networkType: any) => boolean;
    };
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
    validator: {
        isValidAddress: (address: any, currency: any, networkType: any) => boolean;
    };
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
} | {
    name: string;
    symbol: string;
    validator: {
        isValidAddress: (address: any, currency: any, networkType: any) => boolean | undefined;
    };
    addressTypes?: undefined;
    expectedLength?: undefined;
    hashFunction?: undefined;
    regex?: undefined;
    iAddressTypes?: undefined;
})[];
export declare function getByNameOrSymbol(currencyNameOrSymbol: any): {
    name: string;
    symbol: string;
    addressTypes: {
        prod: string[];
        testnet: string[];
    };
    validator: {
        isValidAddress: (address: string, currency: Object, networkType: string, addressFormats: any[]) => boolean | Error;
    };
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
    validator: {
        isValidAddress: (address: any, currency: any, networkType: any) => boolean;
    };
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
    validator: {
        isValidAddress: (address: any, currency: any, networkType: any) => boolean;
    };
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
    validator: {
        isValidAddress: (address: any, currency: any, networkType: any) => boolean;
    };
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
    validator: {
        isValidAddress: (address: any, currency: any, networkType: any) => boolean;
    };
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
} | {
    name: string;
    symbol: string;
    validator: {
        isValidAddress: (address: any, currency: any, networkType: any) => boolean | undefined;
    };
    addressTypes?: undefined;
    expectedLength?: undefined;
    hashFunction?: undefined;
    regex?: undefined;
    iAddressTypes?: undefined;
} | undefined;
