function main() {
  document.querySelectorAll(".cards").forEach((div) => {
    if (div.classList.contains("trabajos")) {
      readCards(div, true);
    } else {
      readCards(div, false);
    }
  });

  const el = document.querySelector(".header");
  createFooter(el);
}

main();
