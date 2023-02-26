const app = require("./app");

const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const DB_HOST = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect success"))
  .catch((error) => console.log(error.message));

app.listen(3001, () => {
  console.log("Server running. Use our API on port: 3001");
});
