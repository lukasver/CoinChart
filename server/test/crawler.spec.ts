import 'mocha';
import { expect } from 'chai';
import db from '../db/models';
import Crawler from '../crawler/crawler';
import tokenList from '../crawler/tokens';

describe('Crawler', async () => {
  describe('RUN', () => {
    before(async () => await db.Token.bulkCreate(tokenList));
    it('Should crawl the API and get prices for each required coin', async () => {
      await Crawler.getTokensData();
      const prices = await db.Price.findAll();
      expect(prices).to.have.lengthOf(4);
    });
    it('Should crawl for historical token data for composing charts', async () => {
      const { prices, market_caps, total_volumes } =
        await Crawler.getMarketData({
          id: 'ethereum',
          vs_currency: 'usd',
        });
      expect(prices).to.be.an('array').to.not.be.empty;
      expect(market_caps).to.be.an('array').to.not.be.empty;
      expect(total_volumes).to.be.an('array').to.not.be.empty;
    });
  });
});
