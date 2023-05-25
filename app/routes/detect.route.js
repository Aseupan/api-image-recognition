const express = require("express");
const controller = require("../controller/detect.controller");
const upload = require("../middleware/upload");

module.exports = (app) => {
  const router = express.Router();

  router.post("/", upload.array("photo", 5), controller.detectImage);

  app.use("/api/detect", router);
};
