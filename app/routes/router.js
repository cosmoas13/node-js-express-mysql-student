"use strict";

module.exports = function (app) {
	var myJson = require("../controllers/controller");

	app.route("/").get(myJson.index);

	app.route("/show").get(myJson.showAllStudent);

	app.route("/show/:id").get(myJson.findOneStudent);

	app.route("/add").post(myJson.addStudent);

	app.route("/update").put(myJson.updateStudent);

	app.route("/delete").delete(myJson.deleteStudent);
};
