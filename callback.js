function calculator(a,b, callback){
    return callback(a,b);
}

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
var res =  calculator(5, 3, mul);
console.log(res);