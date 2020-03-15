const assert = require("assert");
const getNeighbours = require("../index");
describe("getNeighbours", function() {
    it("", () => {
        const actual = getNeighbours({
            index: 10,
            width: 8,
            heigth: 8
        });

        console.log(actual);
    });
});
