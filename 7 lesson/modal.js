(function () {
  function modal() {
    let btnOpen = document.querySelector('.btn-open');
    let btnClose = document.querySelector('.btn-close');
    let showModal = document.querySelector('.modal__window');

    btnOpen.onclick = function () {
      showModal.style.display = 'flex';
      btnOpen.style.display = 'none';
    };
    btnClose.onclick = function () {
      showModal.style.display = 'none';
      btnOpen.style.display = 'flex';
    };
  }
  modal();
})();
