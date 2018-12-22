function clearInput() {
  document.getElementById('search').value = '';
}

function truePalindrome() {
  alert('We got a Palindrome! :)');
}

function falsePalindrome() {
  alert('NOT a Palindrome :/');
}

function getValue() {
  const string = document.getElementById('search').value;
  string.toLowerCase().replace(/[\W_]/g, '');
  for (let index = 0, len = string.length - 1; index < len / 2; index += 1) {
    if (string[index] !== string[len - index]) {
      falsePalindrome();
      window.location = '';
      return false;
    }
  }
  truePalindrome();
  window.location = '';
  return true;
}
