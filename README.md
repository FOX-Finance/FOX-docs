# FOX Finance

> Powered by [moralis](https://moralis.io), [BNB Smart Chain](https://www.bnbchain.org/en/smartChain), and [AXELAR](https://axelar.network).

---

```text
🪙DAI + ⚙️FRAX = 🦊FOX
```

**Fractional Over Collateralized Stablecoin (FOX)** is the first over-collateralized stablecoin that achieves strikingly capital efficiency. Like [DAI](https://makerdao.com/en/), FOX gets tokens (BNB) as collateral. On the other hand, FOX works like [FRAX](https://frax.finance), which partially relies on the seigniorage algorithmic method.

### 🧑‍🌾 Be the owner of FOX

[WebApp](https://fox-fi.web.app) | [Docs](https://github.com/FOX-Finance/FOX-docs) | [Twitter](https://twitter.com/FoxStablecoin)

---

# Tokens

There are many tokens in the FOX ecosystem;
[BNB](https://github.com/FOX-Finance/FOX-docs#bnb-wbnb),
[FOX](https://github.com/FOX-Finance/FOX-docs#fox),
[FOXS](https://github.com/FOX-Finance/FOX-docs#foxs),
[veFOXS](https://github.com/FOX-Finance/FOX-docs#vefoxs),
and [SIN](https://github.com/FOX-Finance/FOX-docs#sin).

### BNB (WBNB)

BNB is the native coin at BNB Smart Chain. BNB is internally converted into WBNB (wrapped BNB) as ERC20 for easy use in smart contracts. The conversion ratio between WBNB and BNB is 1:1.

In the near future, BNB will be converted into stBNB to earn staking rewards simultaneously.

### FOX

FOX is the over-collateralized stablecoin backed by [BNB](https://github.com/FOX-Finance/FOX-docs#bnb-wbnb). Through [Fox Farm](https://github.com/FOX-Finance/FOX-contract/blob/main/contracts/FoxFarm.sol), users can mint FOX by giving [SIN](https://github.com/FOX-Finance/FOX-docs#sin) and [FOXS](https://github.com/FOX-Finance/FOX-docs#foxs).

### SIN

Stable INtermidiate-coin (SIN) is the debt in a BNB-backed Collateralized Debt Position (CDP), similar to [DAI](https://makerdao.com/en/whitepaper). Although SIN is an independent ERC20 token, most users do not need to use SIN directly, except for the case of [Coupon](https://github.com/FOX-Finance/FOX-contract#coupon-nft).

### FOXS

FOX Share (FOXS) is the utility token in FOX Finance. You can use FOXS in various ways:
- Deposit [BNB](https://github.com/FOX-Finance/FOX-docs#bnb-wbnb) and Burn FOXS. In other words, burn FOXS with [SIN](https://github.com/FOX-Finance/FOX-docs#sin) to mint [FOX](https://github.com/FOX-Finance/FOX-docs#fox).
- Earn FOXS (and [BNB](https://github.com/FOX-Finance/FOX-docs#bnb-wbnb)) by redeeming [FOX](https://github.com/FOX-Finance/FOX-docs#fox).
- Earn FOXS with a bonus by recollateralizing.
- Use FOXS to repay [SIN](https://github.com/FOX-Finance/FOX-docs#sin). Or make a [coupon](https://github.com/FOX-Finance/FOX-contract#coupon-nft) to repay debt in the future.
- You can stake FOXS to earn rewards and more FOXS per each future block.
- Or you can lock FOXS in some periods to get [veFOXS](https://github.com/FOX-Finance/FOX-contract#veFOXS) for governance.

### veFOXS

FOX Finance is a decentralized service. So, anyone can be a fox farmer who uses and owns [FOX](https://github.com/FOX-Finance/FOX-docs#fox). Plus, a decentralized governance system among farmers is needed.

veFOXS is used for governance. If you lock [FOXS](https://github.com/FOX-Finance/FOX-docs#foxs) in more periods, you can get more veFOXS, that is, more suffrage.

---

# Mechanism

See [Fox-contract](https://github.com/FOX-Finance/FOX-contract#mechanism) for detailed mechanism.

<!--
# Roadmap

- [] Multi-collateral FOX
- [] Various types of collateral: LP (BNB-FOX, BNB-FOXS, and USDC-FOX, et al.), Liquid Staking (stBNB), and so on
- [] FOX Market (NFT Marketplace&Auction)
-->
