import { base58 } from '../crypto/base58';

function getDecoded (address) {
  try {
    return base58.decode(address)
  } catch (e) {
    // if decoding fails, assume invalid address
    return null
  }
}

module.exports = {
  isValidAddress: function (address) {
    var decoded = getDecoded(address)

    if (!decoded) {
      return false
    }

    if (decoded.length !== 37) {
      return false
    }

    if (decoded[0] !== 42) {
      return false
    }

    return true
  }
}
