const mysql = require ("../database/mysql-pool");

const postProjectController = async (req, res) => {
    try {
        const { name, slogan, technologies, photo, repo, demo, description, fk_project } = req.body;

        const query =
            "INSERT INTO projects (name, slogan, technologies, photo, repo, demo, description, fk_project) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        const connection = await mysql.getConnection();
        await connection.query(query, [name, slogan, technologies, photo, repo, demo, description, fk_project]);
        connection.end();

        res.status(201).send("Proyecto creado");
    } catch(error){
        res.send("Algo ha ido mal");
        console.log("error", error);
    }
}

module.exports={
    postProjectController
}