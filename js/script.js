




// Floor tabs
function floorsTabs() {
  let tabsButton = document.querySelectorAll('.floors__btn');
  let tabsBlock = document.querySelectorAll('.floors__block');

  let counter = 0;

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