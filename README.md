# is-private-network-address

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/is-private-network-address)](https://www.npmjs.com/package/@cityssm/is-private-network-address)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/cityssm/is-private-network-address)](https://codeclimate.com/github/cityssm/is-private-network-address)
[![DeepSource](https://app.deepsource.com/gh/cityssm/is-private-network-address.svg/?label=active+issues&show_trend=true&token=Ig0hw1im4uCKenMzR6Serqdm)](https://app.deepsource.com/gh/cityssm/is-private-network-address/)

Determines whether or not a network address is a private or internal.

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
```
