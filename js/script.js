// popup
const body = document.body;
const popup = document.querySelectorAll('.popup');
const popupInner = document.querySelectorAll('.popup-inner');
const popupClose = document.querySelectorAll('.popup-close');

const popupConsultationBtn = document.querySelector('.popup-consultation-btn');
const popupBrochureBtn = document.querySelector('.popup-brochure-btn');
const popupAboutBtn = document.querySelector('.popup-about-btn');
const popupDownload = document.querySelectorAll('.floors__block-download');

const popupConsultation = document.querySelector('.popup-consultation');
const popupBrochure = document.querySelector('.popup-brochure');
const popupFloor = document.querySelector('.popup-floor');

popupClose.forEach(popClose => {
  popClose.addEventListener('click', () => {
    popup.forEach(popupItem => {
      popupItem.classList.remove('popup-active');
    })

    body.style.overflow = 'initial';
  })
})

popupConsultationBtn.addEventListener('click', () => {
  popupConsultation.classList.add('popup-active');
  body.style.overflow = 'hidden';
})

popupBrochureBtn.addEventListener('click', () => {
  popupBrochure.classList.add('popup-active');
  body.style.overflow = 'hidden';
})

popupAboutBtn.addEventListener('click', () => {
  popupConsultation.classList.add('popup-active');
  body.style.overflow = 'hidden';
})

popupDownload.forEach(item => {
  item.addEventListener('click', () => {
    popupFloor.classList.add('popup-active');
    body.style.overflow = 'hidden';
  })
})



// Ajax form
$(function () {
  $('form').submit(function (e) {
    var $form = $(this);

    let name = $('#your-name').val(),
      phone = $('#your-phone').val(),
      email = $('#your-email').val();
      select = $('#popup-select').val();

    $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: { name: name, phone: phone, email: email },
      success: (function () {
        // 
      }),
      error: (function () {
        // 
      })
    })

      e.preventDefault();
  });
});






// Scroll magic. Animation for lines
var controller = new ScrollMagic.Controller();
$(".trigger-line").each(function () {
  var tl = new TimelineMax();
  var child = $(this).find(".all-line");
  tl.to(child, 1, { height: 200, ease: Linear.easeNone });

  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.4,
    duration: "100%"
  })
    .setTween(tl)
    // .addIndicators({
    //   colorTrigger: "black",
    //   colorStart: "black",
    //   colorEnd: "black",
    //   indent: 10
    // })
    .addTo(controller);
});



// Fancybox gallery
Fancybox.bind('[data-fancybox]', {

});






// Floor tabs
function floorsTabs() {
  var tabsButton = document.querySelectorAll('.floors__btn');
  var tabsBlock = document.querySelectorAll('.floors__block');

  var counter = 0;

  tabsButton.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      activeButton(btn);
      btn.classList.add('floors__btn-active');
      updateContent(index);
    })
  })

  function activeButton() {
    tabsButton.forEach((btn) => {
      btn.classList.remove('floors__btn-active');
    })
  }

  function updateContent(index) {
    counter = index
    updateActiveElements();
  }

  function updateActiveElements() {
    tabsBlock.forEach(block => {
      block.classList.contains('floors__block-active') && block.classList.remove('floors__block-active')
    })
    tabsBlock[counter].classList.add('floors__block-active')

    tabsButton.forEach((btn) => {
      btn.classList.contains('floors__btn-active') && btn.classList.remove('floors__btn-active')
    })
    tabsButton[counter].classList.add('floors__btn-active');
  }
  updateActiveElements()
}
floorsTabs()




const limitNumber = e => {
  const value = e.value;
  e.value = value.replace(/[A-Za-zА-Яа-яЁё]/g, '');
}

const limitEmail = e => {
  const value = e.value;
  e.value = value.replace(/[А-Яа-яЁё]/g, '');
}