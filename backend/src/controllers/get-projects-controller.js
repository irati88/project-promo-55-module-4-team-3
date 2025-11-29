const mysql = require ("../database/mysql-pool");

const getProjectsController = async (req, res) => {
    try {
        const query = "SELECT * FROM projects";

        const connection = await mysql.getConnection();
        const data = await connection.query(query);
        connection.end();
        res.json(data[0]);
    } catch(error) {
        res.send("Algo ha ido mal"); 
        console.log("errorsito", error);
    }
};

module.exports={
    getProjectsController
}