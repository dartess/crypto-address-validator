declare const cnBase58: {
    encode_block(data: Uint8Array, buf: Uint8Array, index: number): Uint8Array;
    encode(hex: string): string;
    decode_block(data: Uint8Array, buf: Uint8Array, index: number): Uint8Array;
    decode(encStr: string): string;
};
export { cnBase58 };
