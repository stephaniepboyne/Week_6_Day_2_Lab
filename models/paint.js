const Paint = function(litres) {
    this.litres = litres;
}

Paint.prototype.checkIfEmpty = function(){
    if (this.litres === 0) {
        console.log("Paint is empty");
    } else {
        console.log("Paint is not empty")
    };
};

Paint.prototype.emptyPaint = function (){
    this.litres = 0;
}

module.exports = Paint; 