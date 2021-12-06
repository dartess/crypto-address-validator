import baseX from 'base-x';

const BASE58_ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const bs58 = baseX(BASE58_ALPHABET);

const base58 = {
  decode(string: string): Array<number> {
    return [...bs58.decode(string)];
  },
};

export { base58 };
