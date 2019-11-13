let callbackModalWrap = document.querySelector('.callback-modal-wrap');
let callbackModal = callbackModalWrap.querySelector('.callback-modal');
let buttonShowCallbackModal = document.querySelectorAll('.social-btns__button--type_call');
let buttonCloseCallbackModal = callbackModal.querySelector('.callback-modal__close');

for (let i = 0; i < buttonShowCallbackModal.length; i++) {
    buttonShowCallbackModal[i].addEventListener('click', function(e) {
        e.preventDefault();
        callbackModalWrap.classList.add('callback-modal-wrap--open');
        setTimeout(function() {
            callbackModal.classList.add('callback-modal--open');
        }, 10);
        callbackModal.querySelector('.callback-form__phone-number').focus();
    })
}

buttonCloseCallbackModal.addEventListener('click', function(e) {
    callbackModal.classList.remove('callback-modal--open');

    setTimeout(function() {
        callbackModalWrap.classList.remove('callback-modal-wrap--open');
    }, 250);
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
        callbackModal.classList.remove('callback-modal--open');

        setTimeout(function(){
            callbackModalWrap.classList.remove('callback-modal-wrap--open');
        }, 250);
    }
});

callbackModalWrap.addEventListener('click', function(e) {
    if (e.path[0] === callbackModalWrap) {
        callbackModal.classList.remove('callback-modal--open');

        setTimeout(function(){
            callbackModalWrap.classList.remove('callback-modal-wrap--open');
        }, 50);
    }
})