const links = [
  "GitHub → https://github.com/ottojonas",
  "Discord -> https://discord.com/users/1245513579881304108",
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const output = document.getElementById("social-output");

function typeEffect() {
  if (i < links.length) {
    if (!isDeleting && j <= links[i].length) {
      currentText = links[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = links[i].substring(0, j--);
    }

    output.textContent = currentText;

    if (!isDeleting && j === links[i].length) {
      isDeleting = true;
      setTimeout(typeEffect, 3000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % links.length;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

