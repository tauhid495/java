// function bringPen(taka) {
//     console.log(taka);
//     var penPrice = 10;
//     var totalPen = taka / penPrice;
//     return totalPen;
// }

// var given = 150;
// var Pen = bringPen(given);
// console.log("Ai nen apnar", Pen);

function gunonDuita(num1, num2) {
    var total = num1 * num2;
    return total;
}

var result = gunonDuita(5, 10);
console.log("gunon hoilo", result);

function biyogKoro(num1, num2) {
    var total = num1 - num2;
    return total;
}

var result = biyogKoro(14, 5);
console.log("biyog hoile je", result);

function vagKoro(num1, num2) {
    var result = (num1 / num2);
    return result;
}

var total = vagKoro(15, 3);
console.log("Apnar vag hoile je...", total);