async function main() {
  const cards = document.querySelectorAll(".cards");

  if (cards.length > 0) {
    cards.forEach((div) => {
      if (div.classList.contains("trabajos")) {
        readCards(div, true);
      } else {
        readCards(div, false);
      }
    });
  }

  const headerEl = document.querySelector(".header");
  const formEl = document.querySelector(".form-contacto");
  const footerEl = document.querySelector(".footer");
  const presentacionImgEl = document.querySelector(".presentacion__img");
  const sobreMiImgEl = document.querySelector(".sobre-mi__img");
  const fondoServiciosEl = document.querySelector(".servicios");
  const urls = await infoImagenes();

  if (headerEl) {
    createHeader(headerEl);
  }
  if (formEl) {
    insertForm(formEl);
  }
  if (footerEl) {
    insertFooter(footerEl);
  }
  if (presentacionImgEl) {
    presentacionImgEl.src = urls.rocket;
  }
  if (sobreMiImgEl) {
    sobreMiImgEl.src = urls["foto-mia"];
  }
  if (fondoServiciosEl) {
    fondoServiciosEl.style.backgroundImage = `url(${urls.background})`;
  }
}

async function infoImagenes() {
  const prom = await fetch(
    "https://cdn.contentful.com/spaces/t2phjud1eb3w/environments/master/entries?access_token=CReEPmZ_3IIcJYmRop7DgYihQ5cz9l09qqi6t_C6Ass&content_type=images"
  );
  const data = await prom.json();
  const fields = data.items[0].fields;
  const assets = data.includes.Asset;
  const ids = [];
  const urls = {};
  for (const field in fields) {
    const currentField = fields[field];
    if (Array.isArray(currentField)) {
      currentField.forEach((element) => {
        ids.push(element.sys.id);
      });
    } else {
      ids.push(currentField.sys.id);
    }
  }
  ids.forEach((id) => {
    extraerUrl(id);
  });
  return urls;

  function extraerUrl(id) {
    const asset = assets.find((asset) => {
      return asset.sys.id == id;
    });
    const nombre = asset.fields.title;
    const url = asset.fields.file.url;
    urls[nombre] = `https:${url}`;
  }
}

main();
