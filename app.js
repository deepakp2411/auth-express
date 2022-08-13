import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./db/connectdb.js";
const app = express();
const port = process.env.PORT;
import web from "./routes/web.js";

const DATABASE_URL = process.env.DATABASE_URL;

// calling database
connectDB(DATABASE_URL);

// set ejs
app.set("view engine", "ejs");

// load routes
app.use("/", web);

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
