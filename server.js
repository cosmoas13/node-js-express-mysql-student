const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//call routes
var routes = require("./app/routes/router");
routes(app);

app.listen(8080, () => {
	console.log(`Server started on port`);
});
