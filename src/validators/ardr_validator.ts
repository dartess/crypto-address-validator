import type { Validator } from '../types';

const ardorRegex = /^ARDOR(-[A-Z0-9]{4}){3}(-[A-Z0-9]{5})$/;

const validator: Validator = {
  isValidAddress(address) {
    return ardorRegex.test(address);
  },
};

export default validator;
