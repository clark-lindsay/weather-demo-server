import express from "express";
import fs from "fs";

const app = express();

app.get("/", (_, res) => {
  res.send(
    `Hello, World!
    If you are looking for info on the routes provided by this server, please go to the files in the local project folder at ${__dirname}`
  );
});

app.get("/weather/location/:name", (req, res) => {
  fs.readFile(
    `${__dirname}/data/locations.json`,
    "utf8",
    (error, data: string) => {
      if (!error) {
        res.send(JSON.parse(data)[req.params.name]);
      }
      console.error(
        `There was an error processing your request. Did you spell the location correctly?\n
      Error: ${error}`
      );
    }
  );
});

app.listen(3000, () => {
  console.log("Server listening at http://localhost:3000");
});
