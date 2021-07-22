import assert from "assert";
import { isLocal, isPrivate } from "../index.js";


const addresses_local = ["localhost", "127.0.0.1", "::1", "::ffff:127.0.0.1"];


describe("isLocal() with local addresses", () => {


  for (const addr of addresses_local) {

    it("Returns true for \"" + addr + "\"", () => {
      assert.strictEqual(isLocal(addr), true);
    });
  }
});


describe("isLocal() with invalid addresses", () => {

  const addresses = ["10.10.10.10", "c800::1"];

  for (const addr of addresses) {

    it("Returns false for \"" + addr + "\"", () => {
      assert.strictEqual(isLocal(addr), false);
    });
  }
});


describe("isPrivate() with private addresses", () => {

  const addresses = ["10.0.67.54",
    "172.23.45.45",
    "192.168.2.1",
    "fd05::45:",
    "FC66:4502:19:",
    "::ffff:192.168.50.120"];

  for (const addr of addresses) {

    it("Returns true for " + addr, () => {
      assert.strictEqual(isPrivate(addr), true);
    });
  }
});


describe("isPrivate() with local addresses", () => {

  for (const addr of addresses_local) {

    it("Returns true for " + addr, () => {
      assert.strictEqual(isPrivate(addr), true);
    });
  }
});


describe("isPrivate() with public addresses", () => {

  const addresses = ["12.34.56.78",
    "172.33.100.43",
    "192.160.1.1"];

  for (const addr of addresses) {

    it("Returns false for " + addr, () => {
      assert.strictEqual(isPrivate(addr), false);
    });
  }
});
