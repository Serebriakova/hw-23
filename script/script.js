
function sum (accum) {
   
    function sumTotal (num) {
        return accum +=num;
    }
    return sumTotal;
}
let result = sum(4);
console.log(result(5));





