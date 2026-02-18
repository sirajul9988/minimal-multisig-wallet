# Secure Multi-Sig Wallet

This repository contains a robust and gas-optimized Multi-Signature (Multi-Sig) smart contract. It allows multiple owners to manage funds collectively, requiring a predefined number of approvals (M-of-N) before any transaction can be executed.

## Core Mechanics
- **Multi-Owner**: Support for multiple authorized addresses.
- **Threshold Security**: Transactions remain pending until the required number of signatures is met.
- **Transaction Transparency**: All proposed, confirmed, and executed transactions are verifiable on-chain.

## How to Use
1. **Initialize**: Deploy the contract with an array of owner addresses and the required confirmation count.
2. **Submit**: Any owner can submit a transaction proposal.
3. **Confirm**: Other owners call the `confirmTransaction` function.
4. **Execute**: Once the threshold is reached, any owner can trigger `executeTransaction`.

## License
MIT
