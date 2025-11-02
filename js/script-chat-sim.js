// Podés agregar funcionalidades futuras aquí
console.log("Sitio cargado correctamente");
// Referencias a elementos del chat
const chatBoxSim = document.getElementById("chat-box-sim");
const userInputSim = document.getElementById("user-input-sim");
const sendBtnSim = document.getElementById("send-btn-sim");

// Respuestas simuladas
const respuestasSim = {
  hola: "¡Hola! 👋 Soy tu asistente simulado. ¿En qué puedo ayudarte?",
  productos: "Vendemos artículos tecnológicos, desde notebooks hasta periféricos gamer.",
  envio: "Hacemos envíos a todo el país con entrega en 48 horas. 🚚",
  devolucion: "Podés devolver un producto dentro de los 7 días hábiles con ticket de compra.",
  gracias: "¡De nada! 😊",
  default: "No tengo una respuesta programada para eso, pero puedo improvisar 😅"
};

// Agrega mensajes al chat
function agregarMensajeSim(texto, clase) {
  const msg = document.createElement("div");
  msg.classList.add("message-sim", clase);
  msg.innerText = texto;
  chatBoxSim.appendChild(msg);
  chatBoxSim.scrollTop = chatBoxSim.scrollHeight;
}

// Efecto de escritura tipo ChatGPT
function escribirGradualmenteSim(texto, clase) {
  const msg = document.createElement("div");
  msg.classList.add("message-sim", clase);
  chatBoxSim.appendChild(msg);
  chatBoxSim.scrollTop = chatBoxSim.scrollHeight;

  let i = 0;
  const interval = setInterval(() => {
    msg.innerText += texto[i];
    i++;
    if (i >= texto.length) clearInterval(interval);
    chatBoxSim.scrollTop = chatBoxSim.scrollHeight;
  }, 25);
}

// Muestra animación de “Generando respuesta…”
function mostrarTypingSim() {
  const typing = document.createElement("div");
  typing.classList.add("typing-sim", "bot-sim");
  typing.innerText = "💭 Generando respuesta";
  chatBoxSim.appendChild(typing);
  chatBoxSim.scrollTop = chatBoxSim.scrollHeight;
  return typing;
}

// Procesa la respuesta simulada
function responderSim(mensajeUsuario) {
  const lower = mensajeUsuario.toLowerCase();
  let respuesta = respuestasSim.default;
  for (let key in respuestasSim) {
    if (lower.includes(key)) {
      respuesta = respuestasSim[key];
      break;
    }
  }

  const typingIndicator = mostrarTypingSim();
  setTimeout(() => {
    typingIndicator.remove();
    escribirGradualmenteSim(respuesta, "bot-sim");
  }, 1000 + Math.random() * 800);
}

// Eventos
sendBtnSim.addEventListener("click", () => {
  const mensaje = userInputSim.value.trim();
  if (mensaje) {
    agregarMensajeSim(mensaje, "user-sim");
    responderSim(mensaje);
    userInputSim.value = "";
  }
});

userInputSim.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtnSim.click();
});



