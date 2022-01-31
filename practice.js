
// for (var i = 0; i <= 100; i++) {
//     console.log(i);
// }



// function CtoF(celsius) {
//     let celtoFr = (celsius * 9 / 5) + 32;
//     return celtoFr;
// }

// let Putcel = 34;
// let OutputCell = CtoF(Putcel);
// console.log("Fahraenhite is ", OutputCell);

// function FtoC(fahren) {
//     let FartoCel = (fahren - 32) * 5 / 9;
//     return FartoCel;
// }
// let inputFahr = 108;
// let OutputFr = FtoC(inputFahr);
// console.log("Mama ami parsi", OutputFr);

function Parsent(marks) {
    let Parsent = (marks / 400) * 100;
    return Parsent;
}
let Mark = 300;
let TotalMarks = Parsent(Mark);
console.log(TotalMarks, "%");

if (TotalMarks <= 100 && TotalMarks >= 80) {
    grades = "A";
}
else if (TotalMarks <= 79 && TotalMarks >= 60) {
    grades = "B";
}
else {
    grades = "f";
}
console.log(grades);