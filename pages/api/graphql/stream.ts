import { NextApiRequest, NextApiResponse } from 'next';

import postgraphile from '../../../postgraphile/postgraphile';
import runMiddleware from '../../../postgraphile/runMiddleware';

// Endpoint needed for graphiql
export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  await runMiddleware(req, res, postgraphile);
  res.end();
};

export const config = {
  api: {
    bodyParser: false,
  },
};
