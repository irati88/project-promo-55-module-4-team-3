const mysql = require ("../database/mysql-pool");

const getProjectIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const query = "SELECT * FROM projects WHERE id_project = ?";

        const connection = await mysql.getConnection();
        const data = await connection.query(query, [id]);
        connection.end();

        res.json(data[0]);
    } catch(error) {
        res.send("Algo ha ido mal");
        console.log("errorsito", error);
    }
}

module.exports={
    getProjectIdController
}