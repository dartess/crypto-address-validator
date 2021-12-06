import { Buffer } from 'buffer';
import { base32 } from 'rfc4648';
import { sha512_256 } from 'js-sha512';

import type { Validator } from '../types';

function correctPadding(a: string): string {
  return a + '='.repeat((8 - (a.length % 8)));
}

const validator: Validator<true> = {
  isValidAddress(address) {
    return this.verifyChecksum(address);
  },

  verifyChecksum(address) {
    if (address.length !== 58) {
      return false;
    }
    // Decode base32 Address
    const decoded = Buffer.from(base32.parse(correctPadding(address)));
    const addr = decoded.slice(0, decoded.length - 4);
    const checksum = decoded.slice(-4).toString('hex');

    // Hash Address - Checksum
    const hash = sha512_256.create();
    hash.update(addr);
    const code = hash.hex().slice(-8);
    return code === checksum;
  },
};

export default validator;
