
// function filter accordeon

function showFilterAccordeon() {

  const filterTitles = document.querySelectorAll('.filter-item__title-wrapper');

  filterTitles.forEach((item) => {

    item.addEventListener('click', function() {  // click on items

      const filterSelectionsOpen = document.querySelectorAll('.filter-item__selection-wrapper.active');
      const filterSelections = document.querySelectorAll('[data="filter"]');
      const filterBtns = document.querySelectorAll('.filter-item__btn');

      item.nextElementSibling.classList.toggle('active');
      item.lastElementChild.classList.toggle('filter-marker_active');
      item.parentElement.classList.toggle('filter-item_active');

      filterSelectionsOpen.forEach((item) => {  // close by click on item

        item.classList.remove('active');
        item.previousElementSibling.lastElementChild.classList.remove('filter-marker_active');
        item.parentElement.classList.remove('filter-item_active');

      });

      filterSelections.forEach((item) => {  // close by click on item

        item.addEventListener('click', closeAccordeon);

        function closeAccordeon() {

          item.parentElement.classList.remove('active');
          item.parentElement.previousElementSibling.lastElementChild.classList.remove('filter-marker_active');
          item.parentElement.parentElement.classList.remove('filter-item_active');

        }

      });

      filterBtns.forEach((item) => {  // close by click on btns in items

        item.addEventListener('click', closeAccordeon);

        function closeAccordeon() {

          item.parentElement.classList.remove('active');
          item.parentElement.previousElementSibling.lastElementChild.classList.remove('filter-marker_active');
          item.parentElement.parentElement.classList.remove('filter-item_active');

        }

      });

    })

  })

}

// export functions

export default showFilterAccordeon; // filter accordeon
