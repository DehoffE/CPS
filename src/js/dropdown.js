let burger = document.querySelector('.burger');
let dropdownWrap = document.querySelector('.dropdown-menu-wrap');
let dropdown = dropdownWrap.querySelector('.dropdown-menu');
let close = dropdown.querySelector('.dropdown-menu__close');

burger.addEventListener('click', function() {
    dropdownWrap.classList.add('dropdown-menu-wrap--open');

    setTimeout(function(){
        dropdown.classList.add('dropdown-menu--open');
    }, 10);

    document.body.classList.add('fixed');
});

close.addEventListener('click', function() {
    dropdown.classList.remove('dropdown-menu--open');

    setTimeout(function(){
        dropdownWrap.classList.remove('dropdown-menu-wrap--open');
    }, 50);

    document.body.classList.remove('fixed');
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
        dropdown.classList.remove('dropdown-menu--open');

        setTimeout(function(){
            dropdownWrap.classList.remove('dropdown-menu-wrap--open');
        }, 50);

        document.body.classList.remove('fixed');
    }
});

dropdownWrap.addEventListener('click', function(e) {
    if (e.target === dropdownWrap) {
        dropdown.classList.remove('dropdown-menu--open');

        setTimeout(function(){
            dropdownWrap.classList.remove('dropdown-menu-wrap--open');
        }, 50);
    
        document.body.classList.remove('fixed');
    }
});

