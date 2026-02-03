const text = ["JEE Aspirant", "Web Developer", "Tech Enthusiast", "Future Engineer"];
let index = 0;
let char = 0;
const typing = document.getElementById("typing");

function typeEffect() {
  if (char < text[index].length) {
    typing.textContent += text[index][char];
    char++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (char > 0) {
    typing.textContent = text[index].substring(0, char - 1);
    char--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();

const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("light");
};
