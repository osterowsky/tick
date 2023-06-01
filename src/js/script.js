// Hello

const selectRadioCard = (cardNo) => {
    /**
     * Loop through all radio cards, and remove the class "selected" from those elements.
     */
    const allRadioCards = document.querySelectorAll(".radio-card");
    allRadioCards.forEach((element, index) => {
        element.classList.remove(["selected"]);
    });
    /**
     * Add the class "selected" to the card which user has clicked on.
     */
    const selectedCard = document.querySelector(".radio-card-" + cardNo);
    selectedCard.classList.add(["selected"]);
};

    // Open the popup
    function openPopup() {
        const popup = document.getElementById("popup");
        popup.style.display = "flex";
      }

    // Close the popup
    function closePopup() {
        const popup = document.getElementById("popup");
        popup.style.display = "none";
      }
  