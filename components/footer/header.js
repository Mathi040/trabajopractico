async function createFooter(el) {
  const items = await infoItems();
  el.innerHTML = `<img src="${items.logo}" class="header__logo" />
      <img src="${items.menu}" class="header__menu" id="indice-abrir" />
    </header>
    <div class="indice">
      <img src="${items.x}" class="indice__cerrar" id="indice-cerrar" />
      <div class="indice__links">
        <a href="" class="indice__link">Servicios</a>
        <a href="" class="indice__link">Trabajo</a>
        <a href="" class="indice__link">Contacto</a>
      </div>
    </div>`;
  menuDesplegable();
}

async function infoItems() {
  const prom = await fetch(
    "https://cdn.contentful.com/spaces/t2phjud1eb3w/environments/master/entries?access_token=CReEPmZ_3IIcJYmRop7DgYihQ5cz9l09qqi6t_C6Ass&content_type=images"
  );
  const data = await prom.json();
  const footer = data.items[0].fields.footer;
  const assets = data.includes.Asset;

  const items = {};

  footer.forEach((element) => {
    const idEl = element.sys.id;
    const asset = assets.find((asset) => {
      return asset.sys.id == idEl;
    });
    const itemName = asset.fields.title;
    const url = `https:${asset.fields.file.url}`;

    items[itemName] = url;
  });

  return items;
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
