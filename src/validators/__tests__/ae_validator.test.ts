import { invalid, valid } from '../../test/utils';

describe('Aeternity', () => {
  describe('valid results', () => {
    it('should return true for correct Aeternity addresses', () => {
      valid('ak_AT2bs7LkqwKbPUj5waoqq1E7QYgRzXUbaBanDHXDVsaCJ8gRA', 'ae');
      valid('ak_8QxnP9qXP3NpA4fskYZE7P1GfHzKZAMmoNuok7jJC5NqVYi21', 'ae');
    });
  });

  describe('invalid results', () => {
    it('should return false for incorrect Aeternity addresses', () => {
      invalid('aj_AT2bs7LkqwKbPUj5waoqq1E7QYgRzXUbaBanDHXDVsaCJ8gRA', 'ae');
      invalid('ak_8QlnP9qXP3NpA4fskYZE7P1GfHzKZAMmoNuok7jJC5NqVYi21', 'ae');
      invalid('ak_8QxnP9qXP3NpA4fskYZE7P1GfHzKZAMmoNuok7jJC5NqVYi212', 'ae');
    });
  });
});
