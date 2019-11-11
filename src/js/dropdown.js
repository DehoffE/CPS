let burger = document.querySelector('.burger');
let dropdownWrap = document.querySelector('.dropdown-menu-wrap');
let dropdown = dropdownWrap.querySelector('.dropdown-menu');
let close = dropdown.querySelector('.dropdown-menu__close');

burger.addEventListener('click', function() {
    dropdownWrap.classList.add('dropdown-menu-wrap--open');

    setTimeout(function(){
        dropdown.classList.add('dropdown-menu--open');
    }, 10);
});

close.addEventListener('click', function() {
    dropdown.classList.remove('dropdown-menu--open');

    setTimeout(function(){
        dropdownWrap.classList.remove('dropdown-menu-wrap--open');
    }, 50);
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
        dropdown.classList.remove('dropdown-menu--open');

        setTimeout(function(){
            dropdownWrap.classList.remove('dropdown-menu-wrap--open');
        }, 50);
    }
});

dropdownWrap.addEventListener('click', function(e) {
    if (e.path[0] === dropdownWrap) {
        dropdown.classList.remove('dropdown-menu--open');

        setTimeout(function(){
            dropdownWrap.classList.remove('dropdown-menu-wrap--open');
        }, 50);
    }
})

