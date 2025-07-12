async function servicios() {
  const url = await infoImagenes();
  const presentacionImgEl = document.querySelector(
    ".presentacion__servicio-img"
  );
  if (presentacionImgEl) {
    presentacionImgEl.src = url.service;
  }
}

servicios();
