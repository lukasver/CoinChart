import CoinGecko from 'coingecko-api';
import tokensList from './tokens';
import db from '../db/models';

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

const getTokensData = async () => {
  let { data } = await CoinGeckoClient.coins.all();
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
};
getTokensData();

export default getTokensData;
