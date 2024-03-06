# This feature describes the scenario where an attacker Eve deviates funds in a transaction from Alice to Bob

Feature: Simulating an attacker deviating funds on a transaction

  Scenario: Attacker deviates funds from a transaction between Alice and Bob
    Given "alice" with 100 CBDC available in the source chain
    And "bob" with 50 CBDC available in the source chain
    
