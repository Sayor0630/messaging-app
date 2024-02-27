const isDev = process.env.NODE_ENV === "development";

module.exports = {
  isDev,
  cors: {
    origin: [
      "http://localhost:3000", // Assuming this is your React app's origin
      "http://localhost:8100",
      "http://localhost:8080", // Add your Capacitor app's origin here
      "http://127.0.0.1:8100",
      "http://localhost",
      "capacitor://localhost",
      "undfined",
      /domain\.com$/,
      "ionic://localhost",
      "capacitor://localhost:8100",
      "ionic://localhost:8100",
      "https://kotha-jet.vercel.app",
      // Add more origins if needed
    ],
    credentials: true,
    allowedHeaders: "*",
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  },
  db: {
    uri: process.env.MONGO_URI,
    name: "Kotha",
  },
};
