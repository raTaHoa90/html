'use strict';

var test = 123;

function Test(test = 5){
    for(let a = 0; a < 10; a++){
        let test = 10;
        console.log(a + ': ' + test)
    }
    console.log(test);
}

function Sum(a, b = 1){
    return a + b;
}

function SumB(a,b,c){
    if(b === undefined)
        b = 123;

    c ||= 321;

    console.log(a,b,c);
}

function SumC(a, b = 1){
    let sum = 0;
    for(let index = 0; index < arguments.length; index++){
        let temp = 10;
        sum += arguments[index];
    }
    console.log(temp);
    return sum;
}

function SumD(a, b = 1, ...args){
    let sum = a + b;
    for(let param of args)
        sum += param;
    return sum;
}

console.log(this);

function SumG(baseValue){
    var base = baseValue;
    return function(a){
        return a + base;
    }
}

var ar = [20, 5, 52, 3, 23, 123, 42, 1],
    ar2 = ar.map( item => '' + item );
//[123,'asd',true, [1,2,3], SumC];

console.log(ar.join(', '));
console.log(ar2.join(', '));
ar.sort();
console.log(ar.join(', '));

ar.map(function(item){
    return '' + item;
});

/*
ar2.sort((a, b) => {
    if(a.length > b.length)
        return 1;
    else if (a.length < b.length)
        return -1;
    else if(a > b)
        return 1;
    else if(a < b)
        return -1;
    else
        return 0;
})
*/

/*ar2.sort((a, b) => {
    let sign = Math.sign(a.length - b.length);
    if(sign != 0)
        return sign;
    return Math.sign(+a - +b);
});*/

/*
    -variable   => Number
    +variable   => Number
    ''+variable => String
#   !!variable  => Boolean
*/

ar2.sort((a, b) =>Math.sign(a.length - b.length));
console.log(ar2.join(', '));

ar.sort((a,b) => a > b ? 1 : (a < b ? -1 : 0) )
/*
    let result;
    if(a > b)
        result = a;
    else
        result = b;
    c = result;

    _________________________
    c = a > b ? a : b;
*/

ar.sort((a,b) => Math.sign(a, b));
console.log(ar.join(', '));

ar.sort((a,b) => -Math.sign(a, b));
console.log(ar.join(', '));

ar2.sort((a, b) =>{
    let c = Math.sign(a.length - b.length);
    return c ? c : Math.sign(+b - +a);
});
console.log(ar2.join(', '));

//==================================================

function makeIterator(array){
    var nextIndex = 0;
    let obj = {
        next: function(){
            return nextIndex < array.length
                ? { value: array[nextIndex++], done: false}
                : { done: true }
        }
    };
    return obj;
}

console.log('=============================');

var it = makeIterator(["yo", "ya", "yu", "ye"]);
for(let result = it.next(); !result.done; result = it.next())
    console.log(result.value);

console.log('=============================');

function* makeGenerator(array){
    var index = 0;
    while(array.length > index)
        yield array[index++];
}

function* idMaker(){
    var index = 0;
    while(true)
        yield index++;
}

console.log('=============================');

it = makeGenerator(["yo", "ya", "yu", "ye"]);
for(let result = it.next(); !result.done; result = it.next())
    console.log(result.value);

console.log('=============================');

it = makeGenerator(["yo", "ya", "yu", "ye"]);
for(let value of it)
    console.log(value);

console.log('=============================');
var IDGenerator = idMaker();
console.log(IDGenerator.next().value);
console.log(IDGenerator.next().value);
console.log(IDGenerator.next().value);
console.log(IDGenerator.next().value);
console.log(IDGenerator.next().value);
var IDGenerator2 = idMaker();
console.log(IDGenerator2.next().value);
console.log(IDGenerator2.next().value);