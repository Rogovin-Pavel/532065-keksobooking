'use strict';
(function () {

  /**
   * Сбрасывает состояние страницы
   */
  window.reset = function () {
    document.querySelector('.map').classList.add('map--faded');
    window.form.classList.add('ad-form--disabled');
    var fieldsetArray = window.form.querySelectorAll('fieldset');
    for (var n = 0; n < fieldsetArray.length; n++) {
      fieldsetArray[n].disabled = true;
    }
    window.card.remove(); // Скрываем карточку, при изменении фильтров
    window.pins.remove(); // Удаляем метки с карты
    form.querySelector('#type')[1].selected = true;
    form.querySelector('#price').value = '';
    form.querySelector('#price').min = 0;
    form.querySelector('#price').placeholder = 0;
    form.querySelector('#title').value = '';
    form.querySelector('#timein').value = '12:00';
    form.querySelector('#timeout').value =  form.querySelector('#timein').value;
    form.querySelector('#description').value = '';

    var roomNumber = form.querySelector('#room_number');
    var roomCapacity = form.querySelector('#capacity');
    roomNumber[0].selected = true;
    roomCapacity[0].disabled = true; // 3 guest
    roomCapacity[1].disabled = true; // 2 guest
    roomCapacity[2].disabled = false; // 1 guest
    roomCapacity[3].disabled = true; // 0 guest
    roomCapacity[2].selected = true;

    document.querySelector('.map__pin--main').style.left = '570px';
    document.querySelector('.map__pin--main').style.top = '375px';
    form.querySelector('#address').value = '570, 375';

    var featuresChecked = form.querySelectorAll('.feature__checkbox');
    for (var i = 0; i < featuresChecked.length; i++) {
      featuresChecked[i].checked = false;
    }
  };
})();