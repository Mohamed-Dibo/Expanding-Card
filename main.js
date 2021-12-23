const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    deleteActiveClass()
    card.classList.add("active");
  });
});
function deleteActiveClass(){
    cards.forEach(card => {
        card.classList.remove("active");
    })
}