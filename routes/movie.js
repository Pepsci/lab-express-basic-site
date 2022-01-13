const express = require("express");
const router = express.Router();

// const mangaModel = require("../models/mangaModel");

router.get("/", (req, res, next) => {
  res.render("movie", {
    css: ["movie"],
    imgM1: "/images/movie/imgM1.png",
    imgM2: "/images/movie/imgM2.png",
    imgM3: "/images/movie/imgM3.png",
    imgM4: "/images/movie/imgM4.png",
    imgM5: "/images/movie/imgM5.png",
    imgM6: "/images/movie/imgM6.png",
  });
});

module.exports = router;
