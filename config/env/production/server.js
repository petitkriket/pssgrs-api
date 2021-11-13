module.exports = ({ env }) => ({
  url: env('APP_HEROKU_URL'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
