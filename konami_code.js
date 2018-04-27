const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
    let i = 0

  function eventHandler(event){
    const key = parseInt(event.which||event.detail)
    if (key === code[i]){
      i++;
      if (i === code.length){
        alert("Yay!");
        i = 0;
      }
    } else {
      i = 0;
    }
  }
  document.addEventListener('keydown', eventHandler);

}
