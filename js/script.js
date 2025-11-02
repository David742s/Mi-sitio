// Podés agregar funcionalidades futuras aquí
console.log("Sitio cargado correctamente");
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const respuestas = {
  hola: "¡Hola! 👋 Soy tu asistente simulado. ¿En qué puedo ayudarte?",
  productos: "Vendemos artículos tecnológicos, desde notebooks hasta periféricos gamer.",
  envio: "Hacemos envíos a todo el país con entrega en 48 horas. 🚚",
  devolucion: "Podés devolver un producto dentro de los 7 días hábiles con ticket de compra.",
  gracias: "¡De nada! 😊",
  default: "No tengo una respuesta programada para eso, pero puedo improvisar 😅"
};

// Agrega mensajes al chat
function agregarMensaje(texto, clase) {
  const msg = document.createElement("div");
  msg.classList.add("message", clase);
  msg.innerText = texto;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Efecto de escritura tipo ChatGPT
function escribirGradualmente(texto, clase) {
  const msg = document.createElement("div");
  msg.classList.add("message", clase);
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;

  let i = 0;
  const interval = setInterval(() => {
    msg.innerText += texto[i];
    i++;
    if (i >= texto.length) clearInterval(interval);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 25);
}

// Muestra animación de “Generando respuesta…”
function mostrarTyping() {
  const typing = document.createElement("div");
  typing.classList.add("typing", "bot");
  typing.innerText = "💭 Generando respuesta";
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;
  return typing;
}

// Procesa la respuesta simulada
function responder(mensajeUsuario) {
  const lower = mensajeUsuario.toLowerCase();
  let respuesta = respuestas.default;
  for (let key in respuestas) {
    if (lower.includes(key)) {
      respuesta = respuestas[key];
      break;
    }
  }

  const typingIndicator = mostrarTyping();
  setTimeout(() => {
    typingIndicator.remove();
    escribirGradualmente(respuesta, "bot");
  }, 1000 + Math.random() * 800);
}

sendBtn.addEventListener("click", () => {
  const mensaje = userInput.value.trim();
  if (mensaje) {
    agregarMensaje(mensaje, "user");
    responder(mensaje);
    userInput.value = "";
  }
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});


