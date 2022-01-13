const express = require("express");
const router = express.Router();

const fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  const imagesPath = process.cwd() + "/public/images";
  const images = fs.readdirSync(imagesPath);
  res.render("index", { title: "Home", images, css: ["home"] });
});

module.exports = router;
