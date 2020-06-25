const contactButton = document.querySelector('.contacts__button'),
    overlay = document.querySelector('.overlay'),
    modalSign = document.querySelector('.modal-sign'),
    formButton = document.querySelector('.form__button'),
    modalAccept = document.querySelector('.modal-accept'),
    closeButton = document.querySelectorAll('.close-button');

contactButton.addEventListener('click', e => {
    e.preventDefault();
    overlay.classList.add('overlay_active');
    setTimeout(() => {
        modalSign.classList.add('modal_active');
    }, 200);
})

formButton.addEventListener('click', e => {
    e.preventDefault();
    modalSign.classList.remove('modal_active');
    setTimeout(() => {
        modalAccept.classList.add('modal_active');
    }, 200);
})


closeButton.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.parentElement === modalSign) {
            modalSign.classList.remove('modal_active');
            setTimeout(() => {
                overlay.classList.remove('overlay_active');
            }, 300);
            return;
        }
        if (e.target.parentElement === modalAccept) {
            modalAccept.classList.remove('modal_active');
            setTimeout(() => {
                overlay.classList.remove('overlay_active');
            }, 400);
            return;
        }
    });
});