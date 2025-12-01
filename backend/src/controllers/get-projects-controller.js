const mysql = require ("../database/mysql-pool");

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
}