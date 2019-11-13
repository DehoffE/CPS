let slider = document.querySelector('.slider');
let techSlider = document.querySelector('.tech-slider');
let priceSlider = document.querySelector('.price-slider');
let navSlider = document.querySelector('.nav-slider');

function createControls(obj) {
    let moveLength = +parseInt(window.getComputedStyle(obj.firstElementChild.firstElementChild).width) + +parseInt(window.getComputedStyle(obj.firstElementChild.firstElementChild).marginRight);
    let controls = document.createElement('div');
    controls.classList.add('controls');
  
    for (let i = 0; i < obj.firstElementChild.children.length; i++) {
        let control = document.createElement('div');

        control.classList.add('control');

        if (i === 0) {
            control.classList.add('control--active');
        }

        control.onclick = (function(i, control) {
            return function() { 
                let preActive = obj.querySelector('.control--active');
                preActive.classList.remove('control--active');
                control.classList.add('control--active');            
                obj.firstElementChild.style.left = -moveLength * i + 'px';
            }
        }(i, control));
        
        controls.appendChild(control);
    }
  
    obj.appendChild(controls);
}

createControls(slider);
createControls(techSlider);
createControls(priceSlider);

function runSlider(obj) {
    let moveLength = +parseInt(window.getComputedStyle(obj.firstElementChild.firstElementChild).width) + +parseInt(window.getComputedStyle(obj.firstElementChild.firstElementChild).marginRight);

    obj.firstElementChild.onmousedown = function(e) {
        if (obj.firstElementChild.style.left == "") {
            obj.firstElementChild.style.left = 0;
        }
      
        let startPosition = +parseInt(obj.firstElementChild.style.left);
      
        obj.firstElementChild.onmousemove = function(e) {
            obj.firstElementChild.style.left = +parseInt(obj.firstElementChild.style.left) + e.movementX + "px";
            
            document.onmouseup = function() {
                obj.firstElementChild.classList.add('slider__list--animate');
                obj.firstElementChild.onmousemove = null;
    
                let endPosition = +parseInt(obj.firstElementChild.style.left);
                let diff = startPosition - endPosition;
    
                if (startPosition - diff > 0 || startPosition - diff < (obj.firstElementChild.children.length - 1) * - moveLength) {
                    obj.firstElementChild.style.left = startPosition + 'px';
                } else {
                    if (diff > -moveLength / 2 && diff < moveLength / 2) {
                        obj.firstElementChild.style.left = startPosition + 'px';
                    } else if (diff < -moveLength / 2) {
                        obj.firstElementChild.style.left = startPosition - -moveLength + 'px';
                        obj.querySelector('.control--active').classList.remove('control--active');
                        obj.querySelectorAll('.control')[(((startPosition) / moveLength) * -1) - 1].classList.add('control--active');
                    } else if (diff > moveLength / 2) {
                        obj.firstElementChild.style.left = startPosition - moveLength + 'px';
                        obj.querySelector('.control--active').classList.remove('control--active');
                        obj.querySelectorAll('.control')[(((startPosition) / moveLength) * -1) + 1].classList.add('control--active');
                    }
                }
    
                setTimeout(function() {
                    obj.firstElementChild.classList.remove('slider__list--animate');
                }, 300);
            }
        }
    }
}

runSlider(slider);
runSlider(techSlider);
runSlider(priceSlider);
runSlider(navSlider);