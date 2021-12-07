import { bech32 } from '../crypto/bech32';

import type { Validator } from '../types';

const ALLOWED_CHARS = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';

const regexp = new RegExp(`^(cosmos)1([${ALLOWED_CHARS}]+)$`); // cosmos + bech32 separated by '1'

const validator: Validator<true> = {
  isValidAddress(address) {
    const match = regexp.exec(address);
    if (match === null) {
      return false;
    }

    return this.verifyChecksum(address);
  },

  verifyChecksum(address) {
    const decoded = bech32.decode(address);
    if (decoded === null) {
      return false;
    }
    return decoded.data.length === 32;
  },
};

export default validator;
