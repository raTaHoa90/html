class Library {
    static count = 0;
    static #generate;

    #length = 0;
    #NAME;
    #NameVar;
    #id;
    #idRender;
    #data = {};
    #keySave;

    constructor(name, nameVar, idRender, data = {}){
        this.#idRender = idRender;

        if(!Library.#generate)
            this.constructor.#generate = idMaker();
        this.#NAME = name;
        this.#NameVar = nameVar;
        this.#id = this.constructor.#generate.next().value;

        Object.assign(this.#data, data);
        this.constructor.count++;
    }

    replace(oldNameBook, nameBook, desc, numBookcase, numShelf){
        if(this.#data[oldNameBook] === undefined)
            this.add(nameBook, desc, numBookcase, numShelf);
        else if(oldNameBook == nameBook)
            this.#data[nameBook] = { desc, numBookcase, numShelf };
        else {
            this.del(oldNameBook);
            this.add(nameBook, desc, numBookcase, numShelf);
        }
    }

    add(nameBook, desc, numBookcase, numShelf){
        if(this.#data[nameBook] === undefined)
            this.#length++;
        this.#data[nameBook] = { desc, numBookcase, numShelf };
    };

    del(nameBook){
        if(this.#data[nameBook] !== undefined){
            delete this.#data[nameBook];
            this.#length--;
        }
    };

    search(num){
        return Object.keys(this.#data)[num];
    }

    getTable() {
        let page = ['<table border=1 style="margin-top:20px"><caption>' + this.#NAME + 
            '</caption><tr id=r'+this.#id+'><th>Название</th><th>Описание</th><th>Номер шкафа</th><th>Номер полки</th><th>действия</th</tr>'];
        for(let bookName in this.#data)
            page.push('<tr><td>' + bookName + 
                '</td><td>' + this.#data[bookName].desc + 
                '</td><td>' + this.#data[bookName].numBookcase +
                '</td><td>' + this.#data[bookName].numShelf +
                '<td><input type=button value="Редактировать" onclick="' + this.#NameVar +
                    '.edit(\'' + bookName + '\')"><input type=button value="Удалить" onclick="'+ this.#NameVar +
                    '.remove(\'' + bookName + '\')"></td></tr>'
            );
        page.push('</table>');
        return page.join('');
    }

    draw(){
        document.getElementById(this.#idRender).innerHTML = this.getTable();
    }

    edit(bookName){
        if(this.onStartEdit)
            this.onStartEdit(this.#data[bookName], bookName);
    }

    hasID(id){
        return this.#id === id;
    }

    remove(bookName){
        delete this.#data[bookName];
        this.draw();
        this.save();
    }

    save(keyName){ 
        if(!this.#keySave)
            this.#keySave = keyName;
        localStorage[this.#keySave] = JSON.stringify(this.#data);
    }

    load(keyName) {
        if(!this.#keySave)
            this.#keySave = keyName;
        if(localStorage[this.#keySave])
            Object.assign(this.#data, JSON.parse(localStorage[this.#keySave]));
    }

    get length() { 
        return this.#length;
    }

    get descript(){
        return 'count:' + this.#length;
    }
    set descript(value){
        this.add(value, '???')
    }

    get name() { 
        return this.#NAME; 
    }

    set name(value) { 
        this.add(value, '!!!') ;
    }
}

function* idMaker(){
    var index = 0;
    while(true)
        yield index++;
}

String.prototype.splitParams = function(){
    let paramsStr = this.split('&'),
        result = {};

    for(let paramStr of paramsStr) {
        let param = paramStr.split('=');
        result[param[0]] = param[1];
    }

    return result;
}