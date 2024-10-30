import { readFileSync } from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: {
    key: readFileSync(process.env.SERVER_KEY),
    cert: readFileSync(process.env.SERVER_CERT),
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT - 0,
  },
};

export default config;
