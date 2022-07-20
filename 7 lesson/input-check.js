(function () {
  function check() {
    let text = document.querySelector('.input__name').addEventListener('keypress', function (evt) {
        if (!(evt.which >= 65 && evt.which <= 90 || evt.which >=97 && evt.which <= 122) ) {
          text = evt.preventDefault();
        }
      });
  }
  check();
})();
