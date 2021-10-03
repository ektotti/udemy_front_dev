document.addEventListener('DOMContentLoaded', function(){
    // const el = document.querySelector('.animate-title');
    // const str = animateTitele.textContent.trim().split('');
    
    // el.innerHTML = str.reduce(function(accu, curr){
    //     curr = curr.replace(" ", '&nbsp;');
    //     return `${accu}<span class="char">${curr}</span>`;
    // },'');

    const ta = new TextAnimation('.animate-title');
    // const ta2 = new TextAnimation('.animate-title-2');


})

class TextAnimation{
    constructor(el){
        this.el = document.querySelector(el);
        this.str = this.el.innerHTML.trim().split('');
        this.el.innerHTML = this._splitText();
    }

    _splitText(){
        return this.str.reduce(function(accu, curr){
            curr = curr.replace(" ", '&nbsp;');
            return `${accu}<span class="char">${curr}</span>`;
        },'');
    }

}