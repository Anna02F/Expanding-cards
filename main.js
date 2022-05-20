const cards = document.querySelector("#cards-container");
const card = cards.querySelectorAll(".card");

cards.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) {
        removeActiveClasses();
        card.classList.add("active");
    }
});

const removeActiveClasses = () => {
    card.forEach((c) => c.classList.remove("active"));
};
