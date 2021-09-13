export interface IMarketOptions {
  id: Tokens;
  vs_currency?: 'usd' | 'gbp' | 'eur';
  days?: 1 | 14 | 30 | 'max';
  interval?: 'daily';
}

type Tokens = 'ethereum' | 'bitcoin' | 'cardano' | 'tether';
