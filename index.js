const express = require("express");
const app = express();
const port = 5000;
const db = require("./models/db"); //import the database connection
const blogsRouter = require("./router/blog");
const cookieParser = require("cookie-parser");




//middleware
app.use(express.json());
app.use(cookieParser());

//Use the blogs router
app.use("/api/v1", blogsRouter);

//start the server
app.listen(port, () => {
  console.log(`the listening port in ${port}`);
});
