const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  isDev,
  cors: {
    origin: ['http://localhost:3001'],
  },
  db: {
    uri: process.env.MONGO_URI,
    name: 'Kotha',
  },
};
