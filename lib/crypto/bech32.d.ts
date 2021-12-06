export function decode(bechString: any): {
    hrp: any;
    data: number[];
} | null;
export function encode(hrp: any, data: any): string;
