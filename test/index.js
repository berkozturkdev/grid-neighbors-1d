const assert = require("assert");
const getNeighbours = require("../index");
describe("getNeighbours", function() {
    it("", () => {
        const actual = getNeighbours({
            index: 1,
            width: 8,
            heigth: 8
        });

        console.log(actual);
    });
});
