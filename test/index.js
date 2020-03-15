const assert = require("assert");
const getNeighbours = require("../index");
describe("getNeighbours", function() {
    it("should return 6 items when recursive false and cell are on the left-top, right-top, bottom-right, bottom-left", function() {
        assert.equal(
            getNeighbours({ cell: 0, width: 8, height: 8, recursive: false })
                .length,
            6
        );

        assert.equal(
            getNeighbours({ cell: 7, width: 8, height: 8, recursive: false })
                .length,
            6
        );

        assert.equal(
            getNeighbours({
                cell: 7 * 8,
                width: 8,
                height: 8,
                recursive: false
            }).length,
            6
        );

        assert.equal(
            getNeighbours({
                cell: 7 * 8 + 7,
                width: 8,
                height: 8,
                recursive: false
            }).length,
            6
        );
    });
});
