module.exports = {
  apps: [
    {
      name: 'backend',
      script: 'dist/main.js',
      watch: false,          // set to true if you want auto-reload on file changes
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        BASE_URL: 'http://localhost:3000',
        API_KEY: 'mysecret123', // your API key from .env
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
        BASE_URL: 'http://localhost:3000',
        API_KEY: 'mysecret123',
      },
    },
  ],
};
