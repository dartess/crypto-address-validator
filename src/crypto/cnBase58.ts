import bigInt, {BigInteger} from 'big-integer';

/**
Copyright (c) 2017, moneroexamples

All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors
may be used to endorse or promote products derived from this software without
specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

Parts of the project are originally copyright (c) 2014-2017, MyMonero.com
*/

let alphabet_str = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
let alphabet: number[] = []
for (let i = 0; i < alphabet_str.length; i++) {
    alphabet.push(alphabet_str.charCodeAt(i))
}
let encoded_block_sizes = [0, 2, 3, 5, 6, 7, 9, 10, 11]

let alphabet_size = alphabet.length
let full_block_size = 8
let full_encoded_block_size = 11

let UINT64_MAX = bigInt(2).pow(64)

function hextobin(hex: string): Uint8Array {
    if (hex.length % 2 !== 0) throw 'Hex string has invalid length!'
    let res = new Uint8Array(hex.length / 2)
    for (let i = 0; i < hex.length / 2; ++i) {
        res[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16)
    }
    return res
}

function bintohex(bin: Uint8Array): string {
    let out = []
    for (let i = 0; i < bin.length; ++i) {
        out.push(('0' + bin[i].toString(16)).slice(-2))
    }
    return out.join('')
}

function strtobin(str: string): Uint8Array {
    let res = new Uint8Array(str.length)
    for (let i = 0; i < str.length; i++) {
        res[i] = str.charCodeAt(i)
    }
    return res
}

function bintostr(bin: Uint8Array): string {
    let out = []
    for (let i = 0; i < bin.length; i++) {
        out.push(String.fromCharCode(bin[i]))
    }
    return out.join('')
}

function uint8_be_to_64(data: Uint8Array): BigInteger {
    if (data.length < 1 || data.length > 8) {
        throw 'Invalid input length'
    }
    let res = bigInt(0)
    let twopow8 = bigInt(2).pow(8)
    let i = 0
    switch (9 - data.length) {
        case 1:
            res = res.add(data[i++])
        case 2:
            res = res.multiply(twopow8).add(data[i++])
        case 3:
            res = res.multiply(twopow8).add(data[i++])
        case 4:
            res = res.multiply(twopow8).add(data[i++])
        case 5:
            res = res.multiply(twopow8).add(data[i++])
        case 6:
            res = res.multiply(twopow8).add(data[i++])
        case 7:
            res = res.multiply(twopow8).add(data[i++])
        case 8:
            res = res.multiply(twopow8).add(data[i++])
            break
        default:
            throw 'Impossible condition'
    }
    return res
}

function uint64_to_8be(num: BigInteger, size: number): Uint8Array {
    let res = new Uint8Array(size)
    if (size < 1 || size > 8) {
        throw 'Invalid input length'
    }
    let twopow8 = bigInt(2).pow(8)
    for (let i = size - 1; i >= 0; i--) {
        res[i] = num.remainder(twopow8).toJSNumber()
        num = num.divide(twopow8)
    }
    return res
}

const cnBase58 = {
    encode_block(data: Uint8Array, buf: Uint8Array, index: number): Uint8Array {
        if (data.length < 1 || data.length > full_encoded_block_size) {
            throw 'Invalid block length: ' + data.length
        }
        let num = uint8_be_to_64(data)
        let i = encoded_block_sizes[data.length] - 1
        // while num > 0
        while (num.compare(0) === 1) {
            const {quotient, remainder} = num.divmod(alphabet_size);
            // remainder = num % alphabet_size
            // num = num / alphabet_size
            num = quotient
            buf[index + i] = alphabet[remainder.toJSNumber()]
            i--
        }
        return buf
    },

    encode(hex: string): string {
        let data = hextobin(hex)
        if (data.length === 0) {
            return ''
        }
        let full_block_count = Math.floor(data.length / full_block_size)
        let last_block_size = data.length % full_block_size
        let res_size = full_block_count * full_encoded_block_size + encoded_block_sizes[last_block_size]

        let res = new Uint8Array(res_size)
        let i
        for (i = 0; i < res_size; ++i) {
            res[i] = alphabet[0]
        }
        for (i = 0; i < full_block_count; i++) {
            res = this.encode_block(data.subarray(i * full_block_size, i * full_block_size + full_block_size), res, i * full_encoded_block_size)
        }
        if (last_block_size > 0) {
            res = this.encode_block(data.subarray(full_block_count * full_block_size, full_block_count * full_block_size + last_block_size), res, full_block_count * full_encoded_block_size)
        }
        return bintostr(res)
    },

    decode_block(data: Uint8Array, buf: Uint8Array, index: number): Uint8Array {
        if (data.length < 1 || data.length > full_encoded_block_size) {
            throw 'Invalid block length: ' + data.length
        }

        let res_size = encoded_block_sizes.indexOf(data.length)
        if (res_size <= 0) {
            throw 'Invalid block size'
        }
        let res_num = bigInt(0)
        let order = bigInt(1)
        for (let i = data.length - 1; i >= 0; i--) {
            let digit = alphabet.indexOf(data[i])
            if (digit < 0) {
                throw 'Invalid symbol'
            }
            let product = order.multiply(digit).add(res_num)
            // if product > UINT64_MAX
            if (product.compare(UINT64_MAX) === 1) {
                throw 'Overflow'
            }
            res_num = product
            order = order.multiply(alphabet_size)
        }
        if (res_size < full_block_size && (bigInt(2).pow(8 * res_size).compare(res_num) <= 0)) {
            throw 'Overflow 2'
        }
        buf.set(uint64_to_8be(res_num, res_size), index)
        return buf
    },

    decode(encStr: string): string {
        const enc = strtobin(encStr);
        if (enc.length === 0) {
            return ''
        }
        let full_block_count = Math.floor(enc.length / full_encoded_block_size)
        let last_block_size = enc.length % full_encoded_block_size
        let last_block_decoded_size = encoded_block_sizes.indexOf(last_block_size)
        if (last_block_decoded_size < 0) {
            throw 'Invalid encoded length'
        }
        let data_size = full_block_count * full_block_size + last_block_decoded_size
        let data = new Uint8Array(data_size)
        for (let i = 0; i < full_block_count; i++) {
            data = this.decode_block(enc.subarray(i * full_encoded_block_size, i * full_encoded_block_size + full_encoded_block_size), data, i * full_block_size)
        }
        if (last_block_size > 0) {
            data = this.decode_block(enc.subarray(full_block_count * full_encoded_block_size, full_block_count * full_encoded_block_size + last_block_size), data, full_block_count * full_block_size)
        }
        return bintohex(data)
    }
};

export { cnBase58 }