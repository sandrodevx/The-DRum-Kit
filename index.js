// Seleccionar todos los botones de la batería
const drumButtons = document.querySelectorAll(".drum");

// Asignar eventos de clic a cada botón
drumButtons.forEach(button => {
  button.addEventListener("click", function () {
    const buttonKey = this.innerHTML;
    playSound(buttonKey);
    animateButton(buttonKey);
  });
});

// Asignar eventos de teclado
document.addEventListener("keypress", event => {
  const keyPressed = event.key.toLowerCase();
  playSound(keyPressed);
  animateButton(keyPressed);
});

// Función para reproducir sonidos
function playSound(key) {
  const soundMap = {
    w: "sounds/tom-1.mp3",
    a: "sounds/tom-2.mp3",
    s: "sounds/tom-3.mp3",
    d: "sounds/tom-4.mp3",
    j: "sounds/snare.mp3",
    k: "sounds/crash.mp3",
    l: "sounds/kick-bass.mp3",
  };

  if (soundMap[key]) {
    const audio = new Audio(soundMap[key]);
    audio.play();
  } else {
    console.log(`Tecla no válida: ${key}`);
  }
}

// Función para animar los botones
function animateButton(key) {
  const activeButton = document.querySelector(`.${key}`);

  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}