// Родительский класс Библиотека
function Library(name, booksCount, isOpen) {
    // Приватные свойства (через замыкание)
    var _name = name || "Библиотека";
    var _booksCount = booksCount || 0;
    var _isOpen = isOpen || false;

    // Геттеры и сеттеры
    this.getName = function() {
        return _name;
    };

    this.setName = function(value) {
        if (typeof value === 'string' && value.length > 0) {
            _name = value;
            return true;
        } else {
            consoleLog('Ошибка: Название должно быть непустой строкой', 'error');
            return false;
        }
    };

    this.getBooksCount = function() {
        return _booksCount;
    };

    this.setBooksCount = function(value) {
        if (typeof value === 'number' && value >= 0) {
            _booksCount = value;
            return true;
        } else {
            consoleLog('Ошибка: Количество книг должно быть неотрицательным числом', 'error');
            return false;
        }
    };

    this.getIsOpen = function() {
        return _isOpen;
    };

    this.setIsOpen = function(value) {
        if (typeof value === 'boolean') {
            _isOpen = value;
            return true;
        } else {
            consoleLog('Ошибка: Статус должен быть true или false', 'error');
            return false;
        }
    };

    // Условно-приватный метод (доступен только внутри класса)
    function addBooks(count) {
        if (typeof count === 'number' && count > 0) {
            _booksCount += count;
            return true;
        }
        return false;
    }

    // Публичные методы
    this.show = function() {
        var info = '=== Информация о библиотеке ===\n' +
                  'Название: ' + _name + '\n' +
                  'Количество книг: ' + _booksCount + '\n' +
                  'Открыта: ' + (_isOpen ? 'Да' : 'Нет') + '\n' +
                  '==============================';
        consoleLog(info);
        return info;
    };

    this.delete = function() {
        // Удаляем все ссылки на внутренние данные
        _name = null;
        _booksCount = null;
        _isOpen = null;
        
        // Переопределяем методы
        this.show = function() {
            consoleLog('ОШИБКА: Объект библиотеки удален', 'error');
            return 'Объект удален';
        };
        
        this.copy = function() {
            consoleLog('ОШИБКА: Объект библиотеки удален', 'error');
            return null;
        };
        
        consoleLog('✓ Библиотека успешно удалена');
        return true;
    };

    this.copy = function() {
        return this;
    };

    // Публичный метод для доступа к условно-приватному
    this.receiveDonation = function(booksCount) {
        if (addBooks(booksCount)) {
            consoleLog('✓ Получено в дар ' + booksCount + ' книг. Всего книг: ' + _booksCount);
            return true;
        } else {
            consoleLog('Ошибка: Некорректное количество книг для добавления', 'error');
            return false;
        }
    };
}

// Статичный метод clone
Library.clone = function(original) {
    if (original instanceof Library) {
        return new Library(
            original.getName(),
            original.getBooksCount(),
            original.getIsOpen()
        );
    }
    return new Library();
};
