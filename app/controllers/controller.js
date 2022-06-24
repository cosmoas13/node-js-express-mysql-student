"use strict";

var response = require("../config/res");
var connection = require("../config/connection");

exports.index = function (req, res) {
	response.ok("REST API App has been running!", res);
};

// Retrieve all Students from the database.
exports.showAllStudent = function (req, res) {
	connection.query("SELECT * FROM students", function (error, rows, fields) {
		if (error) {
			console.log(error);
		} else {
			response.ok(rows, res);
		}
	});
};

// Find a single Student with an id
exports.findOneStudent = function (req, res) {
	let id = req.params.id;
	connection.query(
		"SELECT * FROM students WHERE id_student = ?",
		[id],
		function (error, rows, fields) {
			if (error) {
				console.log(error);
			} else {
				response.ok(rows, res);
			}
		}
	);
};

// Create and Save a new Student
exports.addStudent = function (req, res) {
	var npm = req.body.npm;
	var name = req.body.name;
	var study = req.body.study;

	connection.query(
		"INSERT INTO students (npm, name, study) VALUES(?,?,?)",
		[npm, name, study],
		function (error, rows, fields) {
			if (error) {
				console.log(error);
			} else {
				response.ok("Successfully added student data!", res);
			}
		}
	);
};

// Update a Student by the id in the request
exports.updateStudent = function (req, res) {
	var id = req.body.id_student;
	var npm = req.body.npm;
	var name = req.body.name;
	var study = req.body.study;

	connection.query(
		"UPDATE students SET npm=?, name=?, study=? WHERE id_student=?",
		[npm, name, study, id],
		function (error, rows, fields) {
			if (error) {
				console.log(error);
			} else {
				response.ok("Successfully updated student data", res);
			}
		}
	);
};

// Delete a Student with the specified id in the request
exports.deleteStudent = function (req, res) {
	var id = req.body.id_student;
	connection.query(
		"DELETE FROM students WHERE id_student=?",
		[id],
		function (error, rows, fields) {
			if (error) {
				console.log(error);
			} else {
				response.ok("Successfully deleted student data", res);
			}
		}
	);
};
// Delete all Students from the database.
