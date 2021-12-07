import { invalid, valid } from '../../test/utils';

describe('Ardor', () => {
  describe('valid results', () => {
    it('should return true for correct Ardor addresses', () => {
      valid('ARDOR-HFNE-E2VE-SMV3-DCRZ8', 'ardr');
    });
  });

  describe('invalid results', () => {
    it('should return false for incorrect Ardor addresses', () => {
      invalid('ARDOR-HFNE-a2VE-SMV3-DCRZ8', 'ardr');
      invalid('ARDOR-HFNE-E2VE-SMV3-DCRZ', 'ardr');
      invalid('ARD0R-HFNE-E2VE-SMV3-DCRZ8', 'ardr');
    });
  });
});
