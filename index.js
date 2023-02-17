let express = require("express");
let app = express();
let controller = require("./controller");

let multer = require("./multer");

////////////////////////////////////////////////
//// SETUP CORS AND HEADERS BEFORE ROUTES //////

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/download", express.static("assets"));

app.post("/upload", multer, controller);

app.listen(3000, () => console.log("running"));
