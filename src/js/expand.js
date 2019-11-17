function clickToExpand(block, btn, indexBtn) {
    indexBtn = !indexBtn ? 0 : +indexBtn;
    let btnElem = document.querySelectorAll('.' + btn)[indexBtn];
    let blockElem = document.querySelector('.' + block);

    btnElem.onclick = function() {
        let expand = false;
        let startValueBtn = btnElem.textContent;

        return function(e) {
            e.preventDefault();
            expand = !expand;
            blockElem.classList.toggle(block + '--expand');
            btnElem.classList.toggle(btn + '--reverse');

            if (expand) {
                btnElem.textContent = 'Свернуть';
            } else {
                btnElem.textContent = startValueBtn;
            }
        }
    }();
}

clickToExpand('about-us__text', 'arrows-link', 0);
clickToExpand('brands__list', 'arrows-link', 1);
clickToExpand('tech-list', 'arrows-link', 2);