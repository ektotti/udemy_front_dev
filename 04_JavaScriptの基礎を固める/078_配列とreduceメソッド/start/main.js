const arry = [1,2,3,4,5];

const strArray = "animation".split('');

let animation = strArray.reduce(
    function(accu, curr){
    return accu + "<" + curr + ">"
},'');

console.log(animation);