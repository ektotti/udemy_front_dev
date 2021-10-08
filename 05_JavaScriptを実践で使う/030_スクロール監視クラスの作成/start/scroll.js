class ScrollObserber{
    constructor(els, cb, options){
       this.els =  document.querySelectorAll(els);
       this.cb = cb;
       const defaultOptions = {
        root:null,
        rootMargin: '0px',
        threshold:0,
        once:true,
        }
        this.options = Object.assign(defaultOptions, options);
       this._init();
    }
    _init(){
        const callback = (entries, observer)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    this.cb(entry.target, true);
                    if(this.options.once == true){
                        observer.unobserve(entry.target);
                    }
                }else{
                    this.cb(entry.target, false);
                }
            });
        };
        this.io = new IntersectionObserver(callback.bind(this), this.options);
        
        this.io.POLL_INTERVAL = 100;

        this.els.forEach(el =>this.io.observe(el));
    }

    destroy(){
        this.io.disconnect();
    }

}