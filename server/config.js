const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  isDev,
  cors: {
    origin: [/^http:\/\/localhost/],
  },
  db: {
    uri: process.env.MONGO_URI,
    name: 'Kotha',
  },
};
