module.exports = {
	success,
	fail,
	repair,
	get,
};

function success(item) {
	if (item.enhancement < 20) {
		item.enhancement = item.enhancement + 1;
	} else {
		console.log("Item cannot be enhanced any further!");
	}
	return { ...item };
} // WORKING

function repair(item) {
	if (item) {
		console.log("Item Repair successful!");
		item.durability = 100;
	} else {
		console.log("Item Repair failed! Already fully repaired!");
		item.durability = item.durability;
	}
	return { ...item };
} // WORKING

function fail(item) {
	// enhancement is below 15
	if (item.enhancement < 15) {
		console.log("FAILURE - enhancement below 15!");
		if (item.durability > 5) {
			item.durability = item.durability - 5;
		} else {
			item.durability = item.durability - item.durability;
		}
	}
	// enhancement is 15
	else if (item.enhancement === 15) {
		console.log("FAILURE - enhancement is 15 or 16");
		if (item.durability > 10) {
			item.durability = item.durability - 10;
		} else {
			item.durability = item.durability - item.durability;
		}
	}
	// enhancement is 16
	else if (item.enhancement === 16) {
		console.log("FAILURE - enhancement is 15 or 16");
		if (item.durability > 10) {
			item.durability = item.durability - 10;
		} else {
			item.durability = item.durability - item.durability;
		}
	}
	// enhancement is over 16
	else if (item.enhancement > 16) {
		console.log("FAILURE - enhancement is over 16!");
		item.enhancement = item.enhancement - 1;
		if (item.durability > 10) {
			item.durability = item.durability - 10;
			console.log("durability was above 10");
		} else {
			item.durability = item.durability - item.durability;
			console.log("durability was below 10");
		}
	}

	return { ...item };
}

function get(item) {
	return { ...item };
}
