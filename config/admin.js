module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'NtmrV9HTrB8PoHH5kRJMcQ=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','DeiI+IUejWcorJpwMFOl9w=='),
  },
});
