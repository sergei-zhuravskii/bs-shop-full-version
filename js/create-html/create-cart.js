
// импорт функций

import calculateCartPrice from '/bs-shop-full-version/showing/calculate-cart-price.js'; // расчет цены в корзине (desctop version)

import createOrder from '/bs-shop-full-version/create-html/create-order.js'; // создать окно с оформлением заказа

// функция (create cart) _ создать корзину

function createCart(arr) {

  const mainContainer = document.querySelector('#main-container'); // идентификация (main-container)
  const sectionMainPage = document.querySelector('.section__main-page'); // идентификация (section__main-page)
  const cards = document.querySelectorAll('.cards-list__card'); // идентификация списка карточек (cards)

  // HTML код секции корзины (section__cart)
  const sectionCart = `

    <!-- section__cart -->

    <section class="section__cart hidden">

      <!-- section-heading -->

      <h1 class="section-heading section-heading_cart">
        Корзина
      </h1>

      <!-- cart__empty-cart-container -->

      <div class="cart__empty-cart-container">
        <p class="empty-cart__heading">
          В корзине еще нет товаров
        </p>
      </div>

      <!-- cart__products-list -->

      <ul class="cart__products-list">

        <!-- products-list created by Java Script -->

      </ul>

      <!-- cart__place-order -->

      <div class="cart__place-order-wrapper">
        <div class="place-order__total-price-wrapper">
          <span class="place-order__total-price-meaning">
            Итого:
          </span>
          <span class="place-order__total-price currency">
            0
          </span>
        </div>
        <div class="place-order__btn-wrapper">
          <div class="btn btn-action place-order__confirm-order-btn">
            <span class="confirm-order-btn__title">
              Оформить заказ
            </span>
          </div>
        </div>
      </div>
    </section>

  `;

  // вставка HTML кода секции корзины (section__cart) в конце (main-container)
  mainContainer.insertAdjacentHTML('beforeend', sectionCart);

  // проход по всем карточкам (cards)
  cards.forEach((card) => {

    const btnSendingCart = card.querySelector('.panel-order__btn-sending-cart'); // идентификация текущей кнопки (В корзину)

    // клик по кнопке (В корзину)
    btnSendingCart.addEventListener('click', function createCardInfo() {

      // инициализация контейнера (корзина пуста)
      const emptyCartContainer = document.querySelector('.cart__empty-cart-container');

      // удаление контейнера (корзина пуста)
      emptyCartContainer.style.display = 'none';

      // инициализация контейнера c оформлением / отменой заказа
      const placeOrderWrapper = document.querySelector('.cart__place-order-wrapper');

      // добавление контейнера c оформлением / отменой заказа
      placeOrderWrapper.style.display = 'flex';

      // создание объекта с параметрами товара
      const cardInfo = {
        id: card.dataset.id,
        img: card.querySelector('[data-img]').getAttribute('src'),
        type: card.querySelector('.product-info__type').innerText,
        title: card.querySelector('.product-info__title').innerText,
        quantity: card.querySelector('.panel-order__counter-value').innerText,
        price: card.querySelector('.panel-order__product-price').innerText,
        number: card.querySelector('.product-info-item__value-number').innerText,
      };

      // изменение надписи на кнопке (В корзину) - (Товар в корзине) после клика
      btnSendingCart.querySelector('.btn-sending-cart__title').innerText = 'Товар в корзине';

      // изменение цвета кнопки после клика
      btnSendingCart.classList.add('btn-sending-cart_active');

      const cartProductsList = document.querySelector('.cart__products-list'); // инициализация списка товаров в корзине

      const productInCart = cartProductsList.querySelector(`[data-id="${cardInfo.id}"]`); // инициализация товара, уже находящегося в корзине

      // проверка на наличие товара, уже находящегося в корзине (изменение его количества без дублирования)
      if (productInCart) {
        let quantityOfProductInCart = productInCart.querySelector('.product-price__counter-value'); // инициализация счетчика

        quantityOfProductInCart.innerText = parseInt(quantityOfProductInCart.innerText) + parseInt(cardInfo.quantity); // обновление количества в счетчике

      } else {

        // создание каждой позиции в списке товаров в корзине
        let cartProduct = `

          <li class="products-list__product-item" data-id="${cardInfo.id}" data-number="${cardInfo.number}">

            <!-- product-item__product-description-wrapper -->

            <div class="product-item__product-description-wrapper">
              <div class="product-description__img-wrapper">
                <img src="${cardInfo.img}" alt="Изображение товара" class="product-description__img"> <!-- изменяемая переменная -->
              </div>
              <div class="product-description__title-wrapper">
                <!-- product-description__title_type-model -->
                <div class="product-description__title_type-wrapper">
                  <span class="product-description__title_type">
                    ${cardInfo.type}
                  </span> <!-- изменяемая переменная -->
                </div>&nbsp;
                <div class="product-description__title_model-wrapper">
                  <span class="product-description__title_model">
                    ${cardInfo.title}
                  </span> <!-- изменяемая переменная -->
                </div>
              </div>
            </div>

            <!-- product-item__product-price -->

            <div class="product-item__product-price-wrapper">
              <div class="product-item__product-price">
                <div class="product-price__price-wrapper">
                  <span class="product-price__product-price currency">
                    ${cardInfo.price}
                  </span>
                </div>
                <div class="product-price__counter-wrapper">
                  <div class="product-price__counter-btn btn-counter" data-action="cart-minus">
                  </div>
                    <span class="product-price__counter-value" data-counter data-quantity>
                      ${cardInfo.quantity}
                    </span>
                  <div class="product-price__counter-btn btn-counter" data-action="cart-plus">
                  </div>
                </div>
                <div class="product-price__total-price-wrapper">
                  <span class="product-price__total-price currency">
                    0
                  </span>
                </div>
              </div>
              <div class="product-price__btn-delete" data-btn="delete-cart-item">
              </div>
            </div>
          </li>

        `;

      // добавление каждой позиции в конец списка товаров в корзине
      cartProductsList.insertAdjacentHTML('beforeend', cartProduct);

      }

      // добавление счетчика (количества) товаров в корзине на иконке корзины в <header>

      const cartIconCounter = document.querySelector('.cart-icon__counter'); // инициализация счетчика корзины (desktop version)
      const cartIconCounterMobile = document.querySelector('.cart-icon__counter_mobile'); // инициализация счетчика корзины (mobile version)

      const addedProductsQuantity = document.querySelectorAll('.products-list__product-item').length; // количество товаров в корзине (длина массива товаров)

      cartIconCounter.innerText = parseInt(addedProductsQuantity); // обновление счетчика товаров в корзине (desktop version)
      cartIconCounterMobile.innerText = parseInt(addedProductsQuantity); // обновление счетчика товаров в корзине (mobile version)

    });

  });

  // открытие корзины
  const cartIcon = document.querySelector('.header-top__shopping-cart-icon-link'); // идентификация иконки корзины (cart) (desktop version)
  const cartIconMobile = document.querySelector('.shopping-cart-icon_mobile'); // идентификация иконки корзины (cart) (mobile version)

  function showCart() {  // функция клика по иконке корзины

    document.querySelector('.section__cart').classList.remove('hidden'); // добавление стиля видимости для корзины

    sectionMainPage.remove(); // удаление содержимого главной страницы

    calculateCartPrice(); // запуск функции расчета стоимости товаров и заказа в корзине

    // открытие окна с оформлением заказа
    const confirmOrderBtn = document.querySelector('.place-order__confirm-order-btn'); // идентификация кнопки на оформление заказа

    confirmOrderBtn.addEventListener('click', createOrder) // запуск функции на создание окна с оформлением заказа

  };

  // клик по иконке корзины (desktop version)
  cartIcon.addEventListener('click', showCart);

  // клик по иконке корзины (mobile version)
  cartIconMobile.addEventListener('click', showCart);

}

// экспорт функций

export default createCart; // создать корзину
