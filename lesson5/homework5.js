// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
//
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const area1 = (a, b) => a * b;
console.log(area1(5,3));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const circle = ( pi, r) => pi * (r * r);
console.log(circle(3.14, 7));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const area2 = ( pi, h, r) => (2 * pi) * h * r;
console.log(area2(3.14, 3, 10));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
let productList = [
    {  name: 'Smartphone', batteryCapacity:'4000mAh', price:15000},
    {  name: 'Laptop', batteryCapacity: '60wh', rice:25000},
    {  name: 'Robot vacuum cleaner',batteryCapacity: '3200mAh',price:10000},
];
const productCards = (array) =>
{ array.forEach((product) =>  {
        document.write(`
            <div>
                <h2>
                    назва- ${product.name},
                    потужність акомулятора - ${product.batteryCapacity},
                    ціна - ${product.price}
                </h2>
            </div>
        `)
    });
};


productCards(productList);
// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let abc = (text) =>{
    document.write(`<p>${text}</p>`)
}
abc('параграф з текстом');

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let uls = (text2) =>{
    document.write(`<ul><li>${text2}</li><li>${text2}</li><li>${text2}</li></ul>`);
}
uls("hello,world");

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let cyclesLi = (text3, count ) => {
    for (let c = 0; c < count; c++){
        document.write(`<ul>`);
        document.write(`<li> ${text3} </li>`);
        document.write(`</ul>`);
    }
}
cyclesLi( 'hello, my friend', 5);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let elements = [45, 20, 'joyful', 'nature', true, null];

const list =  (array) =>{
    document.write(`<ul`)
    array.forEach((element) => {
        console.log(element);
        document.write(`<li> ${element} </li>`);
    });
    document.write(`<ul>`)
};

list(elements);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let data =[
{ id:1, name:'john',age: 25,},
{ id:2, name:'anna',age: 16,},
{ id:3, name:'denis',age: 31,}
]
let form = (data) => {
    data.forEach((obj) => {
        for (const key in obj) {
            document.write(`<ul> <li>${key} : ${obj[key]}</li></ul>`)
        }
    });
}
form(data);

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
const minNumber = (...numbers) => {
    let min = numbers[0];

    //тут також можна було використати forEach напр.:

    // numbers.forEach(number => {
    //     if (number < min) {
    //         min = number;
    //     }
    // });
    for (const number of numbers){
        if (number < min){
            min = number; }

    }
    console.log('min:', min)
    return min;
};
minNumber(5, 9, 25, 20);


// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let numbers = [10, 3, 11, 9]

const sum = (arr) =>{
    let total = 0;

    for (const arrElement of arr){
        total += arrElement;
    }
    return total
}
let result = sum(numbers);
console.log(result)

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let numbers2 = [11,22,33,44]
const swap = (arr, index1, index2) =>{
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};
swap(numbers2, 0, 1);
console.log(numbers2);

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let currencyValues = [
    {currency:'USD', value:41 },
    {currency: 'EUR',value:45 },
    {currency: 'CHF', value:46},
    {currency: 'PLN', value: 10 },
    {currency:'UAH', value: 1 },
    {currency:'GBR', value: 50 }    ]
const exchange = ( sumUAH, currencyValues, exchangeCurrency ) => {
    const currency = currencyValues.find(c => c.currency === exchangeCurrency);
    if (currency) {

        return sumUAH / currency.value;
    } else {

        console.error('Currency not found');
        return null;
    }
};
const currencies = ['USD', 'EUR', 'CHF', 'PLN', 'UAH', 'GBR'];
for (const currency of currencies) {
    let result = exchange(1000, currencyValues, currency);
    console.log(`${currency}: ${result}`);
}
