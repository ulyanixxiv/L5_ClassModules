import { Library } from './Library.js';

export class BookLibrary extends Library {
    #specialization;

    constructor(name = "библиотека", booksCount = 0, isOpen = false, specialization = "общая") {
        super(name, booksCount, isOpen);
        this.#specialization = specialization;
    }
    get specialization() {
        return this.#specialization;
    }
    set specialization(value) {
        if (typeof value === 'string' && value.length > 0) {
            this.#specialization = value;
        } else {
            console.error('специализация должна быть непустой строкой');
        }
    }
    show() {
        console.log('информация о книжной библиотеке');
        console.log(`название: ${this.name}`);
        console.log(`кол-во книг: ${this.booksCount}`);
        console.log(`открыта: ${this.isOpen ? 'да' : 'нет'}`);
        console.log(`специализация: ${this.#specialization}`);
    }
    delete() {
        this.name = null;
        this.booksCount = null;
        this.isOpen = null;
        this.#specialization = null;
        
        this.show = () => console.error('объект удален');
        this.copy = () => console.error('объект удален');
        
        console.log('книжная библиотека удалена');
    }
    copy() {
        return this;
    }
    static clone(original) {
        if (original instanceof BookLibrary) {
            return new BookLibrary(
                original.name, 
                original.booksCount, 
                original.isOpen, 
                original.specialization
            );
        }
        return new BookLibrary();
    }
}