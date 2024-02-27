import { io } from 'socket.io-client';

const isDev = process.env.NODE_ENV === 'development';

const socket = io(
  isDev
    ? 'https://discord-file-uploader.onrender.com'
    : 'https://discord-file-uploader.onrender.com'
);
export default socket;
