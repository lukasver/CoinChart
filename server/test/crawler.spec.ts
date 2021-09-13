import path from 'path';
import 'mocha';
import { expect, assert } from 'chai';
import request from 'supertest';
import Server from '..';
import db from '../db/models';
import getTokenPrices from '../crawler/crawler';
import tokenList from '../crawler/tokens';

describe('Crawler', async () => {
  beforeEach(async function () {
    // await db.Price.destroy();
  });
  describe('RUN', () => {
    it('Should crawl the API and get prices for each required coin', async () => {
      await db.Token.bulkCreate(tokenList);
      await getTokenPrices();
      const prices = await db.Price.findAll();
      console.log(prices[0].marketData);
      expect(prices).to.have.lengthOf(4);
    });
  });
});
