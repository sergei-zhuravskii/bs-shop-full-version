
// импорт функций

// функция (create order) _ создать окно с оформлением заказа

function createOrder() {

  const sectionCart = document.querySelector('.section__cart'); // идентификация (section__cart)
  const mainContainer = document.querySelector('#main-container'); // идентификация (main-container)
  const cartTotalPrice = document.querySelector('.place-order__total-price'); // идентификация (total-price) из корзины

  sectionCart.style.display = 'none'; // скрыть содержимое корзины

  // HTML код секции корзины (section__order)
  const sectionOrder = `

    <!-- section__order -->

    <section class="section__order">

      <!-- section-heading -->

      <h1 class="section-heading">
        Оформление заказа
      </h1>

      <!-- order__order-form -->

      <div class="order__order-form">
        <!-- order-form__items-wrapper info -->
        <ul class="order-form__items-wrapper">

          <!-- order-form__item contacts -->

          <li class="order-form__item-info">
            <p class="item-heading">
              Контактные данные покупателя
            </p>
            <div class="order-form__info-content">
              <p class="order-form__info-text">
                Имя <span class="data-title-note">*</span>
              </p>
              <input type="text" class="order-form__info-input" id="clientName" placeholder="Введите имя">
            </div>
            <div class="order-form__info-content">
              <p class="order-form__info-text">
                Телефон <span class="data-title-note">*</span>
              </p>
              <input type="tel" class="order-form__info-input" id="clientPhone" placeholder="Введите телефон">
            </div>
            <div class="order-form__info-content order-form__info-content_margin-bottom-30">
              <p class="order-form__info-text">
                Email
              </p>
              <input type="email" class="order-form__info-input" id="clientEmail" placeholder="Введите Email">
            </div>
            <p class="order__data-note font-main">
              (<span class="data-title-note">*</span>) Поля обязательные для заполнения.
            </p>
          </li>

          <!-- order-form__item delivery -->

          <li class="order-form__item-info">
            <p class="item-heading">
              Доставка
            </p>
            <div class="order-form__info-content order-form__info-content_margin-bottom-30">
              <p class="order-form__info-text">
                Адрес доставки
              </p>
              <input type="text" class="order-form__info-input" id="clientAdress" placeholder="Введите адрес доставки">
            </div>
            <div class="order-form__info-checkbox-wrapper">
              <input type="checkbox" class="checkbox-selection__item" id="checkbox-delivery-1" value="300" data-delivery>
              <label for="checkbox-delivery-1" class="checkbox-selection__item-value">
                <span class="checkbox-selection__content-text">
                  Курьерская доставка по Санкт-Петербургу (в пределах КАД)
                </span>
              </label>
              <span class="checkbox-selection__content-value currency">
                + 300
              </span>
            </div>
            <div class="order-form__info-checkbox-wrapper">
              <input type="checkbox" class="checkbox-selection__item" id="checkbox-delivery-2" value="500" data-delivery>
              <label for="checkbox-delivery-2" class="checkbox-selection__item-value">
                <span class="checkbox-selection__content-text">
                  Курьерская доставка по Санкт-Петербургу и Ленинградской области (за пределами КАД, но не далее 30 км)
                </span>
              </label>
              <span class="checkbox-selection__content-value currency">
                + 500
              </span>
            </div>
            <div class="order-form__info-checkbox-wrapper">
              <input type="checkbox" class="checkbox-selection__item" id="checkbox-delivery-3" value="350" data-delivery>
              <label for="checkbox-delivery-3" class="checkbox-selection__item-value">
                <span class="checkbox-selection__content-text">
                  Доставка транспортной компанией DPD
                </span>
              </label>
              <span class="checkbox-selection__content-value currency">
                + 350
              </span>
            </div>
            <div class="order-form__info-checkbox-wrapper">
              <input type="checkbox" class="checkbox-selection__item" id="checkbox-delivery-4" value="250" data-delivery>
              <label for="checkbox-delivery-4" class="checkbox-selection__item-value">
                <span class="checkbox-selection__content-text">
                  Доставка почтой России
                </span>
              </label>
              <span class="checkbox-selection__content-value currency">
                + 250
              </span>
            </div>
            <div class="order-form__info-checkbox-wrapper order-form__info-checkbox-wrapper_margin-bottom-30">
            <input type="checkbox" class="checkbox-selection__item" id="checkbox-delivery-5" value="0" data-delivery>
            <label for="checkbox-delivery-5" class="checkbox-selection__item-value">
              <span class="checkbox-selection__content-text checkbox-selection__content-text_no-delivery">
                Без доставки (самовывоз)
              </span>
            </label>
          </div>
            <p class="order-form__info-content">
              (!) При сумме заказа от 5 000 ₽ доставка бесплатная.
            </p>
          </li>

          <!-- order-form__item payment -->

          <li class="order-form__item-info">
            <p class="item-heading">
              Способы оплаты
            </p>
            <div class="order-form__info-checkbox-wrapper">
              <input type="checkbox" class="checkbox-selection__item" id="checkbox-payment-1" value="0" data-payment>
              <label for="checkbox-payment-1" class="checkbox-selection__item-value">
                <span class="checkbox-selection__content-text">
                  Оплата при получении
                </span>
              </label>
              <p class="checkbox-selection__content-value"></p>
            </div>
            <div class="order-form__info-checkbox-wrapper">
              <input type="checkbox" class="checkbox-selection__item" id="checkbox-payment-2" value="-50" data-payment>
              <label for="checkbox-payment-2" class="checkbox-selection__item-value">
                <span class="checkbox-selection__content-text">
                  Онлайн оплата
                </span>
              </label>
              <span class="checkbox-selection__content-value currency">
                - 50
              </span>
            </div>
          </li>

          <!-- order-form__item comment -->

          <li class="order-form__item-info">
            <p class="item-heading">
              Оставить комментарий к заказу
            </p>
            <textarea class="order-form__info-textarea" id="clientComment" placeholder="Комментарий к заказу"></textarea>
          </li>
          <!-- order-form__item confirmation -->
          <li class="order-form__confirmation-btn-wrapper">
            <div class="order-form__confirmation-btn btn-action">
              <span class="confirmation-btn__title">
                Подтвердить заказ
              </span>
            </div>
          </li>
        </ul>

        <!-- order-form__items-wrapper price calculation -->

        <ul class="order-form__items-wrapper">

          <!-- order-form__item current-calculation -->

          <li class="order-form__item-calculation">
            <div class="order-form__calculation-content">
              <p class="order-form__calculation-text">
                Стоимость товаров в корзине:
              </p>
              <span class="order-form__calculation-value currency" data-name="price-cart">
                0
              </span>
            </div>
            <div class="order-form__calculation-content">
              <p class="order-form__calculation-text">
                Стоимость доставки:
              </p>
              <span class="order-form__calculation-value currency" data-name="price-delivery">
                0
              </span>
            </div>
            <div class="order-form__calculation-content">
              <p class="order-form__calculation-text">
                Скидка за способ оплаты:
              </p>
              <span class="order-form__calculation-value currency" data-name="price-payment">
                0
              </span>
            </div>
          </li>

          <!-- order-form__item total-calculation -->

          <li class="order-form__item-calculation">
            <div class="order-form__calculation-content">
              <p class="order-form__calculation-text_final">
                Итого к оплате:
              </p>
              <span class="order-form__calculation-value_final currency" data-name="order-price-total">
                0
              </span>
            </div>
          </li>
        </ul>
      </div>

      <!-- order-confirmation  --><!-- modal-window -->

      <div class="order__modal-container hidden" id="orderConfirmationWindow">
        <div class="order__modal">
          <p class="order__modal-text">
            Заказ успешно создан.
          </p>
          <p class="order__modal-text">
            Номер вашего заказа - № <span class="order__modal-number"></span>.
          </p>
          <div class="order__modal-btn btn-cancel" id="orderConfirmationBtnClose">
            <span class="order__modal-btn-title">
              Закрыть
            </span>
          </div>
        </div>
      </div>
    </section>

  `;

  // вставка HTML кода окна оформления заказа (section__order) в конце (main-container)
  mainContainer.insertAdjacentHTML('beforeend', sectionOrder);

  // расчет стоимости заказа

  const priceCart = document.querySelector('[data-name="price-cart"]'); // идентификация цены из корзины
  const priceDelivery = document.querySelector('[data-name="price-delivery"]'); // идентификация стоимости доставки
  const pricePayment = document.querySelector('[data-name="price-payment"]'); // идентификация стоимости за способ оплаты
  const priceTotal = document.querySelector('[data-name="order-price-total"]'); // идентификация окончательной стоимости

  priceCart.innerText = cartTotalPrice.innerText; // обновление стоимости товаров (из корзины)

  function calculateTotalPrice() {  // функция расчета окончательной стоимости
    priceTotal.innerText = parseInt(priceCart.innerText) + parseInt(priceDelivery.innerText) + parseInt(pricePayment.innerText);
  };

  calculateTotalPrice(); // запуск функции расчета окончательной стоимости

  const checkboxDeliveryMethods = document.querySelectorAll('[data-delivery]'); // идентификация списка checkbox (по способу доставки)

  checkboxDeliveryMethods.forEach(item => item.addEventListener('click', function(event) {  // выбор способа доставки

    if (priceCart.innerText < 5000) {
      priceDelivery.innerText = parseInt(item.value); // стоимость доставки при стоимости товаров менее 5000 р.
    } else {
      priceDelivery.innerText = 0; // стоимость доставки равна 0 при стоимости товаров более 5000 р.
    }

    checkboxDeliveryMethods.forEach(element => element.checked = false); // убрать флажки со всех checkbox

    event.target.checked = true; // добавить флажок только к выбранному checkbox

    calculateTotalPrice(); // запуск функции расчета окончательной стоимости
  }));

  const checkboxPaymentMethods = document.querySelectorAll('[data-payment]'); // идентификация списка checkbox (по способу оплаты)

  checkboxPaymentMethods.forEach(item => item.addEventListener('click', function(event) {  // выбор способа оплаты
    pricePayment.innerText = parseInt(item.value); // стоимость скидки по способу оплаты

    checkboxPaymentMethods.forEach(element => element.checked = false); // убрать флажки со всех checkbox

    event.target.checked = true; // добавить флажок только к выбранному checkbox

    calculateTotalPrice(); // запуск функции расчета окончательной стоимости
  }));

  // показать окно с подтверждением заказа
  const orderConfirmationBtn = document.querySelector('.order-form__confirmation-btn'); // идентификация кнопки подтверждения заказа

  orderConfirmationBtn.addEventListener('click', function сonfirmOrder() { // функция подтверждения и отправки заказа

    // идентификация данных полей ввода

    const clientName = document.querySelector('#clientName'); // имя покупателя
    const clientPhone = document.querySelector('#clientPhone'); // телефон покупателя
    const clientEmail = document.querySelector('#clientEmail'); // эл. почта покупателя
    const clientAdress = document.querySelector('#clientAdress'); // адрес покупателя
    const clientComment = document.querySelector('#clientComment'); // комментарий покупателя

    // проверка введенных данных в необходимые поля ввода

    if (clientName.value === '') {
      clientName.classList.add('order-form__info-input_no-data'); // выделить поле ввода (Имя) без введенных данных
    } if (clientPhone.value === '') {
      clientPhone.classList.add('order-form__info-input_no-data'); // выделить поле ввода (Телефон) без введенных данных
    } if (clientName.value === '' || clientPhone.value === '') {
      alert('Не заполнены все необходимые поля ввода данных'); // вывод сообщения о необходимости ввода всех необходимых данных в поля ввода
    } else {

      // показать окно с подтверждением заказа

      const orderConfirmationWindow = document.querySelector('#orderConfirmationWindow'); // идентификация модального окна с подтверждением заказа

      const body = document.querySelector('body'); // идентификация <body>
      body.classList.add('body-scroll-off'); // фиксация <body>

      orderConfirmationWindow.classList.remove('hidden'); // показать модальное окно с подтверждением заказа

      const orderNumber = document.querySelector('.order__modal-number'); // идентификация номера заказа
      const orderConfirmationBtnClose = document.querySelector('#orderConfirmationBtnClose'); // идентификация кнопки закрытия панели модального окна с подтверждением заказа

      orderNumber.innerText = Math.round(Math.random() * 500); // присвоить случайный номер к заказу

      // идентификация данных полей ввода

      // const clientName = document.querySelector('#clientName'); // имя покупателя
      // const clientPhone = document.querySelector('#clientPhone'); // телефон покупателя
      // const clientEmail = document.querySelector('#clientEmail'); // эл. почта покупателя
      // const clientAdress = document.querySelector('#clientAdress'); // адрес покупателя
      // const clientComment = document.querySelector('#clientComment'); // комментарий покупателя

      // сформировать информацию о покупателе и заказе

      const orderInfo = {

        order: orderNumber.innerText,
        client: clientName.value,
        phone: clientPhone.value,
        email: clientEmail.value,
        adress: clientAdress.value,
        comment: clientComment.value,

      };

      console.log(orderInfo); // вывод информации о покупателе и заказе в консоль

      // закрыть модальное окно подтверждения заказа

      orderConfirmationBtnClose.addEventListener('click', function closeOrderConfirmationWindow() {

        body.classList.remove('body-scroll-off'); // убрать фиксацию <body>

        location.reload(); // переход на главную страницу

      });

    }

  });

}

// экспорт функций

export default createOrder; // создать окно с оформлением заказа
