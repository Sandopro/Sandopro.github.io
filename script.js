const messages = [
    "Este boton no era",
    "¿Por que sigues usando este boton?",
    "Okei Sofia esto ya no es coincidencia",
    "Te dare otra oportunidad mas",
    "Bueno necesitaras una mas por lo visto",
    "Con cada click me haces mas daño",
    "Si lo haces estare muy triste",
    "Pero MUY MUY TRISTE EHHH",
    "Ya no preguntare mas",
    "Por favor di que si te necesito!❤️"
];
let messageIndex = 0;
function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}
function handleYesClick() {
    window.location.href = "yes_page.html";
}