document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    // const ta = new TextAnimation('.animate-title');
    const ta2 = new TweenTextAnimation('.tween-animate-title');
    // ta.animate();
    ta2.animate();
    // btn.addEventListener('click', ta.animate.bind(ta))
});


class TextAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.DOM.el.classList.toggle('inview');
    }
}

class TweenTextAnimation extends TextAnimation{
    constructor(el){
        super(el);
        this.DOM.chras = this.DOM.el.querySelectorAll('.char');
    }

    animate(){
        this.DOM.el.classList.add('inview');
        this.DOM.chras.forEach((c, i) => {
            TweenMax.to(c, .6, {
                ease: Back.easeOut,
                delay: i * .05,
                startAt:{y:'-50%', opacity: 0},
                y:'0%',
                opacity:1
            });
        });

    }
}
