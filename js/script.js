let btn = document.querySelector('.button-1');

let names = ['Андрей', 'Олег', 'Дима', 4, 5, 6];

let func1 = function() {
    document.querySelector('.out-1').innerHTML = names;
};

btn.addEventListener("click", func1);

let numbers = [4,11,22,3,12,98];

let btn2 = document.querySelector('.button-2')

let func2 = function() {
    let max = numbers[0];
    for(let i=0; i<numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    document.querySelector('.out-2').innerHTML = max;
}

btn2.addEventListener("click", func2);

let func3 = function() {
    let min = numbers[0];
    for(let i=0; i<numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    document.querySelector('.out-3').innerHTML = min;
}

let btn3 = document.querySelector('.button-3');

btn3.addEventListener("click", func3)

let func4 = function () {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }
    document.querySelector('.out-4').innerHTML = sum;
}

let btn4 = document.querySelector('.button-4');

btn4.addEventListener("click", func4)

let btn6 = document.querySelector('.button-6');

let func6 = numbers.sort(function(a, b) {
    return a - b;
});

btn6.onclick = function () {
    document.querySelector('.out-6').innerHTML = func6;
}









