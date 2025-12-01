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

    if (!autor || !job || !name || !technologies || !description) {
      return res.status(400).json({
        error:
          "Faltan campos obligatorios: Autora, Trabajo, Nombre del proyecto, Tecnologías o Descripción.",
      });
    }

    const queryAutor =
      "INSERT INTO autors (autor, job, image) VALUES (?, ?, ?)";
    const queryProject =
      "INSERT INTO projects (name, slogan, technologies, photo, repo, demo, description, fk_project) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

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

    res.status(201).send("Proyecto creado");
  } catch (error) {
    res.send("Algo ha ido mal");
    console.log("error", error);
  }
};

module.exports = {
  postProjectController,
};
