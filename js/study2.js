'use strict';

let cars = ['bmw','audi','kia', 'vaz', 'bmw'];
console.log(cars[2]);  // получить значение под индексом 2 (3 элемент массива)
cars[5] = 'mitsubisi'; // записываем в массив под 4 индексом (5 элементом массива) новое значение
console.log(cars.length); // => 5;

cars[cars.length] = 'lada';
cars.push('gaz');
let c = cars.pop(); // => 'gaz'
console.log(c);
cars.unshift('gaz','kamaz');
c = cars.shift();
console.log(c);

let indx = cars.indexOf('bmw'); // -1 = если не найдено, или индекс найденого с начала массива указанное значение
console.log(indx);
indx = cars.indexOf('bmw',indx+1);
console.log(indx);
indx = cars.lastIndexOf('bmw');
console.log(indx);
console.log(indx >= 0);
console.log(cars.includes('vaz'));

// имена переменных которые чаще всего используются для обозначения индексов для взаимодействии с элементами массива
let i = 0;//, j, k, x, y, z; 

/*
start:
if(i < cars.length){
    document.writeln('<li>' + cars[i]);
    i++;
    goto start;
}
*/

i = 0;
document.writeln('WHILE: <ul>');
while(i < cars.length){
    document.writeln('<li>' + cars[i]);
    i++;
    //i = i + 1;
    //i += 1;
    /*++i;
    i--;
    --i;*/
}
document.writeln('</ul>');

i = 0;
document.writeln('DO WHILE: <ul>');
do {
    document.writeln('<li>' + cars[i]);
    i++;
}while(i < cars.length);
document.writeln('</ul>');

//while(true){}; бесконечный цикл

document.writeln('<table border=1>');
for(let row = 0; row < 10; row++){
    document.writeln('<tr>');
    for(let col = 0; col < 10; col++)
        document.writeln('<td>' + row +':' + col + '</td>');
    document.writeln('</tr>');
}
document.writeln('</table><br>');

let start = cars.indexOf('bmw'),
    finish = cars.lastIndexOf('bmw'),
    subCars = cars.slice(start, finish);

document.writeln('FOR: <ul>');
for(let j = 0; j < subCars.length; j++)
    document.writeln('<li>' + subCars[j]);
document.writeln('</ul>');

subCars = cars.splice(start, finish - start);

document.writeln('FOR IN: <ul>');
for(let j in subCars)
    document.writeln('<li>' + subCars[j]);
document.writeln('</ul>');

document.writeln('FOR OF: <ul>');
for(let car of cars)
    document.writeln('<li>' + car);
document.writeln('</ul>');

document.writeln('FOR OF BREAK: <ul>');
for(let car of cars){
    if(car == 'kia')
        break;
    document.writeln('<li>' + car);
}
document.writeln('</ul>');

document.writeln('FOR OF CONTINUE <ul>');
for(let car of cars){
    if(car == 'kia')
        continue;
    document.writeln('<li>' + car);
}
document.writeln('</ul>');

cars.splice(start, 0, 'kia', 'vaz');

document.writeln('forEach <ul>');
cars.forEach(car => document.writeln('<li>' + car));
document.writeln('</ul>');


let str = cars.join(', ');
document.writeln(str);

let ar = str.split(', ');
console.log(ar);
console.log(str[2] + str.charAt(2));
console.log(str.indexOf('bmw'));
console.log(str.lastIndexOf('bmw'));
console.log(str.length);
console.log(str.includes('z, b'));
console.log(str.substring(5, 10));
console.log(str.toUpperCase());
console.log('       kjahsdkjhas       ');
console.log('       kjahsdkjhas       '.trim());



//===================================================

var marks = [];
for(let i = 10; i > 0; i--)
    marks.push(Math.floor(Math.random() * 10));
// что бы отслеживать правильность выполнения наших задач, выводим полученный массив на экран
console.log(marks);

let sum = 0, 
    min = Infinity,
    max = -Infinity;

for(let mark of marks){
    sum += mark;
    if(mark > max)
        max = mark;
    if(mark < min)
        min = mark;
}
console.log('avg = ' + (sum / marks.length));
console.log('max = ' + max + '; min = ' + min);