const { private_key } = process.env;

const generateClientSecret = (client_email) => {
  return JSON.parse(
    JSON.stringify({
      credentials: {
        client_email,
        private_key,
      },
    }),
  );
};

module.exports = generateClientSecret;
