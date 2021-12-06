import { commonInvalidTests, valid } from '../../test/utils';

describe('Algorand', () => {
  describe('valid results', () => {
    it('should return true for correct Algorand addresses', () => {
      valid('LCRDY3LYAANTVS3XRHEHWHGXRTKZYVTX55P5IA2AT5ZDJ4CWZFFZIKVHLI', 'algo');
      valid('SP745JJR4KPRQEXJZHVIEN736LYTL2T2DFMG3OIIFJBV66K73PHNMDCZVM', 'algo');
      valid('AKHSHWO2TUWE53RMVG6ZUBNAEX6MTYPT76TCIDCDWYUUTK6HCJTZS2HDQU', 'algo');
    });
  });

  describe('invalid results', () => {
    it('should return false for incorrect Algorand addresses', () => {
      commonInvalidTests('algo');
    });
  });
});
