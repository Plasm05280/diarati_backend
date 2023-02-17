let multer = require("multer");
let path = require("path");
let random = require("randomatic");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/");
  },

  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    let name = random("0", 6);
    cb(null, name + ext);
  },

  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".csv") {
      return cb(res.end("Only csv are allowed"), false);
    }
    cb(null, true);
  },
});

let upload = function (req, res, next) {
  let upload = multer({ storage: storage }).single("file");
  upload(req, res, function (err) {
    if (err) {
      return res.end("Error uploading file.");
    }
    next();
  });
};

module.exports = upload;
