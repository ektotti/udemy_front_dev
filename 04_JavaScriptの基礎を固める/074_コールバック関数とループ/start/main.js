const array = [1,2,3,4,5,6];

function forEach(ary, callback){
    for(let i=0; i < ary.length; i++){
        let val = ary[i];
        callback(val);
    }
}

function log(val){
    console.log(val);
}

function double(val){
    val = val * 2
    log(val);
}

forEach(array, log);

forEach(array, double);