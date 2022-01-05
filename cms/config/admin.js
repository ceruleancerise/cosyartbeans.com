module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a99a5f38aafe7e344ed0271c3c0e1a46'),
  },
});
