let number = 0;
let cron;
let h1 = document.querySelector("h1");

function reset() {
  number = 0; // Reinicia o tempo decorrido para zero
  document.getElementById("cronometro").innerHTML = "00:00:00"; // Atualiza o valor exibido no elemento <h1> para mostrar "00:00:00"
}

function start() {
  reset();
  cron = setInterval(function () {
    number++;
    const formattedTime = formatTime(number);
    const resultOverlay = document.querySelector(".result-overlay");
    const overlayContent = resultOverlay.querySelector("h1");
    overlayContent.textContent = formattedTime;
  }, 1000);
}

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function stop() {
  clearInterval(cron);
}

const button = document.querySelector("button");

button.addEventListener("click", function () {
  // Exibir o resultado na sobreposição
  const resultOverlay = document.querySelector(".result-overlay");
});
