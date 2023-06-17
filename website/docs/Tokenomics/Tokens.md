---
sidebar_position: 1
---

# Tokens

There are many tokens in the FOX ecosystem; `ETH`, `FOX`, `FOXS`, `veFOXS`, and `SIN`.

---

## ETH (WETH)

ETH is the native coin of Ethereum. Or, it means the native coin at some EVM-based/compatible blockchain such as Filecoin (FIL). ETH is internally converted into WETH (wrapped ETH) as ERC20 for easy use in smart contracts. The conversion ratio between WETH and ETH is 1:1.

In the near future, staked assets will be used to earn staking rewards simultaneously.

---

## FOX

![](../images/tokens/FOX.png)

FOX is the over-collateralized stablecoin backed by `ETH`. Through `Fox Farm`, users can mint FOX by giving `SIN` and `FOXS`.

---

## SIN

![](../images/tokens/SIN.png)

Stable INtermidiate-coin (SIN) is the debt in a ETH-backed Collateralized Debt Position (CDP), similar to [DAI](https://makerdao.com/en/whitepaper). Although SIN is an independent ERC20 token, most users do not need to use SIN directly, except for the case of `Coupon`.

---

## FOXS

![](../images/tokens/FOXS.png)

FOX Share (FOXS) is the utility token in FOX Finance. You can use FOXS in various ways:
- Deposit `ETH` and Burn FOXS. In other words, burn FOXS with `SIN` to mint `FOX`.
- Earn FOXS (and `ETH`) by redeeming `FOX`.
- Earn FOXS with a bonus by recollateralizing.
- Use FOXS to repay `SIN`. Or make a `Coupon` to repay debt in the future.
- You can stake FOXS to earn rewards and more FOXS per each future block.
- Or you can lock FOXS in some periods to get `veFOXS` for governance.

---

## veFOXS

FOX Finance is a decentralized service. So, anyone can be a fox farmer who uses and owns `FOX`. Plus, a decentralized governance system among farmers is needed.

veFOXS is used for governance. If you lock `FOXS` in more periods, you can get more veFOXS, that is, more suffrage.
