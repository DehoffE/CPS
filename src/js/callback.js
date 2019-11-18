let callbackModal = document.querySelector('.callback-modal');
let buttonShowCallbackModal = document.querySelectorAll('.primary-btn--type_call');
let buttonCloseCallbackModal = callbackModal.querySelector('.callback-modal__close');
let callbackOverlay = document.createElement('div');
callbackOverlay.classList.add('overlay');
callbackOverlay.style.zIndex = '199';

for (let i = 0; i < buttonShowCallbackModal.length; i++) {
    buttonShowCallbackModal[i].addEventListener('click', function(e) {
        e.preventDefault();

        document.body.appendChild(callbackOverlay);
        
        callbackModal.classList.add('callback-modal--open');

        if (detect.parse(navigator.userAgent).browser.family !== 'IE') {
            callbackModal.querySelector('.callback-form__phone-number').focus();
        }

        document.body.style = 'overflow: hidden';
    })
}

buttonCloseCallbackModal.addEventListener('click', function(e) {
    callbackModal.classList.remove('callback-modal--open');

    document.body.removeChild(callbackOverlay);

    document.body.removeAttribute('style');
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
        callbackModal.classList.remove('callback-modal--open');

        document.body.removeChild(callbackOverlay);

        document.body.removeAttribute('style');
    }
});

callbackOverlay.addEventListener('click', function(){
    callbackModal.classList.remove('callback-modal--open');
    document.body.removeAttribute('style');
    document.body.removeChild(this);
});

