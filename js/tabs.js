let tabsBtn = document.querySelectorAll('.job__btn');
let tabsItem = document.querySelectorAll('.wrap__item');
let tabsImg = document.querySelectorAll('.job__half-img');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {
      btn.classList.remove('job__btn--active')
    });
    e.currentTarget.classList.add('job__btn--active');

    tabsItem.forEach(function(element) {
      element.classList.remove('wrap__item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('wrap__item--active');

    tabsImg.forEach(function(element) {
      element.classList.remove('tabs__img--active')
    });
    document.querySelector(`[img-target="${path}"]`).classList.add('tabs__img--active');
  });
});
