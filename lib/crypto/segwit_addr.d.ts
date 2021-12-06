export function encode(hrp: any, version: any, program: any): string | null;
export function decode(hrp: any, addr: any): {
    version: number;
    program: number[];
} | null;
export function isValidAddress(address: any): boolean;
