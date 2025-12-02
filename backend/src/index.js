const express = require("express");
const cors = require("cors");
const {
  getProjectsController,
  getProjectIdController,
  postProjectController,
} = require("./controllers");
const app = express();
const port = 3000;

require("dotenv").config();

console.log("getProjectsController:", getProjectsController);

app.use(express.json({ limit: "25mb" }));

app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/projects", getProjectsController);

app.get("/project/:id", getProjectIdController);

app.post("/project", postProjectController);
