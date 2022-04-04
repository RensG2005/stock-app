import { getSession } from 'next-auth/react';

const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const session = getSession({ req });
    if (!session) res.status(500).json({ error: 'Not signed in' });
    const news = await newsapi.v2.topHeadlines({
      language: 'en',
      country: 'us',
      category: 'business',
      pageSize: 100,
      page: req.query.page || 1,
    });
    res.status(200).json(news);
  } else {
    res.status(500).json({ error: 'this endpoint only accepts GET requests' });
  }
};

export default handler;
