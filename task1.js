function task1() {
    function isPrime(number) {
        var j = 2;
        while (j < number) {
            if (number % j === 0) return false;
            j++;
        }
        return true;
    }

    var i = 2;
    while (i <= 100) {
        if (isPrime(i)) {
            console.log('Простое число - ', i);
        }
        i++;
    }
}
