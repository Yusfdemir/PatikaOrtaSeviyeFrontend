import getData from "./callback.js";

console.log("Lütfen 1-10 arası sayı girin:");
process.stdin.setEncoding('utf8');
var number;
process.stdin.on('readable', function() {
    number = process.stdin.read();
    if (number !== null) {
        getData(number)
    }
});