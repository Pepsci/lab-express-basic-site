const express = require("express");
const router = express.Router();

const mangaModel = require("../models/mangaModel");

router.get("/", async (req, res, next) => {
  try {
    res.render("manga", {
      mangas: await mangaModel.find(),
      css: ["manga"],
    });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res, next) => {
  mangaModel
    .findById(req.params.id)
    .then((manga) => {
      res.render("mangas/oneManga.hbs", {
        manga: manga,
        css: ["oneManga"],
      });
    })
    .catch(next);
});

module.exports = router;
