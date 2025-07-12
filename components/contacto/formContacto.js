async function insertForm(el) {
  el.innerHTML = `<div class="section">
        <h3 class="form-contacto__title">Escribime!</h3>
      </div>
      <div class="section">
        <div class="separador separador-row">
          <label
            ><span class="form-contacto__info">Nombre</span
            ><input
              type="text"
              class="form-contacto__campo"
              placeholder="Tu nombre"
          /></label>
          <label
            ><span class="form-contacto__info">Mail</span
            ><input
              type="email" name="email"
              class="form-contacto__campo"
              placeholder="tu@mail.com"
          /></label>
        </div>
        <div class="separador">
          <label
            ><span class="form-contacto__info">Mensaje</span
            ><textarea
              class="form-contacto__campo form-contacto__textarea" name="mensaje"
            ></textarea>
          </label>
        </div>
        <div class="send-button"></div>
      </div>`;

  const buttonEl = document.querySelector(".send-button");
  insertButton(buttonEl);

  enviarFormulario();
}

function enviarFormulario() {
  const url = "https://apx.school/api/utils/email-to-student";
  const form = document.querySelector(".form-contacto");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const mail = form.email.value;
    const mensaje = form.mensaje.value;
    const body = {
      to: mail,
      message: mensaje,
    };

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log("Error: ", error));
  });
}
