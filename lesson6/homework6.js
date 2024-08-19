// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
const strings1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (const string1 of strings1){
    console.log(`Довжина "${string1}": ${string1.length}`);
}


// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
const strings2 = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (const string2 of strings2){
    console.log(string2.toUpperCase());
}

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const strings3 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
for (const string3 of strings3){
    console.log(string3.toLowerCase());
}


// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty  string   ' . Почистити її від зайвих пробілів.
//
let  str1 = ' dirty string   ';
const cleanStr = str1.trim();
console.log(cleanStr);

//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//

function stringToArray(str2) {
    return str2.split(' ');
}
let str2 = 'Ревуть воли як ясла повні';
let arr = stringToArray(str2);
console.log(arr);

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const numbers = [10,8,-7,55,987,-1011,0,1050,0];
const stringNumbers = numbers.map(number => String(number));


console.log(stringNumbers)

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//

function sortNums(array,direction) {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return array.sort((a, b) => b - a);
    } else {
        throw new Error('invalid')
    }
}
let nums = [5, 99, 12, 0, 43 ];
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));

try{
    sortNums(nums,'invalid');
}catch (error){
    console.log(error.message);
}

// ==========================
// #yo06d74c1C
// - є масив
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filteredCourses = coursesAndDurationArray.filter((course) => course.monthDuration > 5);


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const transformedCourses = filteredCourses.map((course, index) => {
    return{
        id: index + 1,
        title: course.title,
        monthDuration: course.monthDuration,
    };
});
console.log(transformedCourses);
// =========================


//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)

const cardsNum = [
    {cardSuit: 'spade', value: 6, color: 'black'},
    {cardSuit: 'spade', value: 7, color: 'black'},
    {cardSuit: 'spade', value: 8, color: 'black'},
    {cardSuit: 'spade', value: 9, color: 'black'},
    {cardSuit: 'spade', value: 10, color: 'black'},
    {cardSuit: 'spade', value:'ace', color: 'black'},
    {cardSuit: 'spade', value:'jack', color: 'black'},
    {cardSuit: 'spade', value:'queen', color: 'black'},
    {cardSuit: 'spade', value:'king', color: 'black'},

    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value:'ace', color: 'black'},
    {cardSuit: 'clubs', value:'jack', color: 'black'},
    {cardSuit: 'clubs', value:'queen', color: 'black'},
    {cardSuit: 'clubs', value:'king', color: 'black'},

    {cardSuit: 'heart', value: 6, color: 'red'},
    {cardSuit: 'heart', value: 7, color: 'red'},
    {cardSuit: 'heart', value: 8, color: 'red'},
    {cardSuit: 'heart', value: 9, color: 'red'},
    {cardSuit: 'heart', value: 10, color: 'red'},
    {cardSuit: 'heart', value:'ace', color: 'red'},
    {cardSuit: 'heart', value:'jack', color: 'red'},
    {cardSuit: 'heart', value:'queen', color: 'red'},
    {cardSuit: 'heart', value:'king', color: 'red'},

    {cardSuit: 'diamond', value: 6, color: 'red'},
    {cardSuit: 'diamond', value: 7, color: 'red'},
    {cardSuit: 'diamond', value: 8, color: 'red'},
    {cardSuit: 'diamond', value: 9, color: 'red'},
    {cardSuit: 'diamond', value: 10, color: 'red'},
    {cardSuit: 'diamond', value:'ace', color: 'red'},
    {cardSuit: 'diamond', value:'jack', color: 'red'},
    {cardSuit: 'diamond', value:'queen', color: 'red'},
    {cardSuit: 'diamond', value:'king', color: 'red'},
]

// - знайти піковий туз
let spadeAce = cardsNum.find(card => card.cardSuit === 'spade' && card.value === 'ace');
// - всі шістки
let allSixes = cardsNum.filter(card => card.value === 6);
// - всі червоні карти
let redCards =cardsNum.filter(card => card.color === 'red');
// - всі буби
let allDiamonds = cardsNum.filter(card => card.cardSuit === 'diamond');
// - всі трефи від 9 та більше
//
let filterClubs = cardsNum.filter(card =>  card.cardSuit === 'clubs' && ![6, 7 ,8].includes(card.value));

console.log(spadeAce, allSixes, redCards, allDiamonds, filterClubs);
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let suits = cardsNum.reduce((acc, card) => {

        let suit = card.cardSuit;
        acc[suit] = acc[suit] || [] ;
        acc[suit].push(card);
        return acc;
    },


    {
        spade:[],
        diamond:[],
        heart:[],
        clubs:[]
    });

console.log(suits);

// =========================


// #4LJn7zBx
// взяти з arrays.js масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в яких в modules є sass
let filter1 = coursesArray.filter(course => course.modules.includes('sass'));
console.log(filter1);
// --написати пошук всіх об'єктів, в яких в modules є docker
let filter2 = coursesArray.filter(course => course.modules.includes('docker'));
console.log(filter2);