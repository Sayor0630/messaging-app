const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  isDev,
  cors: {
    origin: ['*'], // Allow requests from all origins
  },
  db: {
    uri: process.env.MONGO_URI,
    name: 'Kotha',
  },
};
