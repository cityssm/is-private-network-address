/**
 * Local Network Addresses
 */
export declare const localNetworkAddresses: Set<string>;
export declare const privateNetworkAddressRanges: RegExp[];
/**
 * Tests if a given network address is a local network address.
 * @param networkAddress - A network address string.
 * @returns `true` if the network address string represents a local network address.
 */
export declare function isLocal(networkAddress: string): boolean;
/**
 * Tests if a given network address is a private network address.
 * @param networkAddress - A network address string.
 * @returns `true` if the network address string represents a private network address.
 */
export declare function isPrivate(networkAddress: string): boolean;
