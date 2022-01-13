require("./config/mongo");

const createError = require("http-errors");
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const mangaRouter = require("./routes/manga");
const mangasRouter = require("./routes/manga");
const movieRouter = require("./routes/movie");
const galeryRouter = require("./routes/galery");
const authorRouter = require("./routes/author");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/manga", mangaRouter);
app.use("/mangas", mangasRouter);
app.use("/movie", movieRouter);
app.use("/author", authorRouter);
app.use("/galery", galeryRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
