const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
    return `${accu}<${curr}>`;
}

// const result = strArry.reduce(tag, "");
// console.log(result);


function reduce(array, callback, defaultVal){
    let accu = defaultVal;
    for(i = 0; i < array.length; i++){
        let curr = array[i];
        accu = callback(accu, curr);
    }
    return accu;
}

const result = reduce(strArry, tag, '');
console.log(result);