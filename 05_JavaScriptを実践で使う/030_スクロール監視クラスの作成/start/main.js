document.addEventListener('DOMContentLoaded', function () {
    const cb = function(el, isIntersecting){
        if(isIntersecting){
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }   
    const so = new ScrollObserber('.animate-title', cb)
});