// function hello(callback){
//     console.log('hello' + callback('周寛'));
// }

// function name(name){
//     return '戸谷'　+ name;
// }

// hello(name);

function calculate(callback, a, b){
    console.log(callback(a,b));
}

function multiple(a, b){
    return a * b;
}
function plus(a, b){
    return a + b;
}

calculate(plus, 3, 7);

calculate(multiple, 2, 7);