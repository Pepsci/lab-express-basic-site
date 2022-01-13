const { Schema, model } = require("mongoose");

const mangaSchema = Schema({
  name: String,
  volume: Number,
  cover: String,
  resume: String,
});

const mangaModel = model("mangas", mangaSchema);

module.exports = mangaModel;
