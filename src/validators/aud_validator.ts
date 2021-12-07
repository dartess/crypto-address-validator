import type { Validator } from '../types';

const validator: Validator = {
  isValidAddress(address) {
    const regex = /^[0-9]{6,10}$/g; // Must be numbers only for the first 1 - 20 charactors with a capital L at the end
    return address.search(regex) !== -1;
  },
};

export default validator;
