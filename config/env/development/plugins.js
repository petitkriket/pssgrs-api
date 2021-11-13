module.exports = ({ env }) => ({
  email: {
    provider: 'mailtrap',
    providerOptions: {
      user: env('MAILTRAP_USER'),
      password: env('MAILTRAP_PASSWORD')
    },
    settings: {
      defaultFrom: env('MAILTRAP_DEFAULT_FROM'),
      defaultReplyTo: env('MAILTRAP_DEFAULT_REPLY_TO'),
    },
  },
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
    actionOptions: {
      upload: {
        folder: env('NODE_ENV'),
      },
      delete: {},
    },
  },
});