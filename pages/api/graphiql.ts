import { NextApiRequest, NextApiResponse } from 'next';

import postgraphile from '../../postgraphile/postgraphile';
import runMiddleware from '../../postgraphile/runMiddleware';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  await runMiddleware(req, res, postgraphile);
  res.end();
};
