const jwtToken = (req) => {
  return req.headers.authorization
    ? req.headers.authorization.replace("Bearer ", "")
    : null;
};

module.exports = jwtToken;
