function openPopup(imgElement, description) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const popupDescription = document.getElementById("popup-description");

    popupImg.src = imgElement.src;
    popupDescription.textContent = description;
    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
