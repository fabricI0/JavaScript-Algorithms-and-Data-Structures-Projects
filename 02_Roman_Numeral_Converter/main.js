function romanize () {
  let number = document.getElementById('decimal-number').value;
  let numberHolder = number;
  const romanEquivalent = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  var romanized = '';

  for (let i of Object.keys(romanEquivalent)) {
    const convert = Math.floor(number / romanEquivalent[i]);
    number -= convert * romanEquivalent[i];
    romanized += i.repeat(convert);
  }
  window.alert(numberHolder + ' in roman is: ' + romanized);
  return romanized;
}

function clearInput () {
  document.getElementById('decimal-number').value = '';
}
