const contactButton = document.querySelector('.contact__button'),
    overlay = document.querySelector('.overlay'),
    modalSign = document.querySelector('.modal-sign'),
    formButton = document.querySelector('.form__button'),
    modalAccept = document.querySelector('.modal-accept'),
    closeButton = document.querySelectorAll('.close-button');

contactButton.addEventListener('click', e => {
    e.preventDefault();
    overlay.classList.add('overlay_active');
    modalSign.classList.add('modal_active');
})

formButton.addEventListener('click', e => {
    e.preventDefault();
    modalSign.classList.remove('modal_active');
    setTimeout(() => {
        modalAccept.classList.add('modal_active');
    }, 500);
})


closeButton.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.parentElement === modalSign) {
            overlay.classList.remove('overlay_active');
            setTimeout(() => {
                modalSign.classList.remove('modal_active');
            }, 200);
            return;
        }
        if (e.target.parentElement === modalAccept) {
            overlay.classList.remove('overlay_active');
            setTimeout(() => {
                modalAccept.classList.remove('modal_active');
            }, 200);
            return;
        }
    });
});