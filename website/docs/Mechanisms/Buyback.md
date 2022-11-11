---
sidebar_position: 4
---

# Buyback

![](../images/mechanism/buyback.png)

`Buyback` can be called when FOX maintains above $1 for an hour. It means FOX's trust is valued higher than the current trust level. After the trust level is adjusted upward, users can lower LTV, withdraw collaterals, or make coupons by repaying debts through spending FOXS.

## Repaying Debt

- Anyone

```
                    MAX LTV: L%
+------------+          LTV: x--%    +------------+
|    BNB     |           ^           |    FOX     |
+------------+           |           +------------+
   Collateral            |              Stablecoin
                         |
+------------+           |
|    FOXS    |-----------+
+------------+   
       Shares
```

## Withdraw Collateral

- Only CDP Owner

```
                    MAX LTV: L%
+------------+          LTV: x%      +------------+
|    BNB     |<----------+           |    FOX     |
+------------+           |           +------------+
   Collateral            |              Stablecoin
                         |
+------------+           |
|    FOXS    |-----------+
+------------+   
       Shares
```