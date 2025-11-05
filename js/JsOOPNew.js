function Rand(min, max){
    if( max == undefined){
        max = min;
        min = 0;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class FirstClass {
    static num;
    static #count = 0;
    static #listObject = [];
    name = 'NoName';
    #i = 0;
    #num;

    static allSpeak(){
        for(let obj of this.#listObject)
            console.log(obj.speak());
    }

    constructor(name){
        this.name = name;
        this.#num = FirstClass.#count;
        FirstClass.#count++;
        FirstClass.#listObject.push(this);
    }

    getName(){
        return '#' + this.#num + ': ' + this.name;
    }

    speak(){
        this.#i++;
        return this.getName() + ' что-то сказал ' + this.#i;
    }

    valueOf(){
        return this.#num;
    }

    toString(){
        return this.getName()
    }
}

var firstObj = new FirstClass('Джон');
console.log(firstObj.speak());

class SecondClass extends FirstClass {
    static #union;
    static #init(){
        this.#union = 123;
    }

    static {
        this.#init();
    }

    age;

    constructor(name, age){
        super(name);
        this.age = age;
    }

    #privateMethod(testParam){
        return testParam;
    }

    get temp(){
        return this.#privateMethod(SecondClass.#union);
    }

    set temp(value){
        SecondClass.#union = value;
        this.#hiddenVal = value;
    }

    get #hiddenVal(){
        return this.value;
    }

    set #hiddenVal(value){
        this.value = value;
    }

    speak(){
        console.log(this.#hiddenVal);
        return super.speak() + '!!! (' + this.age + ')';
    }

    look(){
        return this.getName() + ' смотрит';
    }

    valueOf(){
        return this.age;
    }

    *[Symbol.iterator](){
        let data = {aaa:123, bbb:321}
        for(let key in data)
            yield [key, data[key]];
    }
}

var secondObj = new SecondClass('Фома', 18);
console.log(secondObj.speak());
console.log(firstObj.speak());

var ar = [firstObj, secondObj];
for(let i = 10; i > 0; i--)
    ar.push( Math.random() < 0.33 
        ? new FirstClass('Name' + Rand(1,9999))
        : new SecondClass('Name' + Rand(1,9999), Rand(10, 60))
    );

console.log(ar);

//===================================
FirstClass.allSpeak();

console.log(ar.join(', '));
console.log(0 + ar[1]);

for(let param of secondObj)
    console.log(param);

ar[0].look = ()=> 'TEST';
for(let obj of ar)
    if(obj instanceof SecondClass)
        console.log(obj.look());
    /*if(obj.look)
        console.log(obj.look());*/