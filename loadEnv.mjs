import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

const __dirname = path.resolve();

const dotenvPath = path.resolve(__dirname, '.env.development');
if (fs.existsSync(dotenvPath)) {
  const envConfig = dotenv.parse(fs.readFileSync(dotenvPath));
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
}

export default process.env;
