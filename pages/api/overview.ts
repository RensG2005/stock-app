import { getSession } from 'next-auth/react';
import alpha from '../../lib/alphavantage';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const session = getSession({ req });
      if (!session) res.status(500).json({ error: 'Not signed in' });
      const data = await alpha.experimental('OVERVIEW', {
        symbol: req.query.search,
      });
      const data_daily = await alpha.data.daily(req.query.search, {
        outputsize: 'full',
      });
      if (!data) {
        throw new Error('No Data');
      }
      res.json({ data, data_daily });
    } catch (err) {
      throw new Error('No Data');
    }
  } else {
    throw new Error('Only GET requests are allowed');
  }
};

export default handler;
