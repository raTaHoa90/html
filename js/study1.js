'use strict';

var asd = 123;
let varNumberCount = 123,
    var_number_count = 412n,
    VarNumberCount;
const NAME_FIELD = 'field';

// Number
let a = 5, b = 8;
console.log(a + b); // 13
console.log(a - b); // -3
console.log(b / a); // 1.6
console.log(a * b); // 40
console.log(a % b); // 5
console.log(a ** b);// 390625 
console.log(-a);    // -5
a = 10; b = 6;
// 1 * 2^0 + 0 * 2^1 + 1 * 2^2 + 1 * 2^3
// 2^0 = 1; 2^1 = 2; 2^2 = 4; 2^3 = 8
// 1 * 1 + 0 * 2 + 1 * 4 + 1 * 8 = 13
// 1101 = D; 0123456789ABCDEF
console.log(a | b); // 1010 | 0110 = 1110 => 14
console.log(a & b); // 1010 & 0110 = 0010 => 2
console.log(a ^ b); // 1010 ^ 0110 = 1100 => 12
console.log(~a);    // ~0000_0000_0000_0000_0000_0000_0000_1010 = 1111_1111_1111_1111_1111_1111_1111_0101 => -11

// Boolean = false, true
//
//  a   |   b   |  !a   | a || b | a && b
//false | false | true  | false  | false
//false | true  | true  | true   | false
//true  | false | false | true   | false
//true  | true  | false | true   | true
//
// a > b  => Boolean
// a >= b
// a < b
// a <= b
// a == b   равны ли 
// a != b   не равны ли
// a === b  абсолютное равенство
// a !== b  абсолютное неравенство

var value = 278;
var e = value % 10;
var d = (value % 100 - e) / 10;
var s = (value - value % 100) / 100;
console.log(s + ' ' + d + ' ' + e); // '2 7 8'


/*
undefined
Number
String
Boolean
null
Object
    Object
    Function
    Array
    Date
    RegExp

BigInt
Symbol
Map
Set
WeakMap
WeakSet
*/

function AppendNum(button) {
    let buffer = document.getElementById('buffer');
    if(buffer.value == '0' && '123' == 123)
        buffer.value = button.value;
    else
        buffer.value += button.value;
}

function ClearBuffer(){
    document.getElementById('buffer').value = '0';
}

function ClearErase(){
    ClearBuffer();
    document.getElementById('result').value = '0';
    document.getElementById('operation').value = '';
}

function SetOper(button){
    if(document.getElementById('operation').innerText != '')
        EnterMath();
    document.getElementById('operation').innerText = button.value;
}

function EnterMath(){
    let resInp = document.getElementById('result'),
        bufInp = document.getElementById('buffer'),
        opSpan = document.getElementById('operation'),
        res = +resInp.value,
        buf = parseInt(bufInp.value);
    switch(opSpan.innerText){
        case '+': 
        case 'plus':
            res += buf;
            break;
        
        case '-':
            res -= buf;
            break;

        case '*':
            res *= buf;
            break;

        default:
            res = buf;
            break;
    }
    /*
    let temp = opSpan.innerText
    if(temp == '+')
        res += buf;
    else if(temp == '-')
        res -= buf;
    else if(temp == '*')
        res *= buf;
    else
        res = buf;
    */
    resInp.value = res;
    bufInp.value = '0';
    opSpan.innerText = '';
    
    console.log('Оно работает!!!');
}

//Math.abs(-5) // |-5| => 5
//Math.abs(5)  // |5|  => 5
// Math.floor( Math.random() * (max + 1) )
// Math.floor( Math.random() * (max - min + 1) ) + min
