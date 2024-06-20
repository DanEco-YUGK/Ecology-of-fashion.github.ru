document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            
            // Получаем данные товара из кнопки
            const name = button.getAttribute("data-name");
            const price = parseFloat(button.getAttribute("data-price"));
            const image = button.getAttribute("data-image");

            // Создаем объект товара
            const item = {
                name: name,
                price: price,
                image: image,
                quantity: 1 // Начальное количество товара
            };

            // Получаем текущую корзину из localStorage
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Добавляем новый товар в корзину
            cart.push(item);

            // Сохраняем обновленную корзину в localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Оповещаем пользователя о добавлении товара
            alert("Товар успешно добавлен в корзину!");

            // Для отладки вы можете вывести объект товара в консоль
            console.log("Товар добавлен в корзину:", item);
        });
    });
});
