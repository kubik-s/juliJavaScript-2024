// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function figure(a, b) {
    return a * b;}
let x1 = figure(5,3);
console.log(x1);



// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle( pi, r) {
    return pi * (r * r);
}
let x2 = circle(3.14, 7);
console.log(x2);


// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function area( pi, h, r) {
    return (2 * pi) * h * r;
}
let x3= area(3.14, 3, 10);
console.log(x3);

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
let productList = [
    {  name: 'Smartphone', batteryCapacity:'4000mAh', price:15000},
    {  name: 'Laptop', batteryCapacity: '60wh', rice:25000},
    {  name: 'Robot vacuum cleaner',batteryCapacity: '3200mAh',price:10000},
];
function productCards(array){
    for (const product of array) {
        document.write(`
            <div>
                <h2>
                    назва- ${product.name},
                    потужність акомулятора - ${product.batteryCapacity},
                    ціна - ${product.price}
                </h2>
            </div>
        `)
    }
}


productCards(productList);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function abc(text){
    document.write(`<p>${text}</p>`)

}
abc('параграф з текстом');


// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function uls (text2){
    document.write(`<ul>`);
    {
        document.write(`<li>${text2}</li><li>${text2}</li><li>${text2}</li>`);

        document.write(`</ul>`);
    }
}
uls("hello,world");


// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function cyclesLi(text3, count ) {
    for (let c = 0; c < count; c++){
        document.write(`<ul>`);
        document.write(`<li> ${text3} </li>`);
        document.write(`</ul>`);
    }
}
cyclesLi( 'hello, my friend', 4);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

let elements = [45, 20, 'joyful', 'nature', true, null];
function list (array){

    document.write(`<ul>`);{
        for ( const element of array) {
            console.log(element);
            document.write(`<li> ${element} </li>`);
        }
        document.write(`</ul>`);
    }
}
list(elements);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
data ([
{ id:1, name:'john',age: 25,},
{ id:2, name:'anna',age: 16,},
{ id:3, name:'denis',age: 31,}
]);
function data(users){
    for(const user of users)
    document.write(`<div> ${user.id} ${user.name} ${user.age} </div>`)
}
//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

function minNumber(){
    let min = arguments[0];
    for (const argument of arguments){
        if (argument < min){
            min = argument; }

    }
    console.log('min:', min)
    return min;
}
minNumber(5, 9, 25, 20);

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let numbers = [10, 3, 11, 9]
let result = sum(numbers)
function sum(arr){
    let total = 0
    for (const arrElement of arr){
             total += arrElement;
    }
    return total
}
console.log(result);
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let numbers2 = [11,22,33,44]
function swap(arr, index1, index2){
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
swap(numbers2, 0, 1);
console.log(numbers2);


// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)/ Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
let currencyValues = [
        {currency:'USD', value:41 },
        {currency: 'EUR',value:45 },
        {currency: 'CHF', value:46 },
        {currency: 'PLN', value: 10 },
        {currency:'UAH', value: 1 },
        {currency:'GBR', value: 50 }  ]
function exchange ( currencyValues, sumUAH, exchangeCurrency ) {
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            return sumUAH / currencyValue.value;

        }
    }
}
const currencies = ['USD','EUR','CHF', 'PLN','UAH', 'GBR']
for(const currency of currencies ){
    let result1 = exchange( currencyValues, 1000, currency);
    console.log(result1)}