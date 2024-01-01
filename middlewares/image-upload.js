const multer = require("multer");
const uuid = require("uuid").v4;

const upload = multer({
  storage: multer.diskStorage({
    destination: "product-data/images",
    filename: function (req, file, cb) {
      cb(null, uuid() + "-" + file.originalname);
    },
  }),
});

const configuredMulterMiddleware = upload.fields([
    { name: "image", maxCount: 1 },
    { name: "categoryImage", maxCount: 1 },
  ]);

module.exports = configuredMulterMiddleware;

