const mysql = require("../database/mysql-pool");

const postProjectController = async (req, res) => {
  try {
    const {
      autor,
      job,
      image,
      name,
      slogan,
      technologies,
      photo,
      repo,
      demo,
      description,
    } = req.body;

    if (!autor ||typeof autor !== "string"|| !job || typeof job !== "string"|| !name || typeof name !== "string" || !technologies || typeof technologies !== "string"|| !description|| typeof description !== "string") {
      return res.status(400).json({
        error:
          "Faltan campos obligatorios: Autora, Trabajo, Nombre del proyecto, Tecnologías o Descripción.",
      });
    }

    const queryAutor =
      "INSERT INTO autors (autor, job, image) VALUES (?, ?, ?)";
    const queryProject =
      "INSERT INTO projects (name, slogan, technologies, photo, repo, demo, description, fk_project) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    if (autor.length > 100) {
      return res
        .status(400)
        .json({ error: "El nombre de autor es demasiado largo" });
    }

    if (repo && !repo.startsWith("http")) {
      return res
        .status(400)
        .json({ error: "El campo repo debe ser una URL válida" });
    }
    const connection = await mysql.getConnection();
    const dataAutor = await connection.query(queryAutor, [autor, job, image]);

    await connection.query(queryProject, [
      name,
      slogan,
      technologies,
      photo,
      repo,
      demo,
      description,
      dataAutor[0].insertId,
    ]);

    connection.end();

    res.status(201).json({ message: "Proyecto creado" });
  } catch {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  postProjectController,
};
