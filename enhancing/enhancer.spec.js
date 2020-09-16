const { success, repair, fail } = require("./enhancer.js");
const enhancer = require("./enhancer.js");
// test away!

let item = {
	name: "EpicLoot",
	durability: 50,
	enhancement: 13,
};

describe("enhancer", () => {
	describe("success", () => {
		// TESTING THE SUCCESS FUNCTION == WORKING
		it("should increase enhancement by 1 if not currently at 20", () => {
			success(item);
			expect(item.enhancement).toBe(14);
		});
	});
});

// AFTER THIS TEST NEW OBJECT IS
// let item = {
// 	name: "EpicLoot",
// 	durability: 50,
// 	enhancement: 14,
// };

describe("enhancer", () => {
	describe("repair", () => {
		// TESTING THE REPAIR FUNCTION == WORKING
		it("should have it's item durability returned to 100", () => {
			repair(item);
			expect(item.durability).toBe(100);
		});
	});
});

// AFTER THIS TEST NEW OBJECT IS
// let item = {
// 	name: "EpicLoot",
// 	durability: 100,
// 	enhancement: 14,
// };

describe("enhancer", () => {
	describe("failure", () => {
		// TESTING THE FAILURE FUNCTION == WORKING
		it("should fail and remove 1 from enhance and 10 from durability", async () => {
			success(item); // 15
			success(item); // 16
			success(item); // 17
			success(item); // 18

			// Sanity checks = passed
			expect(item.durability).toBe(100);
			expect(item.enhancement).toBe(18);

			fail(item);

			expect(item.durability).toBe(90);
			expect(item.enhancement).toBe(17);
		});
	});
});

// AFTER THIS TEST NEW OBJECT IS
// let item = {
// 	name: "EpicLoot",
// 	durability: 90,
// 	enhancement: 17,
// };
