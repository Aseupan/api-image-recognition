const key = require('../key.json');

const generateClientSecret = (client_email) => {
  return JSON.parse(
    JSON.stringify({
      credentials: {
        client_email,
        private_key: key.private_key,
      },
    }),
  );
};

module.exports = generateClientSecret;
