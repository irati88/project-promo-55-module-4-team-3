const mysql = require("../database/mysql-pool");

const getProjectIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const query = "SELECT * FROM projects WHERE id_project = ?";

    const connection = await mysql.getConnection();
    const data = await connection.query(query, [id]);
    connection.end();

    if (data.length === 0) {
      return res.status(404).json({ error: "Proyecto no encontrado" });
    }

    res.json(data[0]);
  } catch (error) {
    res.status(400).send("Algo ha ido mal");
  }
};

module.exports = {
  getProjectIdController,
};
