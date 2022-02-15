const arrow = document.querySelector('.primary');
const arrowTwo = document.querySelector('.secondary');
const cardFooter = document.querySelector('.card-footer');
const mobileFooter = document.querySelector('.footer--mobile');

arrow.addEventListener('click', () => {
    mobileFooter.classList.remove('is-hidden');
    cardFooter.classList.add('is-hidden');
})

arrowTwo.addEventListener('click', () => {
    cardFooter.classList.remove('is-hidden');
    mobileFooter.classList.add('is-hidden');
})