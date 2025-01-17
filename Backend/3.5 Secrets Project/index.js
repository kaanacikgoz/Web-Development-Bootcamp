//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url"; 

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let sendFile = "";

app.use(express.urlencoded({ extended: true }));

function isTrue(req, res, next) {
    console.log(req);
    if (req.body["password"]==="ILoveProgramming") {
        sendFile = __dirname+"/public/secret.html";
    } else {
        sendFile = __dirname+"/public/index.html";
    }
    next();
}

app.use(isTrue);

app.get("/check", (req, res) => {
    res.sendFile(sendFile);
});

app.post("/check", (req, res) => {
    res.sendFile(sendFile);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });