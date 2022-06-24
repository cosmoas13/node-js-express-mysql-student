"use strict";

exports.ok = function (values, res) {
	var data = {
		status: 200,
		values: values,
	};

	res.json(data);
	res.end();
};

//response for nested course table
exports.oknested = function (values, res) {
	// do acumulation
	const result = values.reduce((acumulation, item) => {
		// define group key
		if (acumulation[item.name]) {
			// create variable group student name
			const group = acumulation[item.name];
			// check if array is course
			if (Array.isArray(group.course)) {
				// add value into group course
				group.course.push(item.course);
			} else {
				group.course = [group.course, item.course];
			}
		} else {
			acumulation[item.name] = item;
		}
		return acumulation;
	}, {});

	var data = {
		status: 200,
		values: result,
	};

	res.json(data);
	res.end();
};
