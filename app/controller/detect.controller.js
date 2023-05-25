const generateClientSecret = require("../../config/clientSecret");
const jwtToken = require("../services/jwtToken");
const vision = require("@google-cloud/vision");
const fs = require("fs");

const detectImage = async (req, res) => {
  try {
    const client_secret = jwtToken(req);
    const secret = generateClientSecret(client_secret);

    const client = new vision.ImageAnnotatorClient(secret);

    const labels = await Promise.all(
      req.files?.map(async (e) => {
        const [{ labelAnnotations }] = await client.labelDetection(e.path);
        return {
          name: e.originalname,
          labels: labelAnnotations?.map((e) => e.description),
        };
      })
    );

    console.log(labels);

    req.files?.forEach(async (e) => {
      fs.unlinkSync(e.path);
    });

    res.send({ data: labels });
  } catch (err) {
    res.send({ message: "error", error: err });
  }
};

const controller = {
  detectImage,
};

module.exports = controller;
