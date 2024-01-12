const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const authRouter = require("./routes/auth");
const productRouter = require("./routes/products");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/users", authRouter);
app.use("/products", productRouter)

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error " } = err;
  res.status(status).json({ message: message });
});

module.exports = app;
