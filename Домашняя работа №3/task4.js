function task4() {

    var text = prompt('Вариант 1 - поддерживается не всеми браузерами.\nВведите что-нибудь, из чего будем строить пирамиду');
    for (i = 1; i <= 20; i++) {
        console.log(text.repeat(i));
    }
    var str = prompt('Вариант 2 - используем массив.\nВведите букву, из которой будем строить пирамиду');
    var num = prompt('Введите количество строк пирамиды');

    function repeatText(str, num) {
        stringArr = [];
        for (var i = 0; i < num; i++) {
            stringArr.push(str);
            console.log(stringArr.join(' '));
        }
    }
    repeatText(str, num);

}
