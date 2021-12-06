declare const bech32: {
    decode(bechString: string): {
        data: Array<number>;
        hrp: string;
    } | null;
    encode(hrp: string, data: Array<number>): string;
};
export { bech32 };
