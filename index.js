const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

const authMiddleware = require("./src/middlewares/authMiddleware");

const app = express();
const port = process.env.PORT || 3333;

/*
 * import your custome modules here
 */

app.use(bodyParser.json());
app.use(express.json()); // enable parsing JSON bodies for POST requests
app.use(cors()); // enable CORS for all requests
app.use(morgan("dev")); // enable HTTP request logging in dev mode

/*
 * secure routes by adding a middleware function
 */
app.use("/api/secure-route", authMiddleware.authenticate, (req, res) => {
  res.json({ message: "Secure data" });
});

/*
 * define your routes here
 */
app.use("/api/test", require("./src/routes/test.routes"));

/*
 * Error handling middleware
 */
app.use((err, req, res, next) => {
  // Handle and respond to errors
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

/*
 * start the server
 */

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views" + "/server.html");
});
app.use(express.static(path.join(__dirname, "public")));
console.log(__dirname);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
