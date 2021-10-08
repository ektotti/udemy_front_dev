document.addEventListener('DOMContentLoaded', function () {

    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            el.classList.toggle('inview');
        }
    
    }

    const so = new ScrollObserver('.cover-slide', cb);
});

