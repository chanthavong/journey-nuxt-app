const configs = {
  development: {
    API_URL: 'https://api.myapi.com',
    BASE_URL: 'https://myapi.com',
    mode: 'development'
  },
  staging: {
    API_URL: 'https://staging.myapi.com',
    BASE_URL: 'https://staging.myapi.com',
    mode: 'development'
  },
  production: {
    API_URL: 'https://production.myapi.com',
    BASE_URL: 'https://production.myapi.com',
    mode: 'production'
  }
}

const nodeEnv = process.env.NODE_ENV
module.exports = configs[nodeEnv]

