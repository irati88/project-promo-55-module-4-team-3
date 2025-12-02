/*  const mysql = require ("../database/mysql-pool");

const getProjectsController = async (req, res) => {
    try {
        const query = "SELECT * FROM projects";

        const connection = await mysql.getConnection();
        const data = await connection.query(query);
        connection.end();

        if (data.length === 0) {
      return res.status(404).json({ error: "No se ha encontrado ningún proyecto" });
    }

        res.json(data[0]);
    } catch {
        res.send("Algo ha ido mal"); 
        
    }
};

module.exports={
    getProjectsController
}  */

const mysql = require("../database/mysql-pool");

const getProjectsController = async (req, res) => {
  try {
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
      JOIN autors ON autors.id_autor = projects.fk_project`;

    const connection = await mysql.getConnection();
    const data = await connection.query(query);
    connection.end();

    res.json(data[0]);
  } catch (error) {
    res.send("Algo ha ido mal");
  }
};

module.exports = {
  getProjectsController,
};

