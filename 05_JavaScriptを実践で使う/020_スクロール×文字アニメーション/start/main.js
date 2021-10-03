document.addEventListener('DOMContentLoaded', function () {
    const els = document.querySelectorAll('.animate-title');
    const cb = function(el, isIntersecting){
        const ta = new TextAnimation(el);
        if(isIntersecting){
            ta.animate();
        }
    }
        
    const so = new ScrollObserber('.animate-title', cb)
});

// const cb = (entries, observer)=>{
//     entries.forEach(entry=>{
//         if(entry.isIntersecting){
//             const ta = new TextAnimation(entry.target);
//             ta.animate();
//             observer.unobserve(entry.target);
//         }
//     })
// }
// const options = {
//     root:null,
//     rootMargin: '0px',
//     threshold:0
// }


class ScrollObserber{
    constructor(els, cb, options){
       this.els =  document.querySelectorAll(els);
       this.cb = cb;
       const defaultOptions = {
        root:null,
        rootMargin: '0px',
        threshold:0
        }
        this.options = Object.assign(defaultOptions, options);
       this._init();
    }
    _init(){
        const callback = (entries, observer)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    this.cb(entry.target, true);
                    observer.unobserve(entry.target);
                }else{
                    this.cb(entry.target, false);
                }
            });
        };
        this.io = new IntersectionObserver(callback.bind(this), this.options);
        this.els.forEach(el =>{
            this.io.observe(el);
        } )
    }


}