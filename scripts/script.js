const ratingURL = window.location.search;
const ratingParams = new URLSearchParams(ratingURL);
const ratingValue = ratingParams.get('rating');

const infoElement = document.querySelector('.rating__value');

if (ratingValue) {
    infoElement.innerHTML = `You selected ${ratingValue} out of 5`;
}