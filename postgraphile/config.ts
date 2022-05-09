export const config = {
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_DATABASE: process.env.DB_DATABASE || 'reddit',
  DB_USER: process.env.DB_USER || 'rens',
  DB_PASSWORD: process.env.DB_PASSWORD || 'Rens2005',
  DB_PORT: parseInt(process.env.DB_PORT, 10) || 5432,
  DB_SCHEMA: 'public',
};
