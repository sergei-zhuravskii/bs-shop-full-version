
// function create cards

function createCards(arr) {

  let cards = document.querySelector('.main-sections__cards-list'); // cards list

  for (let key of arr) {

    // HTML code <card>

    let card = document.createElement('li');
    card.classList.add('cards-list__card');
    card.dataset.id=`${key.id}`;
    cards.append(card);

    card.innerHTML = `

      <!-- img-wrapper -->

      <div class="card__product-img-wrapper">

        <!-- product-img -->

        <div class="product-img__slider">
          <img src="${key.img1}" alt="Изображение товара" class="product-img" data-name="slider-img" data-img>
          <img src="${key.img2}" alt="Изображение товара" class="product-img" data-name="slider-img">
          <img src="${key.img3}" alt="Изображение товара" class="product-img" data-name="slider-img">
        </div>

        <!-- img switching  -->

        <div class="product-img__btn-switching-wrapper">
          <div class="btn-switching__btn-previous btn-switching">
            <span></span>
            <span></span>
          </div>
          <ul class="btn-switching__switching-position">
            <li class="switching-position__item" data-name="switching-position"></li>
            <li class="switching-position__item" data-name="switching-position"></li>
            <li class="switching-position__item" data-name="switching-position"></li>
          </ul>
          <div class="btn-switching__btn-next btn-switching">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <!-- card__product-info -->

      <ul class="card__product-info">

        <!-- availability -->

        <li class="card__product-info-item product-info__availability">
          <span class="availability-icon">
          </span>
          <span class="availability-value">
            ${key.availability}
          </span>
        </li>

        <!-- title -->

        <li class="card__product-info-item product-info__title">
          ${key.title}
        </li>

        <!-- type -->

        <li class="card__product-info-item product-info__type">
          ${key.type}
        </li>

        <!-- diving -->

        <li class="card__product-info-item product-info__diving">
          ${key.diving}
        </li>

        <!-- length -->

        <li class="card__product-info-item product-info__length">
          <div class="product-info-item__title">Длина:</div>
          <div class="product-info-item__value">${key.length} мм</div>
        </li>

        <!-- weight -->

        <li class="card__product-info-item product-info__weight">
          <div class="product-info-item__title">Вес:</div>
          <div class="product-info-item__value">${key.weight} г</div>
        </li>

        <!-- number -->

        <li class="card__product-info-item product-info__number">
          <div class="product-info-item__title product-info-item__title-number">Артикул:</div>
          <div class="product-info-item__value product-info-item__value-number">${key.number}</div>
        </li>

      </ul>

      <!-- panel-order -->

      <div class="card__panel-order">

        <!-- price -->

        <div class="panel-order__counter-price-wrapper">
          <div class="panel-order__counter-wrapper">
            <div class="btn-counter panel-order__counter-btn btn-counter" data-action="minus">
              <span></span>
            </div>
            <p class="panel-order__counter-value" data-counter>
              1
            </p>
            <div class="panel-order__counter-btn btn-counter" data-action="plus">
              <span></span>
              <span></span>
            </div>
          </div>
          <span class="panel-order__product-price currency">
            ${key.price}
          </span>
        </div>

        <!-- btn-sending-cart -->

        <div class="btn btn-action panel-order__btn-sending-cart">
          <span class="btn-sending-cart__title">
            В корзину
          </span>
        </div>
      </div>
    `;

  }

  // availability value (text color)

  document.querySelectorAll('.cards-list__card').forEach((element) => {

    if (element.querySelector('.availability-value').innerText == 'В наличии') {
      element.querySelector('.availability-icon').classList.add('availability-icon-yes');
      element.querySelector('.availability-value').classList.add('availability-yes');
    } else {
      element.querySelector('.availability-icon').classList.add('availability-icon-no');
      element.querySelector('.availability-value').classList.add('availability-no');
    }

  });

  // show few cards by reboot

  document.querySelectorAll('.cards-list__card').forEach((item) => {
    item.classList.add('card-showing');
  });

}

// export functions

export default createCards; // create cards
