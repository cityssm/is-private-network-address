/**
 * Local Network Addresses
 */
export const localNetworkAddresses = new Set([
  'localhost',
  '127.0.0.1',
  '::1',
  '::ffff:127.0.0.1'
])

/*
 * Private Network Ranges
 */
export const privateNetworkRanges = [
  /^(::ffff:)?10(\.\d{1,3}){3}$/,
  /^(::ffff:)?172\.(1[6-9]|2\d|3[01])(\.\d{1,3}){2}$/,
  /^(::ffff:)?192\.168(\.\d{1,3}){2}$/,
  /^f[cd][\da-f]{0,2}(:([\da-f]){0,4}){0,7}$/
]

/**
 * Tests if a given network address is a local network address.
 * @param networkAddress - A network address string.
 * @returns `true` if the network address string represents a local network address.
 */
export function isLocal(networkAddress: string): boolean {
  return localNetworkAddresses.has(networkAddress.toLowerCase())
}

/**
 * Tests if a given network address is a private network address.
 * @param networkAddress - A network address string.
 * @returns `true` if the network address string represents a private network address.
 */
export function isPrivate(networkAddress: string): boolean {
  const networkAddressLowerCase = networkAddress.toLowerCase()

  if (isLocal(networkAddress)) {
    return true
  }

  for (const privateNetworkRange of privateNetworkRanges) {
    if (privateNetworkRange.test(networkAddressLowerCase)) {
      return true
    }
  }

  return false
}
