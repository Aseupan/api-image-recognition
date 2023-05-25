const redirectUrls = require("./redirectUrls");
const {
  client_id,
  project_id,
  auth_uri,
  token_uri,
  auth_provider_x509_cert_url,
} = process.env;

const generateClientSecret = (client_secret) => ({
  web: {
    client_id,
    project_id,
    auth_uri,
    token_uri,
    auth_provider_x509_cert_url,
    client_secret,
    redirect_uris: redirectUrls,
  },
});

module.exports = generateClientSecret;
