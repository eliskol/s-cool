function cool() {
  let p = document.createElement('p');
  p.innerText = "you are cool";
  document.body.appendChild(p);
}

let button = document.getElementById('lol');
button.addEventListener("click", cool);

let dark = false;

document.addEventListener("keyup", e => {
  if (e.keyCode == 13 && !dark) {
    document.body.style.background = "#23272A";
    dark = true;
  }
  
  else if (e.keyCode == 13 && dark) {
    document.body.style.background = "white";
    dark = false;
  }
});
