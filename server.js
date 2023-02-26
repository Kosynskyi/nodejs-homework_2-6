const app = require("./app");

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Volodymyr:PzzUcH4VhuBYdvex@cluster0.392t2gl.mongodb.net/db_contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect success"))
  .catch((error) => console.log(error.message));

app.listen(3001, () => {
  console.log("Server running. Use our API on port: 3001");
});
