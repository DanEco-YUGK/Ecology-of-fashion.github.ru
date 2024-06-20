let db;
const dbName = 'warehouseDB';
const dbVersion = 1;

const request = indexedDB.open(dbName, dbVersion);

request.onerror = function(event) {
    console.error("Ошибка при открытии базы данных:", event.target.errorCode);
};

request.onupgradeneeded = function(event) {
    db = event.target.result;
    
    // Создаем объектное хранилище для товаров
    const store = db.createObjectStore('products', { keyPath: 'id' });
    
    // Добавляем индекс для поиска товаров по id
    store.createIndex('id', 'id', { unique: true });

    // Вставляем начальные данные, если база данных создается впервые
    store.transaction.oncomplete = function() {
        const productsStore = db.transaction('products', 'readwrite').objectStore('products');
        const productsData = [
            { id: 1, name: "Шорты 'Летний бриз'", price: 2701, quantity: 10 },
            // Добавьте другие товары по аналогии
        ];
        productsData.forEach(function(product) {
            productsStore.add(product);
        });
    };
};

request.onsuccess = function(event) {
    db = event.target.result;
    console.log("База данных открыта успешно");
};
