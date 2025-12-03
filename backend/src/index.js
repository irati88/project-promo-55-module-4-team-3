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
const PORT = process.env.PORT || 3000;  

app.use(express.json({ limit: "25mb" }));
app.use(cors());

app.get("/api/projects", getProjectsController);

app.get("/api/project/:id", getProjectIdController);

app.post("/api/project", postProjectController);

app.use("/project-promo-55-module-4-team-3", express.static(path.join(__dirname, "..", "public")));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
