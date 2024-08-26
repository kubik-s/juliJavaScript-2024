// #8Nmt60ZT
// - створити блок,
const block = document.createElement('div');
//     - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap');
block.classList.add('collapse');
block.classList.add('alpha');
block.classList.add('beta');
block.textContent = 'Good things take time'
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//---------------------------стилізувала в HTML файлі---------------------------//

// - додати цей блок в body.
document.body.appendChild(block);
// - клонувати його повністю, та додати клон в body.
const blockClone = block.cloneNode(true);
//--------------------------тут я додала до тексту знаки наголосу щоб було видно де є клон-----------------//
blockClone.textContent ='Good things take time!!!'

document.body.appendChild(blockClone);



//
//     #OPLI89c9G
// - Є масив:
const items =   ['Main','Products','About us','Contacts']



// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const headerBlock = document.createElement('ul');
headerBlock.classList.add("header");

for(const item of items ){
 const li = document.createElement('li');
 li.innerText = item;
 headerBlock.appendChild(li);
}

document.body.appendChild(headerBlock);

//
// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for(const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerText = `${course.title} ${course. monthDuration}`
   document.body.appendChild(div);
}


// =========================
//     #Kx1xgoKy8
//     - Є масив
let coursesAndDurationArray2 = [
    {title2: 'JavaScript Complex', monthDuration2: 5},
    {title2: 'Java Complex', monthDuration2: 6},
    {title2: 'Python Complex', monthDuration2: 6},
    {title2: 'QA Complex', monthDuration2: 4},
    {title2: 'FullStack', monthDuration2: 7},
    {title2: 'Frontend', monthDuration2: 4}
]

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


for(const course of coursesAndDurationArray2){
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = course.title2;
    const p = document.createElement('p');
    p.innerText = course.monthDuration2;
    div.append(h2,p);

    document.body.appendChild(div);
}

// ==========================