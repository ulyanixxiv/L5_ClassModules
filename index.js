import { BookLibrary } from './BookLibrary.js';

const libraries = [
    new BookLibrary("центральная библиотека", 5000, true, "художественная литература"),
    new BookLibrary("научная библиотека", 3000, false, "научная литература")
];
console.log('демонстрация работы библиотек:');
libraries[0].show();
libraries[1].show();
console.log('\nдополнительные возможности:');
console.log(`название первой библиотеки: ${libraries[0].name}`);
libraries[0].booksCount = 5500;
console.log(`обновленное количество книг: ${libraries[0].booksCount}`);
libraries[1].receiveDonation(200);
libraries[1].show();
const clonedLibrary = BookLibrary.clone(libraries[0]);
console.log('\nклонированная библиотека:');
clonedLibrary.show();
console.log('оригинал и клон одинаковы?', libraries[0] === clonedLibrary);
const copiedLibrary = libraries[0].copy();
console.log('оригинал и копия одинаковы?', libraries[0] === copiedLibrary);