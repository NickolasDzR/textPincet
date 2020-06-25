const hamburger = document.querySelector('.hamburger'),
    navInner = document.querySelector('.nav__inner');

hamburger.addEventListener('click', e => {
    e.preventDefault();
    hamburger.classList.toggle('hamburger_active');
    navInner.classList.toggle('nav__inner_active');
    document.body.style.overflowY = 'hidden';
    if (hamburger.classList.contains('hamburger_active')) {
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style = "";
    }
})