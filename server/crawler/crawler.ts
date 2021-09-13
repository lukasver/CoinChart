import CoinGecko from 'coingecko-api';
import tokensList from './tokens';
import db from '../db/models';
import { IMarketOptions } from './interfaces';

class Crawler {
  public client;
  constructor() {
    this.client = new CoinGecko();
  }

  // Get the 4 tokens current general data;
  // Mapping is done sync to avoid several api calls;
  async getTokensData() {
    const { data } = await this.client.coins.all();
    const tokens = data.filter((token) =>
      tokensList.some((tokenB) => tokenB.id === token.id)
    );
    try {
      const [uno, dos, tres, cuatro] = await Promise.all(
        tokens.map(
          async (token) =>
            await db.Price.create({
              date: token?.last_updated,
              marketData: token?.market_data,
              tokenId: token?.id,
            })
        )
      );
    } catch (err) {}
    return tokens;
  }

  // Get historical data for charts
  async getMarketData(options: IMarketOptions) {
    const { id, ...params } = options;
    const { data } = await this.client.coins.fetchMarketChart(id, params);
    return data;
  }
}

export default new Crawler();
