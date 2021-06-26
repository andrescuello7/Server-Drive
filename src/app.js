const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const ejs = require("ejs");

//Routes
const Index = require("./routes/route-index");

//Utilization
const app = express();

//Storage Multer
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

//Settings
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Multer Middlwares
app.use(
  multer({
    storage,
    dest: path.join(__dirname, "public/uploads"),
  }).single("image")
);

//Routes Funcion
app.use("/", Index);

//Server
app.listen(app.get("port"), () =>
  console.log("server in funcionament in port", app.get("port"))
);
