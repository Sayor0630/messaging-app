const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  isDev,
  cors: {
    origin: [
      'http://localhost:3000', // Assuming this is your React app's origin
      'http://localhost:8100', // Add your Capacitor app's origin here
      // Add more origins if needed
    ],
  },
  db: {
    uri: process.env.MONGO_URI,
    name: 'Kotha',
  },
};
