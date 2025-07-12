async function trabajos() {
  const url = await infoImagenes();
  const presentacionImgEl = document.querySelector(
    ".presentacion__trabajo-img"
  );
  if (presentacionImgEl) {
    presentacionImgEl.src = url.trabajo;
  }
}

trabajos();
