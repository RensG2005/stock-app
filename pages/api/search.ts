import { getSession } from 'next-auth/react';
import alpha from '../../lib/alphavantage';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const session = getSession({ req });
      if (!session) return res.status(500).json({ error: 'Not signed in' });

      if (!req.body.search || typeof req.body.search !== 'string') {
        return res
          .status(500)
          .json({ error: 'Please provide an ticker symbol' });
      }

      const data = await alpha.data.search(req.body.search, 'full');

      if (!data) {
        return res.status(500).json({ error: 'No data found' });
      }
      return res.json({ data });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        error:
          err.split('{')[0]
          || 'Please provide a valid Ticker symbol of an existing stock',
      });
    }
  } else {
    return res.status(500).json({ error: 'Only post requests' });
  }
};

export default handler;
