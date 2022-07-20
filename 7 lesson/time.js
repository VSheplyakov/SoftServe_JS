(function () {
  function timeIs() {
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');
    let date = new Date();

    if (date.getHours() <= 9) {
      hours.innerHTML = `0${date.getHours()}`;
    } else {
      hours.innerHTML = date.getHours();
    }

    if (date.getMinutes() <= 9) {
      minutes.innerHTML = `0${date.getMinutes()}`;
    } else {
      minutes.innerHTML = date.getMinutes();
    }

    if (date.getSeconds() <= 9) {
      seconds.innerHTML = `0${date.getSeconds()}`;
    } else {
      seconds.innerHTML = date.getSeconds();
    }
  }

  setInterval(() => timeIs(), 1000);
})();
