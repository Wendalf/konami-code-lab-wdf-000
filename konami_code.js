const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // your code here
  let body = document.body;
  let index = 0;

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("Konami Code is Fun, Huh?");
        index = 0;
      }
    } else {
      index = 0;
    }
  }

  body.addEventListener('keydown', onKeyDownHandler);
}
