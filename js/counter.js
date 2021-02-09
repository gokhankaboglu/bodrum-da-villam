function increaseValue() {
    var value = parseInt(document.getElementById('number').innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').innerHTML = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').innerHTML = value;
  }