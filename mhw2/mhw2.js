const buttons = document.querySelectorAll(".cell-findabtmore");
function abtmore(event) {
  const container = event.currentTarget.parentNode;
  const txt = container.querySelector(".abt-more-text");
  const close = container.querySelector(".close-txt");
  const button = event.currentTarget;
  button.classList.add("hidden");
  txt.classList.remove("hidden");
  close.addEventListener("click", () => {
    button.classList.remove("hidden");
    txt.classList.add("hidden");
  });
}
for (const button of buttons) {
  button.addEventListener("click", abtmore);
}

const problems = document.querySelectorAll(".row-problem h3");

function probTendina(event) {
  const container = event.currentTarget.parentNode;
  const solution = container.querySelector(".solution-text");
  solution.classList.toggle("solution-open");
  const probh3 = container.querySelector("h3");
  probh3.classList.toggle("bg-blue");
}

for (const problem of problems) {
  problem.addEventListener("click", probTendina);
}

const imagesAbout = document.querySelectorAll(".cert-img");

function learnabout(event) {
  const container = event.currentTarget.parentNode;
  const image = container.querySelector(".cert-img");
  const new_img = document.createElement("img");
  const img_index = parseInt(image.dataset.index);
  if (img_index === 0) {
    new_img.src = "images/ventilazione.jpg";
  } else if (img_index === 1) {
    new_img.src = "images/umidita2.jpg";
  } else if (img_index === 2) {
    new_img.src = "images/VMC_ILM.jpeg";
  }
  image.classList.toggle("hidden");
  container.appendChild(new_img);

  new_img.addEventListener("mouseout", function () {
    container.removeChild(new_img);
    image.classList.toggle("hidden");
  });
}

for (const image of imagesAbout) {
  image.addEventListener("mouseover", learnabout);
}

const accept_button = document.querySelector(".accept-button");
function tickButton(event) {
  const container = event.currentTarget;
  const tick = container.querySelector("#tick-button");
  tick.classList.toggle("hidden");
}

accept_button.addEventListener("click", tickButton);

const tendine = document.querySelectorAll(".row-header h1");

function menuTendina(event) {
  const container = event.currentTarget.parentNode;
  const text = container.querySelector(".nav-text");

  text.classList.add("nav-text-open");
  text.classList.remove("hidden");
  container.addEventListener("mouseleave", function () {
    text.classList.remove("nav-text-open");
    text.classList.add("hidden");
  });
}

for (const tendina of tendine) {
  tendina.addEventListener("mouseenter", menuTendina);
}

const barraRicerca = document.querySelector(".container-lente-nav");
function ricercaLente(event) {
  event.stopPropagation();
  const container = event.currentTarget;
  const barra = container.querySelector(".barra-ricerca-container");
  barra.classList.toggle("hidden");
  const textContainer = document.querySelector(".barra-ricerca");
  textContainer.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}

barraRicerca.addEventListener("click", ricercaLente);
const b = document.querySelector("body");
function chiudi(event) {
  const barra = document.querySelector(".barra-ricerca-container");
  barra.classList.add("hidden");
}
b.addEventListener("click", chiudi);
