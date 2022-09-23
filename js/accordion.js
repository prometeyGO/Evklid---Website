new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});


let accordion = document.querySelectorAll('.accordion__control');

accordion.forEach(function(el) {
  el.addEventListener('click', function() {
    let questionsTitle = el.closest('.questions__descr').querySelector('.questions__title-third');

    questionsTitle.classList.toggle('questions__title--active');
  })
})
