export class Library {
    #name;
    #booksCount;
    #isOpen;

    constructor(name = "библиотека", booksCount = 0, isOpen = false) {
        this.#name = name;
        this.#booksCount = booksCount;
        this.#isOpen = isOpen;
    }


    get name() {
        return this.#name;
    }

    get booksCount() {
        return this.#booksCount;
    }

    get isOpen() {
        return this.#isOpen;
    }
    set name(value) {
        if (typeof value === 'string' && value.length > 0) {
            this.#name = value;
        } else {
            console.error('название должно быть непустой строкой');
        }
    }

    set booksCount(value) {
        if (typeof value === 'number' && value >= 0) {
            this.#booksCount = value;
        } else {
            console.error('количество книг должно быть неотрицательным числом');
        }
    }

    set isOpen(value) {
        if (typeof value === 'boolean') {
            this.#isOpen = value;
        } else {
            console.error('статус должен быть boolean');
        }
    }
    show() {
        console.log(' информация о библиотеке');
        console.log(`название: ${this.#name}`);
        console.log(`количество книг: ${this.#booksCount}`);
        console.log(`открыта: ${this.#isOpen ? 'да' : 'нет'}`);
    }

    delete() {
        this.#name = null;
        this.#booksCount = null;
        this.#isOpen = null;
        
        this.show = () => console.error('объект удален');
        this.copy = () => console.error('объект удален');
        
        console.log('библиотека удалена');
    }
    copy() {
        return this;
    }
    #addBooks(count) {
        if (typeof count === 'number' && count > 0) {
            this.#booksCount += count;
            console.log(`добавлено ${count} книг. всего книг: ${this.#booksCount}`);
        }
    }
    receiveDonation(booksCount) {
        this.#addBooks(booksCount);
    }
    static clone(original) {
        if (original instanceof Library) {
            return new Library(original.name, original.booksCount, original.isOpen);
        }
        return new Library();
    }
}