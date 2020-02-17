// Code your solutions in this file
function writeCards(arr, message) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = `Thank you, ${arr[i]}, for the wonderful ${message} gift!`
    }
    return arr
}

function countDown(num) {
    while (num > -1) {
        console.log(num)
        num--
    }
}