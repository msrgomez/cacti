/**
 * @packageDocumentation
 * @module cactus-example-cbdc-bridging-backend
 * @preferred
 * This file holds steps for attack implementation
 * We are "black-box" testing the system, so we are not testing the system's internal state
 * To simulate an attack, we deviate funds from the transaction to a third user
 * 
 * We are describing a scenario where an attacker is able to deviate funds from a transaction
 * "alice" is trying to transfer funds to "bob" but the attacker is able to deviate the funds to "eve"
 */

import { Given, Then, When } from "cucumber";
import { expect } from "chai";
import axios from "axios";
import CryptoMaterial from "../../../../crypto-material/crypto-material.json";
import { getFabricId, getUserFromPseudonim } from "./common";
import { getFabricBalance } from "../fabric-helper";

const FABRIC_CHANNEL_NAME = "mychannel";
const FABRIC_CONTRACT_CBDC_ERC20_NAME = "cbdc";

Given(
  "{string} has {int} CBDC available in the source chain",
  async function (user: string, amount: number) {
    await axios.post(
      "http://localhost:4000/api/v1/plugins/@hyperledger/cactus-plugin-ledger-connector-fabric/run-transaction",
      {
        contractName: FABRIC_CONTRACT_CBDC_ERC20_NAME,
        channelName: FABRIC_CHANNEL_NAME,
        params: [amount.toString()],
        methodName: "Mint",
        invocationType: "FabricContractInvocationType.SEND",
        signingCredential: {
          keychainId: CryptoMaterial.keychains.keychain1.id,
          keychainRef: getUserFromPseudonim(user),
        },
      },
    );

    expect(await getFabricBalance(getFabricId(user))).to.equal(amount);
  },
);

// user tries to transfer funds to another user, but the attacker is able to deviate the funds to a third user
