let burger = document.querySelector('.burger');
let dropdown = document.querySelector('.dropdown-menu');
let close = dropdown.querySelector('.dropdown-menu__close');

burger.addEventListener('click', function() {
    dropdown.classList.add('dropdown-menu--open');
});

close.addEventListener('click', function() {
    dropdown.classList.remove('dropdown-menu--open');
});

