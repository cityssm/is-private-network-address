# is-private-network-address

Determines whether traffic is from a private or internal IP address.

Supports all [Reserved IP Addresses](https://en.wikipedia.org/wiki/Reserved_IP_addresses)
used for private networks.


## Installation

```bash
npm install @cityssm/is-private-network-address
```

## Usage

```javascript
import { isLocal, isPrivate } from "@cityssm/is-private-network-address";

/* Test Local IPs */

console.log(isLocal("127.0.0.1"));
// => true

console.log(isLocal("::1"));
// => true

console.log(isLocal("12.34.56.78"));
// => false

/* Test Private IPs */

console.log(isPrivate("10.0.100.100"));
// => true

console.log(isPrivate("192.168.2.1"));
// => true

/* Works with Express Requests too! */

console.log(isPrivate(request));
// => true or false
```
