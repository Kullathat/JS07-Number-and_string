const num = 3.1289;

// const result = Math.trunc(num.toFixed(3) * 100) / 100;
const result = (Math.floor(num * 100) / 100).toFixed(2);


function trunc(num) {
    return (Math.floor(num * 100) / 100).toFixed(2);
}
console.log(result);


