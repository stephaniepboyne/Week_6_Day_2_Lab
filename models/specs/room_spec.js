const assert = require("assert");
const Room = require("../room.js")

describe("Room", function() {
    it('should have an area', function(){
        room = new Room(20);
        const actual = room.area;
        assert.strictEqual(actual, 20);
    });
    it('should not be painted', function(){
        room = new Room(20);
        const actual = room.painted;
        assert.strictEqual(actual, false)
    });
    it('should be able to be painted', function(){
        room = new Room(20);
        room.hasBeenPainted();
        const actual = room.painted;
        assert.strictEqual(actual, true)
    })
});

