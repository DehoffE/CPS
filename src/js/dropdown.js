let burger = document.querySelector('.burger');
let dropdown = document.querySelector('.dropdown-menu');
let close = dropdown.querySelector('.dropdown-menu__close');
let dropdownOverlay = document.createElement('div');

if (detect.parse(navigator.userAgent).browser.family === 'Mobile Safari') {
    dropdown.classList.add('dropdown-menu--safari_bug-fix');
}

burger.addEventListener('click', function() { 
    dropdownOverlay.classList.add('overlay');

    document.body.appendChild(dropdownOverlay);

    dropdown.classList.add('dropdown-menu--open');

    document.body.classList.add('fixed');
});

close.addEventListener('click', function() {
    dropdown.classList.remove('dropdown-menu--open');

    document.body.removeChild(dropdownOverlay);

    document.body.removeAttribute('class');
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
        dropdown.classList.remove('dropdown-menu--open');

        document.body.removeAttribute('class');
    }
});

dropdownOverlay.addEventListener('click', function(){
    dropdown.classList.remove('dropdown-menu--open');
    document.body.removeChild(this);
    document.body.removeAttribute('class');
});
