import CryptoMaterial from "../../../../crypto-material/crypto-material.json";
import { setDefaultTimeout } from "@cucumber/cucumber";
import assert from "assert";

setDefaultTimeout(10 * 1000);

export function getUserFromPseudonim(user: string): string {
  switch (user) {
    case "alice":
      return "userA";
    case "charlie":
      return "userB";
    case "bob":
      return "bridge";
    default:
      assert.fail("Invalid user provided");
  }
}

export function getFabricId(user: string): string {
  switch (getUserFromPseudonim(user)) {
    case "userA":
      return CryptoMaterial.accounts["userA"].fabricID;
    case "userB":
      return CryptoMaterial.accounts["userB"].fabricID;
    case "bridge":
      return CryptoMaterial.accounts["bridge"].fabricID;
    default:
      assert.fail("Invalid user provided");
  }
}

export function getEthAddress(user: string): string {
  switch (getUserFromPseudonim(user)) {
    case "userA":
      return CryptoMaterial.accounts["userA"].ethAddress;
    case "userB":
      return CryptoMaterial.accounts["userB"].ethAddress;
    case "bridge":
      return CryptoMaterial.accounts["bridge"].ethAddress;
    default:
      assert.fail("Invalid user provided");
  }
}

export function getPrvKey(user: string): string {
  switch (getUserFromPseudonim(user)) {
    case "userA":
      return CryptoMaterial.accounts["userA"].privateKey;
    case "userB":
      return CryptoMaterial.accounts["userB"].privateKey;
    case "bridge":
      return CryptoMaterial.accounts["bridge"].privateKey;
    default:
      assert.fail("Invalid user provided");
  }
}
