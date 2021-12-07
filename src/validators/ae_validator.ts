import { base58 } from '../crypto/base58';
import { Validator } from '../types';

const ALLOWED_CHARS = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

const regexp = new RegExp(`^(ak_)([${ALLOWED_CHARS}]+)$`); // Begins with ak_ followed by

const validator: Validator<true> = {
  isValidAddress(address) {
    const match = regexp.exec(address);
    if (match !== null) {
      return this.verifyChecksum(match[2]);
    }
    return false;
  },

  verifyChecksum(address) {
    const decoded = base58.decode(address);
    decoded.splice(-4, 4); // remove last 4 elements. Why is base 58 adding them?
    return decoded.length === 32;
  },
};

export default validator;
