var mysql = require("mysql2");

//create database connection
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "dbrestapi",
});

db.connect((err) => {
	if (err) throw err;
	console.log("Mysql has been connect");
});

module.exports = db;
