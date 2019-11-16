let feedbackModalWrap = document.querySelector('.feedback-modal-wrap');
let feedbackModal = feedbackModalWrap.querySelector('.feedback-modal');
let buttonShowfeedbackModal = document.querySelectorAll('.primary-btn--type_mail');
let buttonClosefeedbackModal = feedbackModal.querySelector('.feedback-modal__close');

for (let i = 0; i < buttonShowfeedbackModal.length; i++) {
    buttonShowfeedbackModal[i].addEventListener('click', function(e) {
        e.preventDefault();
        feedbackModalWrap.classList.add('feedback-modal-wrap--open');
        setTimeout(function() {
            feedbackModal.classList.add('feedback-modal--open');
        }, 10);
        feedbackModal.querySelector('.feedback-form__name').focus();

        document.body.classList.add('fixed');
    });
}

buttonClosefeedbackModal.addEventListener('click', function(e) {
    feedbackModal.classList.remove('feedback-modal--open');

    setTimeout(function() {
        feedbackModalWrap.classList.remove('feedback-modal-wrap--open');
    }, 250);

        if (document.querySelector('.dropdown-menu-wrap--open') === null) {
            document.body.classList.remove('fixed');
        }
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
        feedbackModal.classList.remove('feedback-modal--open');

        setTimeout(function(){
            feedbackModalWrap.classList.remove('feedback-modal-wrap--open');
        }, 250);

        if (document.querySelector('.dropdown-menu-wrap--open') === null) {
            document.body.classList.remove('fixed');
        }
    }
});

feedbackModalWrap.addEventListener('click', function(e) {
    if (e.path[0] === feedbackModalWrap) {
        feedbackModal.classList.remove('feedback-modal--open');

        setTimeout(function(){
            feedbackModalWrap.classList.remove('feedback-modal-wrap--open');
        }, 50);

        if (document.querySelector('.dropdown-menu-wrap--open') === null) {
            document.body.classList.remove('fixed');
        }
    }
});

function checkForm(formName, requiredFieldsName) {
    let form = document.querySelector('.' + formName);
    let requiredFields = [];

    for (let i = 0; i < requiredFieldsName.length; i++) {
        requiredFields[i] = form.querySelector(requiredFieldsName[i]);
    }

    form.onsubmit = function(e) {
        let canSubmit = true;
        for (let i = 0; i < requiredFields.length; i++) {
            if (requiredFields[i].value === '') {
                canSubmit = false;
                requiredFields[i].style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
            }
        }

        if (!canSubmit) {
            e.preventDefault();
        }
    }
}

checkForm('feedback-form', ['.feedback-form__name', '.feedback-form__email']);