import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url"; 

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandName = "";

app.use(express.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  bandName = req.body["street"] +" "+req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res)=>{
    res.send(
      "<h2>Your band name is: </h2>" +
      "<h3>" + bandName + "</h3>"
    );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
