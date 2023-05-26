const generateClientSecret = require('../../config/clientSecret');
const jwtToken = require('../services/jwtToken');
const vision = require('@google-cloud/vision');
const fs = require('fs');

const detectImage = async (req, res) => {
  try {
    const client_email = jwtToken(req);
    const secret = generateClientSecret(client_email);

    const client = new vision.ImageAnnotatorClient(secret);

    const labels = await Promise.all(
      req.files?.map(async (e) => {
        const [{ labelAnnotations }] = await client.labelDetection(e.path);
        return {
          name: e.originalname,
          labels: labelAnnotations?.reduce((names, entry) => {
            console.log(entry);
            if (entry.score > 0.9) {
              names.push(entry.description);
            }
            return names;
          }, []),
        };
      }),
    );

    req.files?.forEach(async (e) => {
      fs.unlinkSync(e.path);
    });

    res.send({ data: labels });
  } catch (err) {
    res.send({ message: 'error', error: err });
  }
};

const controller = {
  detectImage,
};

module.exports = controller;
