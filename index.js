const express = require("express");
const dotenv = require("dotenv");

const db = require("./database/connection");
const app = express();
app.use(express.json());
const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Listening on port : ${port}`));


