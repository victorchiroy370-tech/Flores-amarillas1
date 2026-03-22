const orbita = document.getElementById("orbita");

for (let i = 0; i < 20; i++) {
  let contenedor = document.createElement("div");
  contenedor.style.position = "absolute";
  contenedor.style.top = "50%";
  contenedor.style.left = "50%";
  contenedor.style.transformOrigin = "0 0";

  let palabra = document.createElement("div");
  palabra.className = "palabra";

  palabra.innerText =
    mensajes[Math.floor(Math.random()*mensajes.length)] + " " + nombre;

  // ángulo
  let angulo = (i / 20) * 360;

  // posicionar en círculo
  contenedor.style.transform =
    `rotate(${angulo}deg) translate(140px) rotate(-${angulo}deg)`;

  contenedor.appendChild(palabra);
  orbita.appendChild(contenedor);
}