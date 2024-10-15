const env = process.env.NODE_ENV || 'development';

const Config = {
  development: {
    backendUrl: "http://localhost:8000",
  },
  production: {
    backendUrl: "https://your-production-backend-url.com",
  },
}[env];

export default Config;
