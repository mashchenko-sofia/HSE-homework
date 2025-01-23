let num1 = parseInt(prompt("Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));

if (num1 > num2) {
    console.log("Первое число больше");
} else if (num1 < num2) {
    console.log("Второе число больше");
} else {
    console.log("Числа равны");
}