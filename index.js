const arrow = document.querySelector('#arrow');
const cardFooter = document.querySelector('.card-footer');
const mobileFooter = document.querySelector('.footer--mobile');

arrow.addEventListener('click', () => {
    cardFooter.classList.toggle('is-hidden');
    mobileFooter.classList.toggle('is-hidden');
})