function task2() {
    var i = 0;
    do {
        if (i == 0) {
            console.log(i + ' - это ноль');
        } else if (i % 2 == 0) {
            console.log(i + ' - это четное число');
        } else {
            console.log(i + ' - это нечетное число');
        }
        i++;
    } while (i < 10)
}
