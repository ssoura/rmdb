const express = require("express");
require("express-async-errors");
const morgan = require("morgan");
const { errorHandler } = require("./middlewares/error");
const cors = require("cors");

require("dotenv").config();
require("./config/db");
const userRouter = require("./routes/user");
const actorRouter = require("./routes/actor");
const movieRouter = require("./routes/movie");
const reviewRouter = require("./routes/review");
const { handleNotFound } = require("./utils/helper");

const app = express();
app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/user", userRouter);
app.use("/api/actor", actorRouter);
app.use("/api/movie", movieRouter);
app.use("/api/review", reviewRouter);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/*", handleNotFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
