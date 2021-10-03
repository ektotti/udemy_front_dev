const child = document.querySelector('.child');

const cb = (entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            child.classList.add('inview');
        }else{
            child.classList.remove('inview');
        }
    })
}
const options = {
    root:null,
    rootMargin: '-300px 0px',
    threshold:0
}

const io = new IntersectionObserver(cb, options);
io.observe(child);
