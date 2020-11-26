/**
 * Mocking client-server processing
 */
import _products from './products.json'

const TIMEOUT = 100

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT),
}
