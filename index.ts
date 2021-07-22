// Local IPs
const localhost = "localhost";
const localhost_v4_127 = "127.0.0.1";
const localhost_v6 = "::1";
const localhost_node = "::ffff:127.0.0.1";


// Private Network Ranges
const range_v4_10 = /^(::ffff:)?10(\.\d{1,3}){3}$/;
const range_v4_172 = /^(::ffff:)?172\.(1[6-9]|2\d|3[01])(\.\d{1,3}){2}$/;
const range_v4_192 = /^(::ffff:)?192\.168(\.\d{1,3}){2}$/;
const range_v6_fc = /^f[cd][\da-f]{0,2}(:([\da-f]){0,4}){0,7}$/;


export const isLocal = (networkAddress: string): boolean => {

  switch (networkAddress.toLowerCase()) {
    case localhost:
    case localhost_v4_127:
    case localhost_v6:
    case localhost_node:
      return true;
  }

  return false;
};


export const isPrivate = (networkAddress: string): boolean => {

  const networkAddressLowerCase = networkAddress.toLowerCase();

  if (range_v4_10.test(networkAddressLowerCase) ||
    range_v4_172.test(networkAddressLowerCase) ||
    range_v4_192.test(networkAddressLowerCase) ||
    range_v6_fc.test(networkAddressLowerCase) ||
    isLocal(networkAddressLowerCase)) {

    return true;
  }

  return false;
};
