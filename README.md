# is-private-network-address

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/is-private-network-address)](https://www.npmjs.com/package/@cityssm/is-private-network-address)
[![Codacy grade](https://img.shields.io/codacy/grade/3a2855450b3948bd82880b84a90a9c7e)](https://app.codacy.com/gh/cityssm/is-private-network-address/dashboard)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/cityssm/is-private-network-address)](https://codeclimate.com/github/cityssm/is-private-network-address)
[![Code Climate coverage](https://img.shields.io/codeclimate/coverage/cityssm/is-private-network-address)](https://codeclimate.com/github/cityssm/is-private-network-address)
[![AppVeyor](https://img.shields.io/appveyor/build/dangowans/is-private-network-address)](https://ci.appveyor.com/project/dangowans/is-private-network-address)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/cityssm/is-private-network-address)](https://app.snyk.io/org/cityssm/project/7566c7e3-b469-4dd6-820a-259c9d1789bf)

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
