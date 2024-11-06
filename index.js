export const localNetworkAddresses = new Set([
    'localhost',
    '127.0.0.1',
    '::1',
    '::ffff:127.0.0.1'
]);
export const privateNetworkRanges = [
    /^(::ffff:)?10(\.\d{1,3}){3}$/,
    /^(::ffff:)?172\.(1[6-9]|2\d|3[01])(\.\d{1,3}){2}$/,
    /^(::ffff:)?192\.168(\.\d{1,3}){2}$/,
    /^f[cd][\da-f]{0,2}(:([\da-f]){0,4}){0,7}$/
];
export function isLocal(networkAddress) {
    return localNetworkAddresses.has(networkAddress.toLowerCase());
}
export function isPrivate(networkAddress) {
    const networkAddressLowerCase = networkAddress.toLowerCase();
    for (const privateNetworkRange of privateNetworkRanges) {
        if (privateNetworkRange.test(networkAddressLowerCase)) {
            return true;
        }
    }
    return false;
}
