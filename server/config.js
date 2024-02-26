const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  isDev,
  cors: {
    origin: [
      'http://localhost:3000', // Assuming this is your React app's origin
      'http://localhost:8100',
      'http://localhost:8080', // Add your Capacitor app's origin here
      'http://127.0.0.1:8100',
      'http://localhost',
      'capacitor://localhost',
      'ionic://localhost',
      'capacitor://localhost:8100',
      'ionic://localhost:8100',
      // Add more origins if needed
    ],
  },
  db: {
    uri: process.env.MONGO_URI,
    name: 'Kotha',
  },
};
