// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додаки перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
// Створити функцію, яка робить глибоку копію об'єкту.
// Додай перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
//



// -----------оголошую функцію-------------//
function deepClone(obj) {

    //----------Перевірка на null, undefined, NaN (роблю на початку, щоб уникнути помилок)--------//
    if (obj === null || typeof obj !== 'object' ||  Number.isNaN(obj)) {
        return obj;
    }

    //--------Створюю новий об'єкт або масив залежно від типу obj--------//
    const clone = Array.isArray(obj) ? [] : {};


    // ----------копіюю властивості----------//
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key]

    //----------копіюю функції------------//
        if(typeof value === 'function') {
            clone[key] = value.bind(clone);}

        //-----------прив'язую функцію до нового об'єкта---------//
        else {

            clone[key] = deepClone(value)
        }
    }
    }
    //----------повертаю об'єкт---------//
    return clone;
}

//------------перевірка----------//
const originalObj = {
    id:1,
    name: 'Anna',
    greeting(){console.log('Hello!')},
    foo(){console.log('Good morning!')}
};
const clone = deepClone(originalObj);

clone.foo();
clone.greeting();

console.log(clone)

//
//// #iz6emEsP2BA
// // - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// // за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// //     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let transformedArray = coursesAndDurationArray.map((item, index) => ({
    id: index + 1,
    title: item.title,
    monthDuration: item.monthDuration
}));

console.log(transformedArray);