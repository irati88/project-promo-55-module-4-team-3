const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

const getConnection = async () => {
  const connection = await pool.getConnection();
  console.log(`Conexión obtenida del pool (id=${connection.threadId})`);
  return connection;
};
module.exports = {
  pool,
  getConnection,
};
