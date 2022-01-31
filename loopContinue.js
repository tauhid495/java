var numbers = [12, 23, 36, 42, 58, 68, 94, 22, 15, 35];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) {
        continue;
    }
    console.log(number);
}