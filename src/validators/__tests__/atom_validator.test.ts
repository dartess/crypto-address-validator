import { invalid, valid } from '../../test/utils';

describe('Cosmos', () => {
  describe('valid results', () => {
    it('should return true for correct Cosmos addresses', () => {
      valid('cosmos15v50ymp6n5dn73erkqtmq0u8adpl8d3ujv2e74', 'atom');
    });
  });

  describe('invalid results', () => {
    it('should return false for incorrect Cosmos addresses', () => {
      invalid('cosmos15v50ymp6n5dn73erkqtmq0u8adpl8d3ujv2e745v50ymp6n5dn73erkqtmq0u8adpl8d3ujv2e745v50ymp6', 'atom');
      invalid('cosmo15v50ymp6n5dn73erkqtmq0u8adpl8d3ujv2e74', 'atom');
      invalid('cosmos25v50ymp6n5dn73erkqtmq0u8adpl8d3ujv2e74', 'atom');
      invalid('cosmos15v50ymp6n5dn73erkQtmq0u8adpl8d3ujv2e74', 'atom');
    });
  });
});
