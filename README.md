# Digital Bazaar

**Every Shop Has a Negotiator.**

An India-first virtual shopping marketplace where buyers explore category-specific shops and bargain with personality-driven shopkeepers.

## V1 progress

- [x] Phase 1 starter: responsive market entrance and eight category cards
- [ ] Phase 1 completion: individual category shop browsing and navigation
- [ ] Phase 2: seller shop creation, products and inventory
- [ ] Phase 3: protected minimum price engine and category opening markups
- [ ] Phase 4: rule-based bargaining and category personalities
- [ ] Phase 5: 1,000 simulated negotiations and price-floor safety tests
- [ ] Phase 6: responsive QA and GitHub Pages launch

## Run locally

Open `index.html` in a modern browser. No build step or package installation is required.

## V1 architecture target

- HTML, CSS and vanilla JavaScript
- GitHub Pages static hosting
- IndexedDB for browser-local prototype data
- JSON export/import for local backups
- No paid AI API in V1; bargaining starts with deterministic rule-based logic

## Prototype limitation

The first V1 is a **local browser prototype**, not a shared multi-user marketplace. IndexedDB data belongs to the browser/device where it was created. Shared shops, seller accounts, live synchronisation, real AI calls, payments, orders and delivery need a later backend, authentication, security and compliance work.

## Protected-price invariant

AI may suggest opening prices and counter-offers, but deterministic JavaScript validation must be the final authority. **No accepted deal may be below the seller's protected minimum.** Seller cost, expenses, fees and minimum-profit inputs must remain private.

When transaction fees are a percentage of sale price:

`minimum = ceil((cost + expenses + desired_min_profit) / (1 - fee_rate))`

Account for all relevant expenses, taxes, returns and deductions before enabling real transactions.

## Categories

Fashion · Electronics · Shoes · Beauty · Furniture · Grocery · Jewellery · Home Decor
