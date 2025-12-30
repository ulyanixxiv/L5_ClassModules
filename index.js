// Глобальная функция для вывода в HTML
function consoleLog(message, type) {
    var outputDiv = document.getElementById('output');
    var current = outputDiv.innerHTML;
    
    var prefix = '';
    if (type === 'error') {
        prefix = '<span style="color: red;">[ОШИБКА] </span>';
    } else if (type === 'success') {
        prefix = '<span style="color: green;">[УСПЕХ] </span>';
    }
    
    outputDiv.innerHTML = current + prefix + message.replace(/\n/g, '<br>') + '<br><br>';
    outputDiv.scrollTop = outputDiv.scrollHeight; // Автопрокрутка
}

function clearOutput() {
    document.getElementById('output').innerHTML = 'Вывод очищен.<br><br>';
}

// Основная демонстрация
function runDemo() {
    clearOutput();
    consoleLog('=== ДЕМОНСТРАЦИЯ РАБОТЫ БИБЛИОТЕК ===', 'success');
    
    // Создаем массив из 2 экземпляров класса с разными значениями
    consoleLog('1. Создаем две книжные библиотеки:', 'success');
    var libraries = [
        new BookLibrary("Центральная библиотека", 5000, true, "Художественная литература"),
        new BookLibrary("Научная библиотека", 3000, false, "Научная литература")
    ];
    
    // Вызываем метод show для обоих экземпляров
    consoleLog('2. Выводим информацию о библиотеках:', 'success');
    libraries[0].show();
    libraries[1].show();
    
    // Демонстрация дополнительных возможностей
    consoleLog('3. Демонстрация работы геттеров и сеттеров:', 'success');
    consoleLog('Название первой библиотеки: ' + libraries[0].getName());
    
    // Изменяем количество книг
    libraries[0].setBooksCount(5500);
    consoleLog('Обновленное количество книг в первой библиотеке: ' + libraries[0].getBooksCount());
    
    // Принимаем пожертвование книг
    consoleLog('4. Принимаем пожертвование книг:', 'success');
    libraries[1].receiveDonation(200);
    libraries[1].show();
    
    // Демонстрация работы clone
    consoleLog('5. Демонстрация метода clone:', 'success');
    var clonedLibrary = BookLibrary.clone(libraries[0]);
    consoleLog('Создан клон первой библиотеки:');
    clonedLibrary.show();
    consoleLog('Оригинал и клон - один и тот же объект? ' + (libraries[0] === clonedLibrary));
    consoleLog('Но данные одинаковые? ' + 
        (libraries[0].getName() === clonedLibrary.getName() && 
         libraries[0].getBooksCount() === clonedLibrary.getBooksCount()));
    
    // Демонстрация работы copy
    consoleLog('6. Демонстрация метода copy:', 'success');
    var copiedLibrary = libraries[0].copy();
    consoleLog('Создана копия (ссылка) на первую библиотеку:');
    consoleLog('Оригинал и копия - один и тот же объект? ' + (libraries[0] === copiedLibrary));
    
    // Изменение специализации
    consoleLog('7. Изменяем специализацию библиотеки:', 'success');
    libraries[0].changeSpecialization("Классическая литература");
    libraries[0].show();
}

// Тестирование различных методов
function testMethods() {
    clearOutput();
    consoleLog('=== ТЕСТИРОВАНИЕ МЕТОДОВ ===', 'success');
    
    // Тест 1: Создание и базовые операции
    consoleLog('Тест 1: Создание библиотеки', 'success');
    var testLib = new BookLibrary("Тестовая библиотека", 100, true, "Техническая");
    testLib.show();
    
    // Тест 2: Ошибочные данные в сеттерах
    consoleLog('Тест 2: Проверка валидации в сеттерах', 'success');
    testLib.setBooksCount(-10); // Должна быть ошибка
    testLib.setName(""); // Должна быть ошибка
    testLib.setIsOpen("да"); // Должна быть ошибка
    testLib.setSpecialization(""); // Должна быть ошибка
    
    // Тест 3: Метод delete
    consoleLog('Тест 3: Метод delete', 'success');
    var libToDelete = new BookLibrary("Библиотека для удаления", 50, false, "Временная");
    libToDelete.show();
    libToDelete.delete();
    consoleLog('Попытка показать удаленную библиотеку:');
    libToDelete.show();
    
    // Тест 4: Создание через родительский класс
    consoleLog('Тест 4: Родительский класс Library', 'success');
    var parentLib = new Library("Родительская библиотека", 2000, false);
    parentLib.show();
    parentLib.receiveDonation(500);
    parentLib.show();
    
    // Тест 5: Клонирование родительского класса
    consoleLog('Тест 5: Клонирование через статический метод', 'success');
    var clonedParent = Library.clone(parentLib);
    clonedParent.show();
    consoleLog('Это разные объекты? ' + (parentLib !== clonedParent));
}

// Инициализация при загрузке
window.onload = function() {
    consoleLog('Система управления библиотеками готова к работе!', 'success');
    consoleLog('Нажмите "Запустить демонстрацию" для просмотра примера работы.', 'success');
    consoleLog('Нажмите "Тестировать методы" для проверки всех функций.', 'success');
};
