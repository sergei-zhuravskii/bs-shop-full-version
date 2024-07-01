
// function FAQ accordeon

function showFaqAccordeon() {

  const faqQuestions = document.querySelectorAll('.FAQ-item__question-wrapper');

  faqQuestions.forEach((item) => {

    item.addEventListener('click', function() {

      const faqAnswersOpen = document.querySelectorAll('.FAQ-item__answer-wrapper.active');

      item.nextElementSibling.classList.toggle('active');
      item.lastElementChild.classList.toggle('FAQ-btn_active');
      item.firstElementChild.classList.toggle('FAQ-question_active');

      faqAnswersOpen.forEach((item) => {
        item.classList.remove('active');
        item.previousElementSibling.lastElementChild.classList.remove('FAQ-btn_active');
        item.previousElementSibling.firstElementChild.classList.remove('FAQ-question_active');
      })

    })

  })

}

// export functions

export default showFaqAccordeon; // FAQ accordeon
