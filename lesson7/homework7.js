// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}


let users = [
    new User(1,'ivan', 'varenyk' , '+48 098097111'),
    new User(2,'mykola', 'krajnyk' , '+48 445712099'),
    new User(3,'svitlana', 'saliuk' , '+48 119874763'),
    new User(4,'petro', 'sahajdachnyi' , '+48 75603544'),
    new User(5,'olesia', 'nikitenko' , '+48 998643324'),
    new User(6,'julia', 'nedorubko' , '+48 954222331'),
    new User(7,'pavlo', 'shtyr' , '+48 098 444531900'),
    new User(8,'kateryna', 'volia' , '+48 966655442'),
    new User(9,'dmytro', 'veselyi' , '+48 111454388'),
    new User(10,'tetiana', 'lashta' , '+48 909771347')
]
console.log(users);
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
function filterFunction(user) {
    if (user.id % 2 === 0) {
        return true;
    }
}
const filteredUsers = users.filter(filterFunction);
console.log(filteredUsers)
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
function sorter(user1,user2){
    return user1.id - user2.id;
}
 console.log(users.sort(sorter));
//
// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
   class Client{
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
//

let clients = [];


clients.push(new Client( 1, "Emily",  "Carson",  "client1@.com", "+380911234567",  [{title:'T-shirt', price:100}, {title:'Jeans', price: 500}, {title:'Jacket', price:350}, {title:'Socks', prise:27}]));
clients.push(new Client( 2, "Michael",  "Reed",  "client2@.com", "+380921234568",  [{title:'Pensil', price:5}, {title:'Notebook', price:2000}, {title:'Marker', price:10}]));
clients.push(new Client( 3, "Sarah",  "Jenkins",  "client3@.com", "+380931234569",  [{title:'Phone', price:700}, {title:'Computer', price:3200}, {title:'Tablet', price:850}]));
clients.push(new Client( 4, "Jason",  "Mitchell",  "client4@.com", "+380941234570",  [{title:'Mirror', price:120}, {title:'Table', price:340}]));
clients.push(new Client( 5, "Olivia",  "Sanders",  "client5@.com", "+380951234571",  [{title:'Thermos', price:50}, {title:'Sleeping bag', price: 210}, {title:'Tent', price:475}, {title:'Backpack', prise:170}]));
clients.push(new Client( 6, "Ethan",  "Cooper",  "client6@.com", "+380961234572",  [{title:'Gloves', price:35}]));
clients.push(new Client( 7, "Megan",  "Porter",  "client7@.com", "+380971234573",  [{title:'Smartwatch', price:310}, {title:'Phone', price:1385}]));
clients.push(new Client( 8, "Ryan",  "Hayes",  "client8@.com", "+380981234574",  [{title:'Shower gel', price:35}, {title:'Toothpaste', price: 20}, {title:'Toothbrush', price:15}, {title:'Shampoo', prise:35}, {title:'Soap', price:5},{title:'Deodorant', price:15}]));
clients.push(new Client( 9, "Chloe",  "Brooks",  "client9@.com", "+380991234575",  [{title:'Camera', price:1850}]));
clients.push(new Client( 10, "Daniel",  "Morgan",  "clien10@.com", "+381001234576",  [{title:'Hat', price:85}, {title:'Scarf', price:25}]));

//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clients.sort((a,b) => a.order.length - b.order.length);
console.log(clients);
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, produser, year, maxSpeed, engineVolume) {
    this.model = model;
    this.produser= produser;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
this.drive = function (){
    console.log(`Їдемо зі швидкісттю ${this.maxSpeed} км/год`)
}
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
 this.info = function() {
    for(const key in this){
    console.log(key, this[key]);
 }
 } ;
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (speedToAdd){
        if(speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    };
// -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (Year){
        if (Year > 1815) this.year = Year
    }
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
this.addDriver = function (driver){
        if(driver) this.driver = driver
};

}
const car = new Car('Dodge caliber', 'Dodge', 2010, 200, '2.0L');
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2000);
car.addDriver({name:'Bob'})
console.log(car)

//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car1{
    constructor( model, produser, year, maxSpeed, engineVolume) {
        this.model = model;
        this.produser = produser;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
drive (){
    console.log(`Їдемо зі швидкісттю ${this.maxSpeed} км/год`)
}
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
info() {
    for(const key in this){
        console.log(key, this[key]);
    }
} ;
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
increaseMaxSpeed(speedToAdd){
    if(speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
};
// -- changeYear (newValue) - змінює рік випуску на значення newValue
changeYear(Year){
    if (Year > 1815) this.year = Year
}
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(driver){
    if(driver) this.driver = driver
};

}
let car1 = new Car('Dodge caliber', 'Dodge', 2010, 200, '2.0L');

car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2000);
car.addDriver({name:'Bib'})
console.log(car)

//
//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}


const cinderellas = [
    new Cinderella("Elena", 18, 37),
    new Cinderella("Katherine", 19, 36),
    new Cinderella("Sophia", 20, 39),
    new Cinderella("Anna", 21, 40),
    new Cinderella("Maria", 22, 37.5),
    new Cinderella("Julia", 23, 38.5),
    new Cinderella("Natalia", 24, 39.5),
    new Cinderella("Irina", 25, 40),
    new Cinderella("Oksana", 26, 37),
    new Cinderella("Victoria", 27, 38),
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
const prince = new Prince("Dmitri", 28, 36);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for(const cinderella of cinderellas){
    if (cinderella.footSize === prince.slipper){
        prince.wife = cinderella
    }

}
console.log(prince.wife);
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);
prince.wife = cinderellaMain;

console.log(prince.wife)
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach,
Array.prototype.myForEach = function (callback){
    const yourArray = this;
    for(const item of yourArray){
        callback(item);
    }
};
[22,45,6].myForEach((x) => console.log(x))

//-------- filter------//

Array.prototype.myFilter = function (predicate){
    const arr = [];
    for(const item of this){
       if ( predicate(item)){
           arr.push(item);
       }
    }
    return arr;
};

usersArray = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
const result = usersArray.myFilter((user)=> user.status);
console.log(result);