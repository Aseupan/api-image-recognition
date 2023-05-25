const multer = require("multer");
const { filestorage, fileFilter } = require("../../config/multerConfig");

const upload = multer({
  storage: filestorage,
  fileFilter: fileFilter,
});

module.exports = upload;
