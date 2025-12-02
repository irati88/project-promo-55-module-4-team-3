const mysql = require("../database/mysql-pool");

const getProjectIdController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).send("id inválido");
    }

    const query = `
      SELECT 
        projects.id_project,
        projects.name,
        projects.slogan,
        projects.technologies,
        projects.photo,
        projects.repo,
        projects.demo,
        projects.description,
        autors.autor,
        autors.job,
        autors.image
      FROM projects
      JOIN autors ON autors.id_autor = projects.fk_project WHERE id_project = ?`;

    const connection = await mysql.getConnection();
    const data = await connection.query(query, [id]);
    connection.end();

    if (data.length === 0) {
      return res.status(404).json({ error: "Proyecto no encontrado" });
    }

    res.json(data[0][0]);
  } catch (error) {
    res.status(400).send("Algo ha ido mal");
  }
};

module.exports = {
  getProjectIdController,
};
