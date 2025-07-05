async function readCards(cards, trabajoCardCheck) {
  let data = await infoCards();
  if (!trabajoCardCheck) {
    data = data.filter((item) => item.titulo != "Trabajo");
    createCards(data);
  } else if (trabajoCardCheck) {
    data = data.filter((item) => item.titulo == "Trabajo");
    createCards(data);
  }
  function createCards(data) {
    for (let i = 0; i < data.length; i++) {
      let info = data[i];
      let div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `<img src="${info.url}" alt="" class="card__img" />
      <h3 class="card__title">${info.titulo}</h3>
      <p class="card__description">${info.descripcion}</p>`;
      cards.appendChild(div);
    }
  }
}

async function infoCards() {
  const prom = await fetch(
    "https://cdn.contentful.com/spaces/t2phjud1eb3w/environments/master/entries?access_token=CReEPmZ_3IIcJYmRop7DgYihQ5cz9l09qqi6t_C6Ass&content_type=card"
  );
  let cardsInfo = [];
  const data = await prom.json();
  const items = data.items;
  const assets = data.includes.Asset;
  items.forEach((card) => {
    let desc = card.fields.descripcionCard;
    let title = card.fields.tituloCard;
    let img = buscarURL(card.fields.imagenCard.sys.id, assets);

    let newCard = {
      descripcion: desc,
      titulo: title,
      url: img,
    };

    cardsInfo.push(newCard);
  });
  return cardsInfo;

  function buscarURL(id, assets) {
    const asset = assets.find((asset) => {
      return asset.sys.id === id;
    });
    const url = `https:${asset.fields.file.url}`;
    return url;
  }
}
