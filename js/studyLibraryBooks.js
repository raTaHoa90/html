
function Library(name, data = {}){
    this.NAME = name;
    this.length = 0;
    this.add = function(nameBook, desc, numBookcase, numShelf){
        if(this[nameBook] === undefined)
            this.length++;
        this[nameBook] = { desc, numBookcase, numShelf };
    };
    this.del = function(nameBook){
        if(this[nameBook] !== undefined){
            delete this[nameBook];
            this.length--;
        }
    };
    this.search = function(num){
        return Object.keys(this)[num];
    }

    this.getTable = function(){
        let page = ['<table border=1 style="margin-top:20px"><caption>' + this.NAME + 
            '</caption><tr><th>Название</th><th>Описание</th><th>Номер шкафа</th><th>Номер полки</th></tr>'];
        for(let bookName in this)
            page.push('<tr><td>' + bookName + 
                '</td><td>' + this[bookName].desc + 
                '</td><td>' + this[bookName].numBookcase +
                '</td><td>' + this[bookName].numShelf +
                '</td></tr>');
        page.push('</table>');
        return page.join('');
    }

    this.save = keyName => localStorage[keyName] = JSON.stringify(this);
    this.load = keyName => {
        if(localStorage[keyName])
            Object.assign(this, JSON.parse(localStorage[keyName]));
    }

    let configField = {enumerable: false};
    Object.defineProperties(this, {
        length: configField,
        add: configField,
        del: configField,
        search: configField,
        getTable: configField,
        save: configField,
        load: configField,
        NAME: {
            writable: false,
            enumerable: false
        },
        descript: {
            enumerable: false,
            get: () => 'count:' + this.length,
            set: value => this.add(value, '???')
        },
        name: {
            enumerable: false,
            get: () => this.NAME,
            set: value => this.add(value, '!!!')
        }
    });

    Object.assign(this, data);
    Library.count++;
}

Library.count = 0;

String.prototype.splitParams = function(){
    let paramsStr = this.split('&'),
        result = {};

    for(let paramStr of paramsStr) {
        let param = paramStr.split('=');
        result[param[0]] = param[1];
    }

    return result;
}