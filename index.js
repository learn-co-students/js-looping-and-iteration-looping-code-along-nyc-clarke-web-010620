// Code your solutions in this file
function writeCards(namesArray,event){
    const arr = []
    for (let i = 0; i < namesArray.length; i++) {
        arr.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return arr;
}

function countDown(number) {
    while(number>=0) {
    console.log(number);
    number -= 1;
    }
}
