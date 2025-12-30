// Дочерний класс КнижнаяБиблиотека
function BookLibrary(name, booksCount, isOpen, specialization) {
    // Наследуем свойства родителя
    Library.call(this, name, booksCount, isOpen);
    
    // Новое приватное свойство
    var _specialization = specialization || "Общая";
    
    // Сохраняем оригинальные методы родителя
    var parentShow = this.show;
    var parentDelete = this.delete;
    var parentCopy = this.copy;
    
    // Геттер и сеттер для specialization
    this.getSpecialization = function() {
        return _specialization;
    };
    
    this.setSpecialization = function(value) {
        if (typeof value === 'string' && value.length > 0) {
            _specialization = value;
            return true;
        } else {
            consoleLog('Ошибка: Специализация должна быть непустой строкой', 'error');
            return false;
        }
    };
    
    // Переопределяем метод show
    this.show = function() {
        var info = '=== Информация о книжной библиотеке ===\n' +
                  'Название: ' + this.getName() + '\n' +
                  'Количество книг: ' + this.getBooksCount() + '\n' +
                  'Открыта: ' + (this.getIsOpen() ? 'Да' : 'Нет') + '\n' +
                  'Специализация: ' + _specialization + '\n' +
                  '=======================================';
        consoleLog(info);
        return info;
    };
    
    // Переопределяем метод delete
    this.delete = function() {
        // Удаляем свойства дочернего класса
        _specialization = null;
        
        // Вызываем метод delete родителя
        parentDelete.call(this);
        
        consoleLog('✓ Книжная библиотека удалена');
        return true;
    };
    
    // Переопределяем метод copy
    this.copy = function() {
        return this;
    };
    
    // Новый метод для дочернего класса
    this.changeSpecialization = function(newSpecialization) {
        var oldSpec = _specialization;
        if (this.setSpecialization(newSpecialization)) {
            consoleLog('✓ Специализация изменена с "' + oldSpec + '" на "' + newSpecialization + '"');
            return true;
        }
        return false;
    };
}

// Наследование (прототипное наследование)
BookLibrary.prototype = Object.create(Library.prototype);
BookLibrary.prototype.constructor = BookLibrary;

// Статичный метод clone для BookLibrary
BookLibrary.clone = function(original) {
    if (original instanceof BookLibrary) {
        return new BookLibrary(
            original.getName(),
            original.getBooksCount(),
            original.getIsOpen(),
            original.getSpecialization()
        );
    }
    return new BookLibrary();
};
