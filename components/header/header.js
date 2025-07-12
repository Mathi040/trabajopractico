async function createHeader(el) {
  const items = await infoImagenes();
  el.innerHTML = `<img src="${items.logo}" class="header__logo" />
      <img src="${items.menu}" class="header__menu" id="indice-abrir" />
      <div class="indice__links indice__links__desktop">
        <a href="./index.html" class="indice__link">Home</a>
        <a href="./servicio.html" class="indice__link">Servicios</a>
        <a href="./trabajo.html" class="indice__link">Trabajo</a>
        <a href="./contacto.html" class="indice__link">Contacto</a>
      </div>
    </header>
    <div class="indice">
      <img src="${items.x}" class="indice__cerrar" id="indice-cerrar" />
      <div class="indice__links">
        <a href="./index.html" class="indice__link">Home</a>
        <a href="./servicio.html" class="indice__link">Servicios</a>
        <a href="./trabajo.html" class="indice__link">Trabajo</a>
        <a href="./contacto.html" class="indice__link">Contacto</a>
      </div>
    </div>`;
  menuDesplegable();
}

function menuDesplegable() {
  const cerrar = document.getElementById("indice-cerrar");
  const abrir = document.getElementById("indice-abrir");
  const indice = document.querySelector(".indice");

  cerrar.addEventListener("click", (e) => {
    indice.style = "display: none";
    document.body.style.overflow = "visible";
  });
  abrir.addEventListener("click", (e) => {
    indice.style = "display: flex";
    document.body.style.overflow = "hidden";
  });
}
