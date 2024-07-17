const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const dotenvPath = path.resolve(__dirname, '.env.development');
if (fs.existsSync(dotenvPath)) {
  const envConfig = dotenv.parse(fs.readFileSync(dotenvPath));
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
}
