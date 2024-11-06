import assert from 'node:assert';
import { describe, it } from 'node:test';
import { isLocal, isPrivate, localNetworkAddresses } from '../index.js';
await describe('isLocal() with local addresses', async () => {
    for (const addr of localNetworkAddresses) {
        await it(`Returns true for "${addr}"`, () => {
            assert.strictEqual(isLocal(addr), true);
        });
    }
});
await describe('isLocal() with invalid addresses', async () => {
    const addresses = ['10.10.10.10', 'c800::1'];
    for (const addr of addresses) {
        await it(`Returns false for "${addr}"`, () => {
            assert.strictEqual(isLocal(addr), false);
        });
    }
});
await describe('isPrivate() with private addresses', async () => {
    const addresses = [
        '10.0.67.54',
        '172.23.45.45',
        '192.168.2.1',
        'fd05::45:',
        'FC66:4502:19:',
        '::ffff:192.168.50.120'
    ];
    for (const addr of addresses) {
        await it(`Returns true for ${addr}`, () => {
            assert.strictEqual(isPrivate(addr), true);
        });
    }
});
await describe('isPrivate() with local addresses', async () => {
    for (const addr of localNetworkAddresses) {
        await it(`Returns true for ${addr}`, () => {
            assert.strictEqual(isPrivate(addr), true);
        });
    }
});
await describe('isPrivate() with public addresses', async () => {
    const addresses = ['12.34.56.78', '172.33.100.43', '192.160.1.1'];
    for (const addr of addresses) {
        await it(`Returns false for ${addr}`, () => {
            assert.strictEqual(isPrivate(addr), false);
        });
    }
});
