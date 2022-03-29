const assert = require("assert");
const Paint = require("../paint.js")


describe("Paint", function() {
    it("should be able to check if it is empty", function() {
        paint1 = new Paint(5);
        const actual = paint1.checkIfEmpty();
        assert.strictEqual(actual, "Paint is not empty");
    })
})