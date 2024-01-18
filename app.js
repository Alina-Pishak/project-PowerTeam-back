const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const authRouter = require("./routes/auth");
const exercisesRouter = require("./routes/exercises");
const productRouter = require("./routes/products");
const statisticRoute = require("./routes/statistic");
const diaryRouter = require("./routes/diary");

const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/users", authRouter);
app.use("/exercises", exercisesRouter);
app.use("/products", productRouter);
app.use("/diary", diaryRouter);
app.use("/statistic", statisticRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error " } = err;
  res.status(status).json({ message: message });
});

module.exports = app;
