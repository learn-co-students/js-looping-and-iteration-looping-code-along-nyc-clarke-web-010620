// Code your solutions in this file

function writeCards(names, event_name){
    let newArray = []
    for (let i=0; i<names.length; i++){
        newArray[i] = `Thank you, ${names[i]}, for the wonderful ${event_name} gift!`
    }
    return newArray
}

function countDown(integer){
    let i = integer
    while (i >= 0){
        console.log(i)
        i--
    }
}