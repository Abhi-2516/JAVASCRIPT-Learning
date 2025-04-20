const openModalBtnElement = document.querySelector('#openModal');
const modalElement = document.querySelector('.modal');
const modalContentElement = modalElement.querySelector('.modal__content');

// Hide modal initially
modalElement.style.display = 'none';

openModalBtnElement.addEventListener('click', () => {
    modalElement.style.display = 'flex'; // Show the modal
});

modalContentElement.addEventListener('click', () => {
    modalElement.style.display = 'none'; // Hide the modal
});
