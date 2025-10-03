module.exports = {
  apps: [
    {
      name: 'backend',
      script: 'dist/main.js',
      env: {
        NODE_ENV: 'production',
        API_KEY: 'mysecret123'  // copy from your .env
      }
    }
  ]
};
