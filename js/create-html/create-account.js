
// импорт функций

// функция (create account) _ вход в зарегистрированный аккаунт (личный кабинет)

function createAccount() {

  // восстановление учетных данных

  const recoverAccountBtn = document.querySelector('.help-panel__recover'); // идентификация кнопки на восстановление учетных данных
  const mainContainer = document.querySelector('#main-container'); // идентификация (main-container)
  const sectionAccountEntry = document.querySelector('.section__account-entry'); // идентификация (section__account-entry)

  recoverAccountBtn.addEventListener('click', function recoverAccountData() {  // функция на восстановление учетных данных

    const recoverAccountPanel = document.querySelector('.account-entry__modal-container'); // идентификация панели на восстановление учетных данных

    recoverAccountPanel.classList.remove('hidden'); // показать панель на восстановление учетных данных

    const recoverAccountPanelBtnAccept = document.querySelector('.account-entry__modal-btn-send'); // идентификация кнопки на отправку учетных данных
    const recoverAccountPanelBtnClose = document.querySelector('.account-entry__modal-btn-cancel'); // идентификация кнопки на закрытие панели восстановления учетных данных
    const clientEmail = document.querySelector('.account-entry__modal-input'); // идентификация данных поля ввода (email)

    clientEmail.classList.remove('account-entry__modal-input_no-data'); // восстановить изначальные стили для поля ввода (Email)

    recoverAccountPanelBtnAccept.addEventListener('click', function acceptRecoverAccountPanel() {  // функция на отправку учетных данных

      if (clientEmail.value === '') {
        clientEmail.classList.add('account-entry__modal-input_no-data'); // выделить поле ввода (Email) без введенных данных

        alert('Не заполнено необходимое поле ввода данных.'); // вывод сообщения о необходимости ввода всех необходимых данных в поле ввода
      } else {
        recoverAccountPanel.classList.add('hidden'); // скрыть панель на восстановление учетных данных

        alert(`На электронную почту (${clientEmail.value}) отправлена ссылка для восстановления пароля вашей учётной записи.`); // вывод сообщения об отправке ссылки на восстановление учетных данных
      }

    });

    recoverAccountPanelBtnClose.addEventListener('click', function closeRecoverAccountPanel() {  // функция на закрытие панели восстановления учетных данных

      recoverAccountPanel.classList.add('hidden'); // скрыть панель на восстановление учетных данных

    });

  });

  /////////////////////////////////////////////////////

  // регистрация нового пользователя

  const registerAccountBtn = document.querySelector('.help-panel__register'); // идентификация кнопки на регистрацию новой учетной записи

  registerAccountBtn.addEventListener('click', function registerAccount() {  // функция на регистрацию новой учетной записи

    sectionAccountEntry.style.display = 'none'; // скрыть панель входа в аккаунт

    // HTML код панели регистрации новой учетной записи (section__registration)
    const sectionRegistration = `

      <!-- section__registration -->

      <section class="section__registration">

        <!-- section-heading -->

        <h1 class="section-heading">
          Регистрация нового пользователя
        </h1>

        <!-- registration__items -->

        <div class="registration__items-wrapper">

          <!-- registration__data -->

          <ul class="registration__data">
            <li class="registration__data-item">
              <p class="registration__data-title font-main">
                Имя <span class="data-title-note">*</span>
              </p>
              <input type="text" class="registration__data-input" placeholder="Введите имя" id="registrationName">
            </li>
            <li class="registration__data-item">
              <p class="registration__data-title font-main">
                Фамилия
              </p>
              <input type="text" class="registration__data-input" placeholder="Введите фамилию" id="registrationSurname">
            </li>
            <li class="registration__data-item">
              <p class="registration__data-title font-main">
                Телефон
              </p>
              <input type="tel" class="registration__data-input" placeholder="Введите телефон" id="registrationPhone">
            </li>
            <li class="registration__data-item">
              <p class="registration__data-title font-main">
                Email <span class="data-title-note">*</span>
              </p>
              <input type="email" class="registration__data-input" placeholder="Введите Email" id="registrationEmail">
            </li>
            <li class="registration__data-item">
              <p class="registration__data-title font-main">
                Придумайте пароль <span class="data-title-note">*</span>
              </p>
              <input type="password" class="registration__data-input" placeholder="Введите пароль" id="registrationPasswordFirst">
            </li>
            <li class="registration__data-item">
              <p class="registration__data-title font-main">
                Подтведите пароль <span class="data-title-note">*</span>
              </p>
              <input type="password" class="registration__data-input" placeholder="Введите пароль" id="registrationPasswordSecond">
            </li>
            <li class="registration__data-item">
              <p class="registration__data-note font-main">
                (<span class="data-title-note">*</span>) Поля обязательные для заполнения.
              </p>
            </li>
          </ul>

          <!-- registration__conditions -->

          <div class="registration__conditions">
            <p class="registration__conditions-item font-main">
              Отправляя форму, даю <a href="/personal-data.html" target="_blank" class="registration__conditions-item-link">Согласие на обработку моих персональных данных</a>.
            </p>
            <p class="registration__conditions-item font-main">
              С положениями <a href="/privacy-policy.html" target="_blank" class="registration__conditions-item-link">Политики конфиденциальности ознакомлен</a>.
            </p>
          </div>

          <!-- registration__btn -->

          <div class="registration__btn-wrapper">
            <div class="registration__btn btn-action">
              <span class="btn-registration__title">
                Регистрация
              </span>
            </div>
          </div>
        </div>

      </section>

    `;

    // вставка HTML кода панели регистрации новой учетной записи (section__registration) в конце (main-container)

    mainContainer.insertAdjacentHTML('beforeend', sectionRegistration);

    // показать окно с подтверждением регистрации

    const registrationConfirmationBtn = document.querySelector('.registration__btn'); // идентификация кнопки подтверждения регистрации

    registrationConfirmationBtn.addEventListener('click', function сonfirmRegistration() { // функция подтверждения регистрации

      const registrationName = document.querySelector('#registrationName'); // имя пользователя
      const registrationSurname = document.querySelector('#registrationSurname'); // фамилия пользователя
      const registrationPhone = document.querySelector('#registrationPhone'); // телефон пользователя
      const registrationEmail = document.querySelector('#registrationEmail'); // эл. почта пользователя
      const registrationPasswordFirst = document.querySelector('#registrationPasswordFirst'); // пароль пользователя
      const registrationPasswordSecond = document.querySelector('#registrationPasswordSecond'); // пароль пользователя подтверждающий

      // HTML код окна подтверждения регистрации новой учетной записи

      const registrationConfirmationWindow = `

        <!-- confirmation-registration --><!-- modal-window -->

        <div class="registration__modal-container hidden">
          <div class="registration__modal">
            <p class="registration__modal-text">
              Учетная запись (${registrationName.value}) успешно зарегистрирована на сайте интернет-магазина Baitstore.
            </p>
            <div class="registration__modal-btn-cancel btn-cancel">
              <span class="registration__modal-btn-title">
                Закрыть
              </span>
            </div>
          </div>
        </div>

      `;

      // вставка HTML кода окна подтверждения регистрации новой учетной записи в конце (section__registration)

      document.querySelector('.section__registration').insertAdjacentHTML('beforeend', registrationConfirmationWindow);

      // проверка введенных данных в необходимые поля ввода

      if (registrationName.value === '') {
        registrationName.classList.add('registration__data-input_no-data'); // выделить поле ввода (Имя) без введенных данных
      } if (registrationEmail.value === '') {
        registrationEmail.classList.add('registration__data-input_no-data'); // выделить поле ввода (Эл. почта) без введенных данных
      } if (registrationPasswordFirst.value === '') {
        registrationPasswordFirst.classList.add('registration__data-input_no-data'); // выделить поле ввода (Пароль) без введенных данных
      } if (registrationPasswordSecond.value === '') {
        registrationPasswordSecond.classList.add('registration__data-input_no-data'); // выделить поле ввода (Пароль подтверждающий) без введенных данных
      } if (registrationName.value === '' || registrationEmail.value === '' || registrationPasswordFirst.value === '' || registrationPasswordSecond.value === '' || registrationPasswordFirst.value === '' || registrationPasswordSecond.value === '') {
        alert('Не заполнены все необходимые поля ввода данных.'); // вывод сообщения о необходимости ввода всех необходимых данных в поля ввода
      } if (registrationPasswordFirst.value !== registrationPasswordSecond.value) {
        alert('Пароли должны совпадать.'); // вывод сообщения о необходимости ввода одинаковых паролей в поля ввода
        registrationPasswordFirst.classList.add('registration__data-input_no-data'); // выделить поле ввода (Пароль) без введенных данных
        registrationPasswordSecond.classList.add('registration__data-input_no-data'); // выделить поле ввода (Пароль подтверждающий) без введенных данных
      } else if (registrationName.value !== '' && registrationEmail.value !== '' && registrationPasswordFirst.value === registrationPasswordSecond.value) {

        // const registrationConfirmationWindow = document.querySelector('.registration__modal-container'); // идентификация модального окна с подтверждением регистрации

        const body = document.querySelector('body'); // идентификация <body>
        body.classList.add('body-scroll-off'); // фиксация <body>

        document.querySelector('.registration__modal-container').classList.remove('hidden'); // показать модальное окно с подтверждением регистрации

        const registrationConfirmationBtnClose = document.querySelector('.registration__modal-btn-cancel'); // идентификация кнопки закрытия панели модального окна с подтверждением регистрации

        // закрыть модальное окно подтверждения заказа

        registrationConfirmationBtnClose.addEventListener('click', function closeRegistrationConfirmationWindow() {

          body.classList.remove('body-scroll-off'); // убрать фиксацию <body>

          location.reload(); // переход на главную страницу

        });

      };

    });

  });

  /////////////////////////////////////////////////////

  // вход в личный кабинет по логину и паролю

  const accountEntryBtn = document.querySelector('.account-entry__btn-log'); // идентификация кнопки на вход в личный кабинет

  accountEntryBtn.addEventListener('click', function enterAccount() { // функция входа в личный кабинет

    // идентификация данных полей ввода

    const accountLogin = document.querySelector('#accountLogin'); // логин пользователя (user@example.fish)
    const accountPassword = document.querySelector('#accountPassword'); // пароль пользователя (qwerty)

    // проверка введенных данных в необходимые поля ввода

    if (accountLogin.value === '') {
      accountLogin.classList.add('login-access__item-input_no-data'); // выделить поле ввода (Логин) без введенных данных
    } if (accountPassword.value === '') {
      accountPassword.classList.add('login-access__item-input_no-data'); // выделить поле ввода (Пароль) без введенных данных
    } if (accountLogin.value === '' || accountPassword.value === '') {
      alert('Не заполнены все необходимые поля ввода данных.'); // вывод сообщения о необходимости ввода всех необходимых данных в поля ввода
    } if (accountLogin.value !== '' && accountLogin.value !== 'user@example.fish' || accountPassword.value !== '' && accountPassword.value !== 'qwerty') {
      alert('Введен неверный логин или пароль.'); // вывод сообщения о неверных данных в полях ввода

      accountLogin.classList.add('login-access__item-input_no-data'); // выделить поле ввода (Логин) без введенных данных
      accountPassword.classList.add('login-access__item-input_no-data'); // выделить поле ввода (Пароль) без введенных данных
    } else if (accountLogin.value === 'user@example.fish' && accountPassword.value === 'qwerty') {

      // HTML код личного кабинета (section__account)
      const sectionAccount = `

        <!-- section__personal-account -->

        <section class="section__personal-account">

          <!-- section-heading -->

          <h1 class="section-heading">
            Личный кабинет
          </h1>

          <!-- personal-account__account-info -->

          <div class="personal-account__account-info-wrapper">
            <div class="account-info__item account-login">
              <div class="account-login__title">
                ${accountLogin.value}
              </div>
            </div>
            <div class="account-info__item account-cash">
              <div class="account-cash__icon">
                <svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.72414 0C7.68517 0 7.67724 1.59474 8.72414 1.57895H43.6207C44.0743 1.57895 44.4138 1.91684 44.4138 2.36842V22.8947C44.4138 23.9368 46 23.9368 46 22.8947V2.36842C46 1.07053 44.9246 0 43.6207 0H8.72414ZM5.55172 3.15789C4.51434 3.15789 4.51434 4.73684 5.55172 4.73684H40.4483C40.9019 4.73684 41.2414 5.07474 41.2414 5.52632V26.0526C41.2414 27.1026 42.8434 27.0947 42.8276 26.0526V5.52632C42.8276 4.22842 41.7521 3.15789 40.4483 3.15789H5.55172ZM2.37931 6.31579C1.07545 6.31579 0 7.38632 0 8.68421V27.6316C0 28.9295 1.07545 30 2.37931 30H37.2759C38.5797 30 39.6552 28.9295 39.6552 27.6316V8.68421C39.6552 7.38632 38.5797 6.31579 37.2759 6.31579H2.37931ZM2.37931 7.89474H37.2759C37.7295 7.89474 38.069 8.23263 38.069 8.68421V27.6316C38.069 28.0832 37.7295 28.4211 37.2759 28.4211H2.37931C1.92566 28.4211 1.58621 28.0832 1.58621 27.6316V8.68421C1.58621 8.23263 1.92566 7.89474 2.37931 7.89474ZM3.96552 9.47368C3.52772 9.47368 3.17241 9.82737 3.17241 10.2632V13.4211C3.17241 14.4821 4.75862 14.4568 4.75862 13.4211V11.0526H7.13793C8.20386 11.0526 8.17848 9.47368 7.13793 9.47368H3.96552ZM19.8276 9.47368C15.0182 9.47368 11.1034 13.3705 11.1034 18.1579C11.1034 22.9453 15.0182 26.8421 19.8276 26.8421C24.637 26.8421 28.5517 22.9453 28.5517 18.1579C28.5517 13.3705 24.637 9.47368 19.8276 9.47368ZM32.5172 9.47368C31.4767 9.47368 31.4513 11.0526 32.5172 11.0526H34.8966V13.4211C34.8966 14.4568 36.4828 14.4821 36.4828 13.4211V10.2632C36.4828 9.82737 36.1274 9.47368 35.6897 9.47368H32.5172ZM19.8276 11.0526C23.7772 11.0526 26.9655 14.2263 26.9655 18.1579C26.9655 22.0895 23.7772 25.2632 19.8276 25.2632C15.8779 25.2632 12.6897 22.0895 12.6897 18.1579C12.6897 14.2263 15.8779 11.0526 19.8276 11.0526ZM19.8276 12.6316C19.3882 12.6316 19.0345 12.9837 19.0345 13.4211V14.3589C18.1177 14.6905 17.4483 15.5589 17.4483 16.5789C17.4483 17.8737 18.5269 18.9474 19.8276 18.9474C20.2717 18.9474 20.6207 19.2821 20.6207 19.7368C20.6207 20.1916 20.2717 20.5263 19.8276 20.5263H18.2414C17.7052 20.5184 17.4483 20.9179 17.4483 21.3158C17.4483 21.7137 17.7052 22.1132 18.2414 22.1053H19.0345V22.8947C19.0345 23.3321 19.3882 23.6842 19.8276 23.6842C20.267 23.6842 20.6207 23.3321 20.6207 22.8947V21.9568C21.5375 21.6253 22.2069 20.7568 22.2069 19.7368C22.2069 18.4421 21.1283 17.3684 19.8276 17.3684C19.3834 17.3684 19.0345 17.0337 19.0345 16.5789C19.0345 16.1242 19.3834 15.7895 19.8276 15.7895H21.4138C21.9499 15.7974 22.2069 15.3979 22.2069 15C22.2069 14.6021 21.9499 14.2026 21.4138 14.2105H20.6207V13.4211C20.6207 12.9837 20.267 12.6316 19.8276 12.6316ZM3.96552 22.1084C3.56897 22.1053 3.17241 22.3642 3.17241 22.8947V26.0526C3.17241 26.4884 3.52772 26.8421 3.96552 26.8421H7.13793C8.17848 26.8421 8.20386 25.2632 7.13793 25.2632H4.75862V22.8947C4.75862 22.3768 4.36207 22.1116 3.96552 22.1084ZM35.6897 22.1084C35.2931 22.1116 34.8966 22.3768 34.8966 22.8947V25.2632H32.5172C31.4513 25.2632 31.4767 26.8421 32.5172 26.8421H35.6897C36.1274 26.8421 36.4828 26.4884 36.4828 26.0526V22.8947C36.4828 22.3642 36.0862 22.1053 35.6897 22.1084Z" fill="white"/>
                </svg>
              </div>
              <div class="account-cash__balance currency">
                0
              </div>
            </div>
          </div>

          <!-- personal-account-accordeon -->

          <ul class="personal-account__accordeon">

            <!-- personal-account-1 -->

            <li class="accordeon__personal-account-item">
              <div class="personal-account-item__heading-wrapper">
                <p class="personal-account-item__heading font-main_bold">
                  Баланс
                </p>
                <div class="personal-account-item__btn btn">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="personal-account-item__module-wrapper hidden">
                <p class="personal-account-item__module font-main">
                  Здесь отображается баланс аккаунта
                </p>
              </div>
            </li>

            <!-- personal-account-2 -->

            <li class="accordeon__personal-account-item">
              <div class="personal-account-item__heading-wrapper">
                <p class="personal-account-item__heading font-main_bold">
                  Избранное
                </p>
                <div class="personal-account-item__btn btn">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="personal-account-item__module-wrapper hidden">
                <p class="personal-account-item__module font-main">
                  Здесь отображаются избранные товары
                </p>
              </div>
            </li>

            <!-- personal-account-3 -->

            <li class="accordeon__personal-account-item">
              <div class="personal-account-item__heading-wrapper">
                <p class="personal-account-item__heading font-main_bold">
                  История покупок
                </p>
                <div class="personal-account-item__btn btn">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="personal-account-item__module-wrapper hidden">
                <p class="personal-account-item__module font-main">
                  Здесь отображается история покупок
                </p>
              </div>
            </li>

            <!-- personal-account-4 -->

            <li class="accordeon__personal-account-item">
              <div class="personal-account-item__heading-wrapper">
                <p class="personal-account-item__heading font-main_bold">
                  Настройки
                </p>
                <div class="personal-account-item__btn btn">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="personal-account-item__module-wrapper hidden">
                <p class="personal-account-item__module font-main">
                  Здесь отображаются настройки аккаунта
                </p>
              </div>
            </li>

            <!-- personal-account-5 -->

            <li class="accordeon__personal-account-item">
              <div class="personal-account-item__heading-wrapper">
                <p class="personal-account-item__heading font-main_bold">
                  Помощь
                </p>
                <div class="personal-account-item__btn btn">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="personal-account-item__module-wrapper hidden">
                <p class="personal-account-item__module font-main">
                  Здесь отображаются заявки и сообщения в службу поддержки интернет-магазина
                </p>
              </div>
            </li>
          </ul>
        </section>

      `;

      sectionAccountEntry.style.display = 'none'; // скрыть панель входа в аккаунт

      // вставка HTML кода личного кабинета (section__account) в конце (main-container)
      mainContainer.insertAdjacentHTML('beforeend', sectionAccount);

      // запуск функции аккордеона в личном кабинете

      showAccountAccordeon();

      function showAccountAccordeon() {  // функция аккордеона в личном кабинете

        const accountHeadings = document.querySelectorAll('.personal-account-item__heading-wrapper'); // инициализация заголовков всех модулей в личном кабинете

        accountHeadings.forEach((item) => {  // клик по заголовку каждого из модулей

          item.addEventListener('click', function() {  // функция открытия каждого из модулей

            const accountModulesOpen = document.querySelectorAll('.personal-account-item__module-wrapper.active'); // инициализация всех открытых модулей

            item.nextElementSibling.classList.toggle('active');
            item.lastElementChild.classList.toggle('personal-account-btn_active');
            item.firstElementChild.classList.toggle('personal-account-heading_active');

            accountModulesOpen.forEach((item) => {  // закрытие всех открытых модулей
              item.classList.remove('active');
              item.previousElementSibling.lastElementChild.classList.remove('personal-account-btn_active');
              item.previousElementSibling.firstElementChild.classList.remove('personal-account-heading_active');
            })

          })

        })

      }

    };

  });

}

// экспорт функций

export default createAccount; // создать окно с личным кабинетом
