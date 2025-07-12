async function insertFooter(el) {
  const items = await infoImagenes();
  el.innerHTML = `<section class="footer__logo">
        <img src="${items.logo}" alt="" />
      </section>
      <section class="footer__links">
        <a href="./index.html">
          <div class="link-pagina">
            <img src="${items.home}" class="link-pagina__logo" />
            <h4 class="link-pagina__nombre">Home</h4>
          </div>
        </a>
        <a href="./servicio.html">
          <div class="link-pagina">
            <img src="${items.user}" class="link-pagina__logo" />
            <h4 class="link-pagina__nombre">Servicios</h4>
          </div>
        </a>
        <a href="./contacto.html">
          <div class="link-pagina">
            <img src="${items.phone}" class="link-pagina__logo" />
            <h4 class="link-pagina__nombre">Contacto</h4>
          </div>
        </a>
      </section>
      <section class="footer__redes">
        <a href="https://x.com/Mathi_Monges">
          <img src="${items.twitter}" class="redes__logo" />
        </a>
        <a href="https://www.linkedin.com/in/mathias-monges/">
          <img src="${items.linkedin}" class="redes__logo" />
        </a>
        <a href="https://github.com/Mathi040">
          <img src="${items.github}" class="redes__logo" />
        </a>
      </section>
      <section class="copy"><p>©2025 - mathimonges040@gmail.com</p></section>`;
}
