const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const {
  getProjectsController,
  getProjectIdController,
  postProjectController,
} = require("./controllers");

const app = express();
const port = 3000;

app.use(express.json({ limit: "25mb" }));
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/projects", getProjectsController);

app.get("/project/:id", getProjectIdController);

app.post("/project", postProjectController);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
