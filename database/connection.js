const { default: mongoose } = require("mongoose");

require("dotenv").config();
const connectionString = process.env.DATABASE_BASE_URL;
mongoose.connect(connectionString);

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

module.exports = database;
